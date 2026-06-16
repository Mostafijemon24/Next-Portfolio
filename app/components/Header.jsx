'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SERVICES = [
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
const SERVICE_PATHS = SERVICES.map((s) => s.href)

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [subOpen, setSubOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMenuOpen(false)
    setSubOpen(false)
  }, [pathname])

  const cls = (href) => (pathname === href ? 'is-active' : undefined)
  const servicesActive = SERVICE_PATHS.includes(pathname)

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Primary">
        <Link className="brand" href="/">
          <span className="mark">ME</span>
          <span>Mostafij Emon<small>Web Developer · SEO</small></span>
        </Link>
        <ul className={`nav-list${menuOpen ? ' open' : ''}`} id="navList">
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
              {SERVICES.map((s) => (
                <Link key={s.href} href={s.href}>{s.label}</Link>
              ))}
            </div>
          </li>
          <li><Link href="/portfolio" className={cls('/portfolio')}>Portfolio</Link></li>
          <li><Link href="/blogs" className={cls('/blogs')}>Blogs</Link></li>
          <li><Link href="/contact" className={cls('/contact')}>Contact</Link></li>
        </ul>
        <Link className="btn btn--primary nav-cta" href="/contact">Get a Free Quote</Link>
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
