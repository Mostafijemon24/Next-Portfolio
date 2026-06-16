import Link from 'next/link'

export const metadata = {
  title: "Website Maintenance & Support | Mostafij Emon",
  description: "Keep your website secure, updated, and running fast with monthly maintenance and monitoring \u2014 so you can focus on your business.",
  keywords: "monthly website maintenance service, wordpress maintenance and support, website security updates",
}

export default function WebsiteMaintenance() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="crumb">
            <Link href="/services">
              Services
            </Link>
             / Website Maintenance & Support
          </p>
          <h1>
            Website Maintenance & Support
          </h1>
          <p className="lead">
            Keep your website secure, updated, and running fast with monthly maintenance and monitoring — so you can focus on your business.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div className="reveal">
            <span className="eyebrow">
              What you get
            </span>
            <h2 className="h-lg">
              Your website, looked after — month after month
            </h2>
            <p className="lead" style={{marginBottom: "1.3rem"}}>
              A website isn't 'set and forget'. Plugins update, threats evolve, and small issues can quietly cost you customers. My maintenance plans keep everything current, backed up, secure, and fast, with expert help whenever you need it.
            </p>
            <ul className="checklist">
              <li>
                Regular WordPress, theme, and plugin updates
              </li>
              <li>
                Scheduled backups you can restore anytime
              </li>
              <li>
                Security monitoring and malware checks
              </li>
              <li>
                Speed and uptime monitoring
              </li>
              <li>
                Priority support for fixes and small changes
              </li>
            </ul>
            <Link href="/contact" className="btn btn--primary" style={{marginTop: "1rem"}}>
              Get Started
            </Link>
          </div>
          <div className="media-frame reveal" data-spec="// preview">
            <img loading="lazy" src="https://mostafijemon.com/wp-content/uploads/2025/01/Website-Maintenance.png" alt="Website Maintenance & Support service preview" />
          </div>
        </div>
      </section>
      <section className="section bg-alt">
        <div className="container">
          <div className="center" style={{marginBottom: "2.5rem", maxWidth: "640px"}}>
            <span className="eyebrow">
              Included features
            </span>
            <h2 className="h-lg">
              Everything built in, nothing bolted on later
            </h2>
          </div>
          <div className="grid grid-3">
            <article className="card reveal">
              <span className="idx">
                01
              </span>
              <h3>
                Updates
              </h3>
              <p>
                WordPress core, themes, and plugins kept current and compatible.
              </p>
            </article>
            <article className="card reveal">
              <span className="idx">
                02
              </span>
              <h3>
                Backups
              </h3>
              <p>
                Automatic, regular backups stored safely off-site.
              </p>
            </article>
            <article className="card reveal">
              <span className="idx">
                03
              </span>
              <h3>
                Security
              </h3>
              <p>
                Monitoring, hardening, and malware scanning to keep you safe.
              </p>
            </article>
            <article className="card reveal">
              <span className="idx">
                04
              </span>
              <h3>
                Performance
              </h3>
              <p>
                Ongoing speed checks so your site stays fast.
              </p>
            </article>
            <article className="card reveal">
              <span className="idx">
                05
              </span>
              <h3>
                Uptime Monitoring
              </h3>
              <p>
                Alerts and quick action if your site ever goes down.
              </p>
            </article>
            <article className="card reveal">
              <span className="idx">
                06
              </span>
              <h3>
                Support
              </h3>
              <p>
                A reliable point of contact for fixes and tweaks.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split reverse">
          <div className="reveal">
            <div className="steps">
              <div className="step reveal">
                <span className="n"></span>
                <div>
                  <h3>
                    Assess
                  </h3>
                  <p>
                    I review your current setup, plugins, and risk areas.
                  </p>
                </div>
              </div>
              <div className="step reveal">
                <span className="n"></span>
                <div>
                  <h3>
                    Secure & back up
                  </h3>
                  <p>
                    Set up backups, security, and monitoring.
                  </p>
                </div>
              </div>
              <div className="step reveal">
                <span className="n"></span>
                <div>
                  <h3>
                    Maintain
                  </h3>
                  <p>
                    Scheduled monthly updates and health checks.
                  </p>
                </div>
              </div>
              <div className="step reveal">
                <span className="n"></span>
                <div>
                  <h3>
                    Support
                  </h3>
                  <p>
                    You message, I handle it — fixes and small changes covered.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="reveal">
            <span className="eyebrow">
              How it works
            </span>
            <h2 className="h-lg">
              A simple, transparent process
            </h2>
            <p className="lead">
              No jargon, no surprises. You always know what stage we're at and what happens next.
            </p>
          </div>
        </div>
      </section>
      <section className="section bg-alt">
        <div className="container">
          <div className="center" style={{marginBottom: "2.5rem", maxWidth: "620px"}}>
            <span className="eyebrow">
              FAQ
            </span>
            <h2 className="h-lg">
              Common questions
            </h2>
          </div>
          <div className="grid grid-2">
            <article className="card reveal">
              <h3 style={{fontSize: "1.05rem"}}>
                Why do I need website maintenance?
              </h3>
              <p>
                Outdated plugins and software are the most common cause of hacks and broken pages. Maintenance prevents problems before they cost you customers.
              </p>
            </article>
            <article className="card reveal">
              <h3 style={{fontSize: "1.05rem"}}>
                What's included each month?
              </h3>
              <p>
                Updates, backups, security checks, performance monitoring, and a set amount of support time for small changes — details depend on your plan.
              </p>
            </article>
            <article className="card reveal">
              <h3 style={{fontSize: "1.05rem"}}>
                Do you maintain sites you didn't build?
              </h3>
              <p>
                Yes, in most cases. I'll do a quick review first to make sure everything's in good shape.
              </p>
            </article>
            <article className="card reveal">
              <h3 style={{fontSize: "1.05rem"}}>
                What if my site goes down?
              </h3>
              <p>
                Uptime monitoring alerts me, and priority support means I act quickly to get you back online.
              </p>
            </article>
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
