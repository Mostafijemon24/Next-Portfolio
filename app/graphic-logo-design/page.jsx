import Link from 'next/link'

export const metadata = {
  title: "Graphic & Logo Design | Mostafij Emon",
  description: "Unique, professional logos and marketing visuals that represent your business and make a memorable first impression.",
  keywords: "affordable logo design service, business logo and graphic design, brand identity design",
}

export default function GraphicLogoDesign() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="crumb">
            <Link href="/services">
              Services
            </Link>
             / Graphic & Logo Design
          </p>
          <h1>
            Graphic & Logo Design
          </h1>
          <p className="lead">
            Unique, professional logos and marketing visuals that represent your business and make a memorable first impression.
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
              A brand identity people recognize and trust
            </h2>
            <p className="lead" style={{marginBottom: "1.3rem"}}>
              Your logo is the face of your business. I design original, versatile logos and matching graphics that capture your brand's personality and work everywhere — from your website and social media to print and signage.
            </p>
            <ul className="checklist">
              <li>
                Original, custom logo concepts
              </li>
              <li>
                Brand colors and typography guidance
              </li>
              <li>
                Versatile files for web and print
              </li>
              <li>
                Social media and marketing graphics
              </li>
              <li>
                Designs that scale cleanly at any size
              </li>
            </ul>
            <Link href="/contact" className="btn btn--primary" style={{marginTop: "1rem"}}>
              Get Started
            </Link>
          </div>
          <div className="media-frame reveal" data-spec="// preview">
            <img loading="lazy" src="https://mostafijemon.com/wp-content/uploads/2025/01/Graphic-Design-Logo-Creation.png" alt="Graphic & Logo Design service preview" />
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
                Logo Design
              </h3>
              <p>
                Distinctive, original marks built around your brand story.
              </p>
            </article>
            <article className="card reveal">
              <span className="idx">
                02
              </span>
              <h3>
                Brand Kit
              </h3>
              <p>
                Colors, fonts, and usage guidance for a consistent look.
              </p>
            </article>
            <article className="card reveal">
              <span className="idx">
                03
              </span>
              <h3>
                Marketing Graphics
              </h3>
              <p>
                Flyers, banners, and social visuals that match your brand.
              </p>
            </article>
            <article className="card reveal">
              <span className="idx">
                04
              </span>
              <h3>
                Multiple Formats
              </h3>
              <p>
                Web and print-ready files in every size you'll need.
              </p>
            </article>
            <article className="card reveal">
              <span className="idx">
                05
              </span>
              <h3>
                Revisions
              </h3>
              <p>
                Collaborative rounds until the design feels right.
              </p>
            </article>
            <article className="card reveal">
              <span className="idx">
                06
              </span>
              <h3>
                Scalable Design
              </h3>
              <p>
                Vector artwork that stays crisp from favicon to billboard.
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
                    Brief
                  </h3>
                  <p>
                    We explore your business, values, and the feeling you want to convey.
                  </p>
                </div>
              </div>
              <div className="step reveal">
                <span className="n"></span>
                <div>
                  <h3>
                    Concepts
                  </h3>
                  <p>
                    I present original logo directions to choose from.
                  </p>
                </div>
              </div>
              <div className="step reveal">
                <span className="n"></span>
                <div>
                  <h3>
                    Refine
                  </h3>
                  <p>
                    We polish your favorite with focused revisions.
                  </p>
                </div>
              </div>
              <div className="step reveal">
                <span className="n"></span>
                <div>
                  <h3>
                    Deliver
                  </h3>
                  <p>
                    Final files in all the formats you need, ready to use.
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
                How many logo concepts do I get?
              </h3>
              <p>
                You'll receive multiple distinct directions to choose from, then we refine your favorite together.
              </p>
            </article>
            <article className="card reveal">
              <h3 style={{fontSize: "1.05rem"}}>
                What files will I receive?
              </h3>
              <p>
                Web and print-ready formats, including scalable vector files so your logo looks sharp at any size.
              </p>
            </article>
            <article className="card reveal">
              <h3 style={{fontSize: "1.05rem"}}>
                Do you design more than logos?
              </h3>
              <p>
                Yes — business cards, social graphics, banners, and other marketing visuals that match your brand.
              </p>
            </article>
            <article className="card reveal">
              <h3 style={{fontSize: "1.05rem"}}>
                Will my logo be original?
              </h3>
              <p>
                Always. Every design is created from scratch for your business — never a template or stock mark.
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
