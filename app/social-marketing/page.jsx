import Link from 'next/link'

export const metadata = {
  title: "Social Media Marketing | Mostafij Emon",
  description: "Creative campaigns and consistent posting that build brand awareness, grow your audience, and turn followers into customers.",
  keywords: "social media marketing for small business, affordable social media management, social media campaigns",
}

export default function SocialMarketing() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="crumb">
            <Link href="/services">
              Services
            </Link>
             / Social Media Marketing
          </p>
          <h1>
            Social Media Marketing
          </h1>
          <p className="lead">
            Creative campaigns and consistent posting that build brand awareness, grow your audience, and turn followers into customers.
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
              Build a brand people remember and follow
            </h2>
            <p className="lead" style={{marginBottom: "1.3rem"}}>
              Social media is where your audience already spends time. I plan and run creative campaigns across the platforms that matter to your business — growing reach, engagement, and ultimately leads, without wasting budget on the wrong channels.
            </p>
            <ul className="checklist">
              <li>
                Platform strategy focused on your real audience
              </li>
              <li>
                Branded content and creative design
              </li>
              <li>
                Consistent posting calendar
              </li>
              <li>
                Community engagement and growth tactics
              </li>
              <li>
                Performance tracking and optimization
              </li>
            </ul>
            <Link href="/contact" className="btn btn--primary" style={{marginTop: "1rem"}}>
              Get Started
            </Link>
          </div>
          <div className="media-frame reveal" data-spec="// preview">
            <img loading="lazy" src="https://mostafijemon.com/wp-content/uploads/2025/01/Social-Media-Marketing.png" alt="Social Media Marketing service preview" />
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
                Strategy
              </h3>
              <p>
                A clear plan for which platforms, content, and frequency fit your goals.
              </p>
            </article>
            <article className="card reveal">
              <span className="idx">
                02
              </span>
              <h3>
                Content Creation
              </h3>
              <p>
                Eye-catching, on-brand posts and graphics that get noticed.
              </p>
            </article>
            <article className="card reveal">
              <span className="idx">
                03
              </span>
              <h3>
                Scheduling
              </h3>
              <p>
                A steady calendar so your brand stays visible and consistent.
              </p>
            </article>
            <article className="card reveal">
              <span className="idx">
                04
              </span>
              <h3>
                Engagement
              </h3>
              <p>
                Replying, community-building, and growth that feels authentic.
              </p>
            </article>
            <article className="card reveal">
              <span className="idx">
                05
              </span>
              <h3>
                Paid Boosts
              </h3>
              <p>
                Optional targeted ads to amplify your best content.
              </p>
            </article>
            <article className="card reveal">
              <span className="idx">
                06
              </span>
              <h3>
                Analytics
              </h3>
              <p>
                Reporting on reach, engagement, and what to do next.
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
                    Discover
                  </h3>
                  <p>
                    We define your audience, voice, and the platforms worth your time.
                  </p>
                </div>
              </div>
              <div className="step reveal">
                <span className="n"></span>
                <div>
                  <h3>
                    Create
                  </h3>
                  <p>
                    I produce a batch of branded, scroll-stopping content.
                  </p>
                </div>
              </div>
              <div className="step reveal">
                <span className="n"></span>
                <div>
                  <h3>
                    Publish
                  </h3>
                  <p>
                    Consistent posting and active community engagement.
                  </p>
                </div>
              </div>
              <div className="step reveal">
                <span className="n"></span>
                <div>
                  <h3>
                    Review
                  </h3>
                  <p>
                    Analytics-driven tweaks to grow reach and conversions.
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
                Which platforms should my business be on?
              </h3>
              <p>
                It depends on your audience. I focus your effort on the one or two platforms where your customers actually spend time, rather than spreading thin.
              </p>
            </article>
            <article className="card reveal">
              <h3 style={{fontSize: "1.05rem"}}>
                Do you create the content too?
              </h3>
              <p>
                Yes — I can design branded graphics and write captions, or work with content you provide.
              </p>
            </article>
            <article className="card reveal">
              <h3 style={{fontSize: "1.05rem"}}>
                How often will you post?
              </h3>
              <p>
                We agree a realistic, consistent cadence up front — consistency matters more than volume.
              </p>
            </article>
            <article className="card reveal">
              <h3 style={{fontSize: "1.05rem"}}>
                Can social media really bring sales?
              </h3>
              <p>
                Done well, it builds awareness and trust that lead to enquiries and sales over time, especially paired with a strong website.
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
