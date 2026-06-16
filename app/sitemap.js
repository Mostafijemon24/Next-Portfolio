export default function sitemap() {
  const base = 'https://mostafijemon.com'
  const routes = [
    '', '/my-story', '/services', '/website-design', '/plugin-development', '/seo',
    '/gmb-setup', '/social-marketing', '/website-maintenance', '/digital-marketing',
    '/graphic-logo-design', '/ecommerce-solutions', '/portfolio', '/blogs', '/contact',
  ]
  return routes.map((r) => ({
    url: base + r,
    changeFrequency: 'monthly',
    priority: r === '' ? 1 : 0.8,
  }))
}
