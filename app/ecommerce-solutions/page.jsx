import Link from 'next/link'

export const metadata = {
  title: "E-commerce Solutions | Mostafij Emon",
  description: "Launch and manage a seamless online store with secure payments and a clean, user-friendly design built to sell.",
  keywords: "woocommerce store development, affordable ecommerce website design, online store setup",
}

export default function EcommerceSolutions() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="crumb">
            <Link href="/services">
              Services
            </Link>
             / E-commerce Solutions
          </p>
          <h1>
            E-commerce Solutions
          </h1>
          <p className="lead">
            Launch and manage a seamless online store with secure payments and a clean, user-friendly design built to sell.
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
              An online store that's easy to run and easy to buy from
            </h2>
            <p className="lead" style={{marginBottom: "1.3rem"}}>
              Selling online shouldn't be complicated. I build secure, fast WooCommerce stores with smooth checkout, clear product pages, and an admin you'll actually enjoy managing — all optimized so shoppers find you and complete the purchase.
            </p>
            <ul className="checklist">
              <li>
                WooCommerce store setup and design
              </li>
              <li>
                Secure payment gateway integration
              </li>
              <li>
                Mobile-friendly product and checkout pages
              </li>
              <li>
                SEO-optimized product structure
              </li>
              <li>
                Easy inventory and order management
              </li>
            </ul>
            <Link href="/contact" className="btn btn--primary" style={{marginTop: "1rem"}}>
              Get Started
            </Link>
          </div>
          <div className="media-frame reveal" data-spec="// preview">
            <img loading="lazy" src="https://mostafijemon.com/wp-content/uploads/2025/01/E-commerce-Solutions.png" alt="E-commerce Solutions service preview" />
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
                Store Setup
              </h3>
              <p>
                A complete WooCommerce store configured and ready to sell.
              </p>
            </article>
            <article className="card reveal">
              <span className="idx">
                02
              </span>
              <h3>
                Secure Checkout
              </h3>
              <p>
                Trusted payment gateways and SSL for safe transactions.
              </p>
            </article>
            <article className="card reveal">
              <span className="idx">
                03
              </span>
              <h3>
                Product Pages
              </h3>
              <p>
                Clear, persuasive pages that turn browsers into buyers.
              </p>
            </article>
            <article className="card reveal">
              <span className="idx">
                04
              </span>
              <h3>
                Mobile Shopping
              </h3>
              <p>
                A smooth experience on every device, where most shoppers are.
              </p>
            </article>
            <article className="card reveal">
              <span className="idx">
                05
              </span>
              <h3>
                SEO for Products
              </h3>
              <p>
                Optimized titles, descriptions, and structure to get found.
              </p>
            </article>
            <article className="card reveal">
              <span className="idx">
                06
              </span>
              <h3>
                Easy Management
              </h3>
              <p>
                Simple dashboards to manage orders, stock, and shipping.
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
                    Plan
                  </h3>
                  <p>
                    We map your products, categories, shipping, and payment needs.
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
                    I set up and design your store with a focus on conversions.
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
                    Full checkout and payment testing before launch.
                  </p>
                </div>
              </div>
              <div className="step reveal">
                <span className="n"></span>
                <div>
                  <h3>
                    Launch & support
                  </h3>
                  <p>
                    Go live, plus optional maintenance to keep it running smoothly.
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
                Which platform do you use?
              </h3>
              <p>
                I build on WooCommerce (WordPress), which is flexible, SEO-friendly, and gives you full ownership of your store.
              </p>
            </article>
            <article className="card reveal">
              <h3 style={{fontSize: "1.05rem"}}>
                Can customers pay securely?
              </h3>
              <p>
                Yes — I integrate trusted payment gateways with SSL so every transaction is protected.
              </p>
            </article>
            <article className="card reveal">
              <h3 style={{fontSize: "1.05rem"}}>
                Can I manage products myself?
              </h3>
              <p>
                Definitely. The dashboard is straightforward, and I'll walk you through adding products, orders, and stock.
              </p>
            </article>
            <article className="card reveal">
              <h3 style={{fontSize: "1.05rem"}}>
                Will my store work on mobile?
              </h3>
              <p>
                Yes. Most online shopping happens on phones, so the store and checkout are fully mobile-optimized.
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
