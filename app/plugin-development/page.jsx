import Link from 'next/link'

export const metadata = {
  title: "Custom WordPress Plugin Development | Mostafij Emon",
  description: "Custom WordPress and WooCommerce plugin development. Lightweight, secure, update-safe plugins built around your exact business workflow by Mostafij Emon.",
  keywords: "wordpress plugin development, custom plugin developer, woocommerce plugin development, custom wordpress features",
}

export default function PluginDevelopment() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="crumb">
            <Link href="/services">
              Services
            </Link>
             / Custom WordPress Plugin Development
          </p>
          <h1>
            Custom WordPress Plugin Development
          </h1>
          <p className="lead">
            Custom WordPress and WooCommerce plugins built to add exactly the features your business needs — clean, secure, and update-safe.
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
              When an off-the-shelf plugin isn't enough
            </h2>
            <p className="lead" style={{marginBottom: "1.3rem"}}>
              Sometimes the feature you need doesn't exist, or the closest plugin adds bloat and security risk. I build lightweight custom plugins that do one job well — extending WordPress and WooCommerce with the exact functionality your workflow requires, written to WordPress coding standards so updates never break your site.
            </p>
            <ul className="checklist">
              <li>
                Custom WordPress & WooCommerce plugins
              </li>
              <li>
                Built to official WordPress coding standards
              </li>
              <li>
                Lightweight, secure, and update-safe
              </li>
              <li>
                Third-party API and payment integrations
              </li>
              <li>
                Bug fixes and upgrades for existing plugins
              </li>
            </ul>
            <Link href="/contact" className="btn btn--primary" style={{marginTop: "1rem"}}>
              Get Started
            </Link>
          </div>
          <div className="media-frame reveal" data-spec="// preview">
            <img loading="lazy" src="https://mostafijemon.com/wp-content/uploads/2025/01/custom-Website-Design.png" alt="Custom WordPress Plugin Development service preview" />
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
                Custom Features
              </h3>
              <p>
                Booking systems, calculators, directories — built to fit your business.
              </p>
            </article>
            <article className="card reveal">
              <span className="idx">
                02
              </span>
              <h3>
                WooCommerce Extensions
              </h3>
              <p>
                Custom checkout, shipping, pricing, and product logic for your store.
              </p>
            </article>
            <article className="card reveal">
              <span className="idx">
                03
              </span>
              <h3>
                API Integrations
              </h3>
              <p>
                Connect your site to CRMs, payment gateways, and external services.
              </p>
            </article>
            <article className="card reveal">
              <span className="idx">
                04
              </span>
              <h3>
                Performance-First
              </h3>
              <p>
                Clean, efficient code that won't slow your site down.
              </p>
            </article>
            <article className="card reveal">
              <span className="idx">
                05
              </span>
              <h3>
                Secure & Standards-Based
              </h3>
              <p>
                Written to WordPress standards so it stays safe and update-proof.
              </p>
            </article>
            <article className="card reveal">
              <span className="idx">
                06
              </span>
              <h3>
                Plugin Fixes
              </h3>
              <p>
                Debugging and improving plugins you already rely on.
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
                    Scope
                  </h3>
                  <p>
                    We define exactly what the plugin should do and how it fits your site.
                  </p>
                </div>
              </div>
              <div className="step reveal">
                <span className="n"></span>
                <div>
                  <h3>
                    Build
                  </h3>
                  <p>
                    I develop the plugin to WordPress standards in a safe staging setup.
                  </p>
                </div>
              </div>
              <div className="step reveal">
                <span className="n"></span>
                <div>
                  <h3>
                    Test
                  </h3>
                  <p>
                    Thorough testing for compatibility, security, and performance.
                  </p>
                </div>
              </div>
              <div className="step reveal">
                <span className="n"></span>
                <div>
                  <h3>
                    Deploy & support
                  </h3>
                  <p>
                    Installed on your live site, documented, with ongoing support available.
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
                Why build a custom plugin instead of using a free one?
              </h3>
              <p>
                Off-the-shelf plugins often add features you don't need (and code bloat or security risk). A custom plugin does exactly one job, stays lightweight, and is built around your workflow.
              </p>
            </article>
            <article className="card reveal">
              <h3 style={{fontSize: "1.05rem"}}>
                Will it break when WordPress updates?
              </h3>
              <p>
                No — I follow official WordPress coding standards and test against updates, so your custom features stay stable over time.
              </p>
            </article>
            <article className="card reveal">
              <h3 style={{fontSize: "1.05rem"}}>
                Can you fix or extend an existing plugin?
              </h3>
              <p>
                Yes. I can debug, optimize, or add features to plugins you already use, where licensing allows.
              </p>
            </article>
            <article className="card reveal">
              <h3 style={{fontSize: "1.05rem"}}>
                Do you build WooCommerce plugins?
              </h3>
              <p>
                Absolutely — custom checkout flows, pricing rules, shipping logic, and integrations are some of the most common requests.
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
