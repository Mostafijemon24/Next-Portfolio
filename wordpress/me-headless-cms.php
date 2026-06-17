<?php
/**
 * Plugin Name: ME Headless CMS
 * Description: CPTs, ACF Options Page REST, and CORS for Next.js frontend.
 * Version: 1.0.0
 * Author: Mostafij Emon
 */

if (!defined('ABSPATH')) {
    exit;
}

// ACF REST: return fields as plain object (not nested "acf" wrapper issues)
add_filter('acf/settings/rest_api_format', function () {
    return 'standard';
});

/**
 * 1) Custom Post Types (Headless — show_in_rest required)
 */
add_action('init', function () {
    $cpts = [
        'service'     => ['Services', 'Service', 'dashicons-admin-tools'],
        'portfolio'   => ['Portfolio', 'Project', 'dashicons-portfolio'],
        'testimonial' => ['Testimonials', 'Testimonial', 'dashicons-format-quote'],
        'client_logo' => ['Client Logos', 'Client Logo', 'dashicons-format-image'],
    ];

    foreach ($cpts as $slug => [$plural, $singular, $icon]) {
        register_post_type($slug, [
            'labels'       => [
                'name'          => $plural,
                'singular_name' => $singular,
            ],
            'public'       => true,
            'show_in_rest' => true,
            'has_archive'  => false,
            'rewrite'      => ['slug' => $slug, 'with_front' => false],
            'supports'     => ['title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'],
            'menu_icon'    => $icon,
        ]);
    }

    register_taxonomy('portfolio_category', 'portfolio', [
        'label'        => 'Portfolio Categories',
        'public'       => true,
        'show_in_rest' => true,
        'hierarchical' => true,
    ]);
});

/**
 * 2) ACF Options Page — single registration with REST enabled
 */
add_action('acf/init', function () {
    if (!function_exists('acf_add_options_page')) {
        return;
    }

    acf_add_options_page([
        'page_title'   => 'Site Settings',
        'menu_title'   => 'Site Settings',
        'menu_slug'    => 'site-settings',
        'post_id'      => 'site-settings',
        'capability'   => 'edit_posts',
        'redirect'     => false,
        'show_in_rest' => true,
    ]);
});

/**
 * Read Site Settings using correct ACF post_id
 */
function me_get_site_settings_fields() {
    if (!function_exists('get_fields')) {
        return new WP_Error('acf_missing', 'ACF is not active.', ['status' => 500]);
    }

    $ids = ['site-settings', 'options', 'option'];

    if (function_exists('acf_get_options_page')) {
        $page = acf_get_options_page('site-settings');
        if (!empty($page['post_id'])) {
            array_unshift($ids, $page['post_id']);
        }
    }

    foreach (array_unique($ids) as $id) {
        $fields = get_fields($id);
        if (is_array($fields) && $fields !== []) {
            return $fields;
        }
    }

    if (function_exists('acf_get_field_groups') && function_exists('acf_get_fields')) {
        $groups = acf_get_field_groups(['options_page' => 'site-settings']);
        if (empty($groups)) {
            $groups = acf_get_field_groups(['options_page' => 'acf-options-site-settings']);
        }

        $out = [];
        foreach ($groups as $group) {
            foreach (acf_get_fields($group['key']) ?: [] as $field) {
                if (!empty($field['name'])) {
                    $out[$field['name']] = get_field($field['name'], 'options')
                        ?: get_field($field['name'], 'option')
                        ?: get_field($field['name'], 'site-settings')
                        ?: '';
                }
            }
        }
        if ($out !== []) {
            return $out;
        }
    }

    return [];
}

/**
 * 3) Site Settings REST API — GET /wp-json/me/v1/site-settings
 */
add_action('rest_api_init', function () {
    register_rest_route('me/v1', '/site-settings', [
        'methods'             => 'GET',
        'permission_callback' => '__return_true',
        'callback'            => function () {
            $fields = me_get_site_settings_fields();
            return is_wp_error($fields) ? $fields : rest_ensure_response($fields);
        },
    ]);
});

/**
 * 4) CORS for Next.js frontends
 */
add_action('rest_api_init', function () {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');

    add_filter('rest_pre_serve_request', function ($value) {
        $allowed = [
            'https://next.mostafijemon.com',
            'https://mostafij-emon-next.vercel.app',
            'https://mostafijemon.com',
            'http://localhost:3000',
        ];

        $origin = $_SERVER['HTTP_ORIGIN'] ?? '';

        if (in_array($origin, $allowed, true)) {
            header("Access-Control-Allow-Origin: $origin");
            header('Access-Control-Allow-Methods: GET, OPTIONS');
            header('Access-Control-Allow-Headers: Content-Type, Authorization');
        }

        return $value;
    });
});

/**
 * Flush rewrite rules once after plugin activation
 */
register_activation_hook(__FILE__, function () {
    // Trigger CPT registration before flush
    do_action('init');
    flush_rewrite_rules();
});
