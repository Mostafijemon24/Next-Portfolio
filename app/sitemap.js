import { SERVICE_PATHS } from '@/lib/service-registry'
import { getSiteUrl } from '@/lib/site-url'

export default function sitemap() {
  const base = getSiteUrl()
  const routes = [
    '',
    '/my-story',
    '/services',
    ...SERVICE_PATHS.map((path) => `/${path}`),
    '/portfolio',
    '/blogs',
    '/contact',
  ]

  return routes.map((route) => ({
    url: `${base}${route}`,
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
