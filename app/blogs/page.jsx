import Link from 'next/link'

export const metadata = {
  title: "Blog \u2014 Web Design, SEO & Digital Marketing Tips | Mostafij Emon",
  description: "Actionable web design, SEO, and digital marketing tips to help small businesses grow online. Practical guides from Mostafij Emon.",
  keywords: "web design blog, seo tips, digital marketing tips, small business website tips, wordpress tips",
}

export default function Blogs() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="crumb">
            <Link href="/">
              Home
            </Link>
             / Blogs
          </p>
          <h1>
            Expert insights on web design, SEO & digital marketing
          </h1>
          <p className="lead">
            Actionable tips and strategies to help your business grow online — mobile-friendly design, SEO-friendly structure, and marketing that works.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid" style={{gap: "1.4rem"}}>
            <Link href="/contact" className="post reveal">
              <div className="thumb">
                SEO
              </div>
              <div className="body">
                <span className="cat">
                  SEO
                </span>
                <h3>
                  How to Rank a Small Business Website on the First Page of Google
                </h3>
                <p>
                  A practical, beginner-friendly guide to keyword research, on-page SEO, and the local signals that move you up the rankings.
                </p>
              </div>
            </Link>
            <Link href="/contact" className="post reveal">
              <div className="thumb">
                WEB
              </div>
              <div className="body">
                <span className="cat">
                  Web Design
                </span>
                <h3>
                  7 Signs Your Website Needs a Redesign in 2026
                </h3>
                <p>
                  Slow load times, poor mobile experience, high bounce rates — here's how to know it's time for a refresh, and what to fix first.
                </p>
              </div>
            </Link>
            <Link href="/contact" className="post reveal">
              <div className="thumb">
                LOC
              </div>
              <div className="body">
                <span className="cat">
                  Local SEO
                </span>
                <h3>
                  Google Business Profile: The Free Tool Most Local Businesses Underuse
                </h3>
                <p>
                  Step-by-step tips to optimize your GMB listing and start appearing in the local map pack for nearby searches.
                </p>
              </div>
            </Link>
            <Link href="/contact" className="post reveal">
              <div className="thumb">
                WOR
              </div>
              <div className="body">
                <span className="cat">
                  WordPress
                </span>
                <h3>
                  Divi vs Elementor: Which Page Builder Is Right for You?
                </h3>
                <p>
                  An honest comparison of the two most popular WordPress builders, with recommendations based on your goals and skill level.
                </p>
              </div>
            </Link>
            <Link href="/contact" className="post reveal">
              <div className="thumb">
                PER
              </div>
              <div className="body">
                <span className="cat">
                  Performance
                </span>
                <h3>
                  Why Website Speed Matters for SEO and Sales (and How to Fix It)
                </h3>
                <p>
                  How page speed affects rankings and conversions, plus the highest-impact tweaks to make your WordPress site faster.
                </p>
              </div>
            </Link>
            <Link href="/contact" className="post reveal">
              <div className="thumb">
                DIG
              </div>
              <div className="body">
                <span className="cat">
                  Digital Marketing
                </span>
                <h3>
                  A Simple Marketing Funnel Every Small Business Should Have
                </h3>
                <p>
                  From first click to repeat customer — a clear, no-fluff framework you can set up without a big budget.
                </p>
              </div>
            </Link>
          </div>
          <div className="center" style={{marginTop: "2.4rem"}}>
            <p className="lead center" style={{marginBottom: "1rem"}}>
              New articles are published regularly. Have a topic you'd like covered?
            </p>
            <Link href="/contact" className="btn btn--ghost">
              Suggest a topic
            </Link>
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
              Prefer done-for-you over do-it-yourself?
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
