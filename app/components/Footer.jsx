import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link className="brand" href="/" style={{ color: '#fff' }}>
              <span className="mark">ME</span>
              <span style={{ color: '#fff' }}>Mostafij Emon<small>Web Developer · SEO</small></span>
            </Link>
            <p>Affordable WordPress website design, plugin development, SEO, and digital marketing for small businesses that want to be found, trusted, and chosen online.</p>
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
              <li><Link href="/my-story">My Story</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/blogs">Blogs</Link></li>
              <li><Link href="/services">All Services</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Get in touch</h4>
            <ul className="foot-links">
              <li><a href="mailto:hello@mostafijemon.com">hello@mostafijemon.com</a></li>
              <li><Link href="/contact">Book a free consultation</Link></li>
              <li><a href="https://mostafijemon.com" target="_blank" rel="noopener noreferrer">mostafijemon.com</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} Mostafij Emon. All rights reserved.</span>
          <span>WordPress · SEO · Affordable web design near you</span>
        </div>
      </div>
    </footer>
  )
}
