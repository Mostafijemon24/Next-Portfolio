<?php
/**
 * Headless CMS — paste at the END of your theme's functions.php
 * Theme: Hello Elementor (or child theme functions.php)
 * WordPress: next.mostafijemon.com
 */

// ACF REST: plain field object in API responses
add_filter('acf/settings/rest_api_format', function () {
    return 'standard';
});

// 1) Custom Post Types (show_in_rest required for headless)
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

// Helper: read Site Settings fields using the correct ACF post_id
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

    // Fields exist but values empty — return field keys so API is not blank after first save
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

// 2) ACF Options Page — post_id must match how ACF stores data
add_action('acf/init', function () {
    if (!function_exists('acf_add_options_page')) {
        return;
    }

    acf_add_options_page([
        'page_title'   => 'Site Settings',
        'menu_title'   => 'Site Settings',
        'menu_slug'    => 'site-settings',
        'post_id'      => 'site-settings', // important for get_fields() + REST
        'capability'   => 'edit_posts',
        'redirect'     => false,
        'show_in_rest' => true,
    ]);
});

// 3) Site Settings REST API (use this — acf/v3 needs extra plugin)
// GET /wp-json/me/v1/site-settings
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

// 4) CORS for Next.js frontends
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
            header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
            header('Access-Control-Allow-Headers: Content-Type, Authorization');
        }

        return $value;
    });
});

// 5) On-demand revalidation — কনটেন্ট সেভ করলেই Vercel cache purge
// Vercel frontend URL + একই secret (Vercel env REVALIDATE_SECRET এর সাথে মিলতে হবে)
define('ME_REVALIDATE_URL', 'https://mostafijemon.com/api/revalidate');
define('ME_REVALIDATE_SECRET', '5d3ff4b0e86754f8fcd6f6093fdca24a173084eba04d4a28');

function me_trigger_revalidate() {
    // অপ্রয়োজনীয় ট্রিগার এড়াতে: autosave/revision বাদ
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }

    wp_remote_post(ME_REVALIDATE_URL, [
        'timeout'   => 5,
        'blocking'  => false, // সেভ স্লো করবে না
        'headers'   => ['x-revalidate-secret' => ME_REVALIDATE_SECRET],
        'body'      => ['now' => time()],
    ]);
}

// পোস্ট/পেজ/CPT সেভ বা ডিলিট হলে
add_action('save_post', 'me_trigger_revalidate', 20);
add_action('deleted_post', 'me_trigger_revalidate', 20);
// ACF options (Site Settings) সেভ হলে
add_action('acf/save_post', function ($post_id) {
    if ($post_id === 'site-settings' || $post_id === 'options') {
        me_trigger_revalidate();
    }
}, 20);

// 6a) "Inquiries" inbox — every contact submission is saved here (visible in wp-admin),
// so leads are never lost even if email delivery fails on the host.
add_action('init', function () {
    register_post_type('me_inquiry', [
        'labels'    => ['name' => 'Inquiries', 'singular_name' => 'Inquiry'],
        'public'    => false,
        'show_ui'   => true,
        'menu_icon' => 'dashicons-email-alt',
        'supports'  => ['title', 'editor'],
    ]);
});

// 6b) Headless contact form endpoint (no Formspree, no iframe).
// React form POSTs (application/x-www-form-urlencoded) to /wp-json/me/v1/contact
add_action('rest_api_init', function () {
    register_rest_route('me/v1', '/contact', [
        'methods'             => 'POST',
        'permission_callback' => '__return_true',
        'callback'            => function (WP_REST_Request $req) {
            $name    = sanitize_text_field($req->get_param('name'));
            $email   = sanitize_email($req->get_param('email'));
            $service = sanitize_text_field($req->get_param('service'));
            $message = sanitize_textarea_field($req->get_param('message'));

            if (empty($name) || empty($email) || !is_email($email)) {
                return new WP_REST_Response(
                    ['ok' => false, 'message' => 'Please provide your name and a valid email.'],
                    422
                );
            }

            // 1) Always save the inquiry (never lose a lead)
            wp_insert_post([
                'post_type'    => 'me_inquiry',
                'post_status'  => 'publish',
                'post_title'   => $name . ' — ' . $email,
                'post_content' => "Service: {$service}\n\n{$message}",
            ]);

            // 2) Try to email it (won't crash if mail is misconfigured)
            $sent    = false;
            $to      = get_option('admin_email');
            $subject = 'New inquiry from ' . $name;
            $body    = "Name: {$name}\nEmail: {$email}\nService: {$service}\n\nMessage:\n{$message}\n";
            $headers = ['Reply-To: ' . $name . ' <' . $email . '>'];
            try {
                $sent = wp_mail($to, $subject, $body, $headers);
            } catch (\Throwable $e) {
                $sent = false;
            }

            // Success either way — the submission is stored; email is best-effort
            return new WP_REST_Response(['ok' => true, 'emailed' => (bool) $sent], 200);
        },
    ]);
});
