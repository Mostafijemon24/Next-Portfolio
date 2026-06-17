/** Next.js route path → WordPress service CPT slug */
export const NEXT_TO_WP_SLUG = {
  'website-design': 'website-design',
  seo: 'seo',
  'gmb-setup': 'gmb-setup',
  'social-marketing': 'social-marketing',
  'website-maintenance': 'website-maintenance',
  'digital-marketing': 'digital-marketing',
  'graphic-logo-design': 'graphic-logo-design',
  'ecommerce-solutions': 'e-commerce-solutions',
  'plugin-development': 'plugin-development',
}

export const SERVICE_PATHS = Object.keys(NEXT_TO_WP_SLUG)

export function getWpSlug(nextPath) {
  return NEXT_TO_WP_SLUG[nextPath] || nextPath
}
