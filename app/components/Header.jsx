'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { normalizePath } from '@/lib/wordpress'

const DEFAULT_SERVICES = [
  { href: '/services', label: 'All Services' },
  { href: '/website-design', label: 'Website Design' },
  { href: '/plugin-development', label: 'Plugin Development' },
  { href: '/seo', label: 'Search Engine Optimization' },
  { href: '/gmb-setup', label: 'Google Business Profile (GMB)' },
  { href: '/social-marketing', label: 'Social Media Marketing' },
  { href: '/website-maintenance', label: 'Website Maintenance' },
  { href: '/digital-marketing', label: 'Digital Marketing' },
  { href: '/graphic-logo-design', label: 'Graphic & Logo Design' },
  { href: '/ecommerce-solutions', label: 'E-commerce Solutions' },
]

function getServiceLinks(settings) {
  const items = settings?.service_nav_items
  if (!Array.isArray(items) || items.length === 0) return DEFAULT_SERVICES
  return items.map((item) => ({
    href: normalizePath(item.url),
    label: item.label,
  }))
}

function isServiceNavItem(item) {
  const href = normalizePath(item.url)
  return /service/i.test(item.label) || href === '/service' || href === '/services'
}

export default function Header({ settings = {} }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [subOpen, setSubOpen] = useState(false)
  const pathname = usePathname()

  const brandMark = settings.brand_mark || 'ME'
  const brandName = settings.brand_name || 'Mostafij Emon'
  const brandTagline = settings.brand_tagline || 'Web Developer · SEO'
  const navItems = Array.isArray(settings.nav_items) ? settings.nav_items : []
  const ctaLink = normalizePath(settings.nav_cta_link || '/contact')
  const ctaText = settings.nav_cta_text || 'Get a Free Quote'
  const serviceLinks = getServiceLinks(settings)
  const servicePaths = serviceLinks.map((s) => s.href)

  useEffect(() => {
    setMenuOpen(false)
    setSubOpen(false)
  }, [pathname])

  const cls = (href) => (pathname === href ? 'is-active' : undefined)
  const servicesActive = servicePaths.includes(pathname)

  function renderNavItem(item, index) {
    const href = normalizePath(item.url)
    const children = Array.isArray(item.children) ? item.children : []

    if (isServiceNavItem(item)) {
      return (
        <li key={`${item.label}-${index}`} className={`has-sub${subOpen ? ' open' : ''}`}>
          <button
            className="nav-toggle-sub"
            aria-haspopup="true"
            aria-expanded={subOpen}
            onClick={() => setSubOpen((o) => !o)}
          >
            <span className={servicesActive ? 'is-active' : undefined}>{item.label}</span> ▾
          </button>
          <div className="sub">
            <span className="sub-tag">Overview</span>
            {serviceLinks.map((s) => (
              <Link key={s.href} href={s.href}>{s.label}</Link>
            ))}
          </div>
        </li>
      )
    }

    if (children.length > 0) {
      return (
        <li key={`${item.label}-${index}`} className={`has-sub${subOpen ? ' open' : ''}`}>
          <button
            className="nav-toggle-sub"
            aria-haspopup="true"
            aria-expanded={subOpen}
            onClick={() => setSubOpen((o) => !o)}
          >
            <span className={cls(href)}>{item.label}</span> ▾
          </button>
          <div className="sub">
            {children.map((child, i) => (
              <Link key={`${child.url}-${i}`} href={normalizePath(child.url)}>
                {child.label}
              </Link>
            ))}
          </div>
        </li>
      )
    }

    return (
      <li key={`${item.label}-${index}`}>
        <Link href={href} className={cls(href)}>{item.label}</Link>
      </li>
    )
  }

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Primary">
        <Link className="brand" href="/">
          <span className="mark">{brandMark}</span>
          <span>{brandName}<small>{brandTagline}</small></span>
        </Link>
        <ul className={`nav-list${menuOpen ? ' open' : ''}`} id="navList">
          {navItems.length > 0
            ? navItems.map(renderNavItem)
            : (
              <>
                <li><Link href="/" className={cls('/')}>Home</Link></li>
                <li><Link href="/my-story" className={cls('/my-story')}>My Story</Link></li>
                <li className={`has-sub${subOpen ? ' open' : ''}`}>
                  <button
                    className="nav-toggle-sub"
                    aria-haspopup="true"
                    aria-expanded={subOpen}
                    onClick={() => setSubOpen((o) => !o)}
                  >
                    <span className={servicesActive ? 'is-active' : undefined}>Services</span> ▾
                  </button>
                  <div className="sub">
                    <span className="sub-tag">Overview</span>
                    {serviceLinks.map((s) => (
                      <Link key={s.href} href={s.href}>{s.label}</Link>
                    ))}
                  </div>
                </li>
                <li><Link href="/portfolio" className={cls('/portfolio')}>Portfolio</Link></li>
                <li><Link href="/blogs" className={cls('/blogs')}>Blogs</Link></li>
                <li><Link href="/contact" className={cls('/contact')}>Contact</Link></li>
              </>
            )}
        </ul>
        <Link className="btn btn--primary nav-cta" href={ctaLink}>{ctaText}</Link>
        <button
          className="nav-toggle"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="navList"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span></span>
        </button>
      </nav>
    </header>
  )
}
