import Link from 'next/link'

export const metadata = {
  title: "Web Design, SEO & Digital Marketing Services | Mostafij Emon",
  description: "Affordable web design, SEO, GMB, e-commerce, and digital marketing services for small businesses \u2014 everything you need to grow online, under one roof.",
  keywords: "web design and seo services, affordable digital marketing services, small business web services, wordpress services",
}

export default function Services() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="crumb">
            <Link href="/">
              Home
            </Link>
             / Services
          </p>
          <h1>
            Web design & SEO services for small business growth
          </h1>
          <p className="lead">
            Affordable, results-driven digital services — everything you need to launch, rank, and grow, all under one roof.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            <Link href="/website-design" className="card reveal">
              <div className="ico">
                ◇
              </div>
              <h3>
                Website Design
              </h3>
              <p>
                Custom, mobile-friendly WordPress websites that load fast and convert visitors into customers.
              </p>
              <span className="more">
                Learn more
              </span>
            </Link>
            <Link href="/seo" className="card reveal">
              <div className="ico">
                ↑
              </div>
              <h3>
                Search Engine Optimization
              </h3>
              <p>
                On-page, off-page and technical SEO to grow rankings and organic traffic.
              </p>
              <span className="more">
                Learn more
              </span>
            </Link>
            <Link href="/gmb-setup" className="card reveal">
              <div className="ico">
                ◉
              </div>
              <h3>
                GMB Setup & Optimization
              </h3>
              <p>
                Google Business Profile optimization for local visibility and the map pack.
              </p>
              <span className="more">
                Learn more
              </span>
            </Link>
            <Link href="/social-marketing" className="card reveal">
              <div className="ico">
                ♥
              </div>
              <h3>
                Social Media Marketing
              </h3>
              <p>
                Creative campaigns that build awareness and engage your audience.
              </p>
              <span className="more">
                Learn more
              </span>
            </Link>
            <Link href="/website-maintenance" className="card reveal">
              <div className="ico">
                ⟳
              </div>
              <h3>
                Website Maintenance
              </h3>
              <p>
                Monthly updates, backups, security and monitoring to keep your site healthy.
              </p>
              <span className="more">
                Learn more
              </span>
            </Link>
            <Link href="/digital-marketing" className="card reveal">
              <div className="ico">
                ◎
              </div>
              <h3>
                Digital Marketing
              </h3>
              <p>
                Email campaigns, PPC ads and full-funnel strategies that drive revenue.
              </p>
              <span className="more">
                Learn more
              </span>
            </Link>
            <Link href="/graphic-logo-design" className="card reveal">
              <div className="ico">
                ✎
              </div>
              <h3>
                Graphic & Logo Design
              </h3>
              <p>
                Memorable logos and marketing visuals that represent your brand.
              </p>
              <span className="more">
                Learn more
              </span>
            </Link>
            <Link href="/ecommerce-solutions" className="card reveal">
              <div className="ico">
                🛒
              </div>
              <h3>
                E-commerce Solutions
              </h3>
              <p>
                Secure, user-friendly WooCommerce stores ready to sell from day one.
              </p>
              <span className="more">
                Learn more
              </span>
            </Link>
            <Link href="/contact" className="card reveal">
              <div className="ico">
                ✦
              </div>
              <h3>
                Not sure what you need?
              </h3>
              <p>
                Tell me your goals and budget — I'll recommend the right starting point, free.
              </p>
              <span className="more">
                Ask me
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="section bg-alt">
        <div className="container split">
          <div className="reveal">
            <span className="eyebrow">
              Everything under one roof
            </span>
            <h2 className="h-lg">
              One partner, from launch to long-term growth
            </h2>
            <p className="lead" style={{marginBottom: "1.3rem"}}>
              You don't need to juggle five different freelancers. I handle design, SEO, branding, and maintenance together — which keeps your message consistent and saves you time and money.
            </p>
            <ul className="checklist">
              <li>
                Clear, fixed quotes before any work begins
              </li>
              <li>
                SEO-friendly structure on every page we build
              </li>
              <li>
                Fast turnaround — most sites in 7–14 days
              </li>
              <li>
                Support and maintenance plans to match your budget
              </li>
            </ul>
            <Link href="/contact" className="btn btn--primary" style={{marginTop: "1.2rem"}}>
              Get a Free Quote
            </Link>
          </div>
          <div className="reveal">
            <div className="steps">
              <div className="step">
                <span className="n"></span>
                <div>
                  <h3>
                    Discovery
                  </h3>
                  <p>
                    We define goals, audience, and target keywords.
                  </p>
                </div>
              </div>
              <div className="step">
                <span className="n"></span>
                <div>
                  <h3>
                    Design & build
                  </h3>
                  <p>
                    Responsive, on-brand, SEO-ready development.
                  </p>
                </div>
              </div>
              <div className="step">
                <span className="n"></span>
                <div>
                  <h3>
                    Launch
                  </h3>
                  <p>
                    Testing, speed checks, and a smooth go-live.
                  </p>
                </div>
              </div>
              <div className="step">
                <span className="n"></span>
                <div>
                  <h3>
                    Grow
                  </h3>
                  <p>
                    SEO, content, and maintenance to compound results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="cta-band reveal">
            <span className="eyebrow">
              Let's work together
            </span>
            <h2 className="h-lg">
              Ready to grow your business online?
            </h2>
            <p className="lead">
              Let's build a fast, SEO-friendly website that turns visitors into customers. Get a free, no-pressure quote today.
            </p>
            <div style={{display: "flex", gap: ".8rem", justifyContent: "center", flexWrap: "wrap"}}>
              <Link href="/contact" className="btn btn--primary btn--lg">
                Get a Free Quote
              </Link>
              <Link href="/portfolio" className="btn btn--ghost btn--lg">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
