import Link from 'next/link'
import { normalizePath } from '@/lib/wordpress'

const DEFAULT_FOOTER_DESC =
  'Affordable WordPress website design, plugin development, SEO, and digital marketing for small businesses that want to be found, trusted, and chosen online.'

export default function Footer({ settings = {} }) {
  const brandMark = settings.brand_mark || 'ME'
  const brandName = settings.brand_name || 'Mostafij Emon'
  const brandTagline = settings.brand_tagline || 'Web Developer · SEO'
  const footerDescription = settings.footer_description || DEFAULT_FOOTER_DESC
  const contactEmail = settings.contact_email || 'hello@mostafijemon.com'
  const contactWebsite = settings.contact_website || 'https://mostafijemon.com'
  const copyrightTagline = settings.copyright_tagline || 'WordPress · SEO · Affordable web design near you'
  const responseTime = settings.response_time || 'Usually within 24 hours'

  const websiteHost = (() => {
    try {
      return new URL(contactWebsite).hostname.replace(/^www\./, '')
    } catch {
      return 'mostafijemon.com'
    }
  })()

  const navItems = Array.isArray(settings.nav_items) ? settings.nav_items : []

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link className="brand" href="/" style={{ color: '#fff' }}>
              <span className="mark">{brandMark}</span>
              <span style={{ color: '#fff' }}>{brandName}<small>{brandTagline}</small></span>
            </Link>
            <p>{footerDescription}</p>
          </div>
          <div>
            <h4>Services</h4>
            <ul className="foot-links">
              <li><Link href="/website-design">Website Design</Link></li>
              <li><Link href="/plugin-development">Plugin Development</Link></li>
              <li><Link href="/seo">SEO Services</Link></li>
              <li><Link href="/gmb-setup">GMB Setup</Link></li>
              <li><Link href="/ecommerce-solutions">E-commerce</Link></li>
              <li><Link href="/website-maintenance">Maintenance</Link></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul className="foot-links">
              {navItems.length > 0
                ? navItems
                    .filter((item) => !/service/i.test(item.label))
                    .map((item, i) => (
                      <li key={`${item.url}-${i}`}>
                        <Link href={normalizePath(item.url)}>{item.label}</Link>
                      </li>
                    ))
                : (
                  <>
                    <li><Link href="/my-story">My Story</Link></li>
                    <li><Link href="/portfolio">Portfolio</Link></li>
                    <li><Link href="/blogs">Blogs</Link></li>
                    <li><Link href="/services">All Services</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                  </>
                )}
            </ul>
          </div>
          <div>
            <h4>Get in touch</h4>
            <ul className="foot-links">
              <li><a href={`mailto:${contactEmail}`}>{contactEmail}</a></li>
              <li><Link href="/contact">Book a free consultation</Link></li>
              <li>
                <a href={contactWebsite} target="_blank" rel="noopener noreferrer">
                  {websiteHost}
                </a>
              </li>
              <li>{responseTime}</li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} {brandName}. All rights reserved.</span>
          <span>{copyrightTagline}</span>
        </div>
      </div>
    </footer>
  )
}
