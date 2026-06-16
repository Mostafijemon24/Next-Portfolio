import Link from 'next/link'

export const metadata = {
  title: "My Story \u2014 Freelance WordPress Developer & SEO Expert | Mostafij Emon",
  description: "Meet Mostafij Emon, a freelance WordPress developer and SEO expert with 6+ years' experience helping small businesses build fast, rankable websites.",
  keywords: "freelance wordpress developer, seo expert, professional web developer, about mostafij emon, hire web developer",
}

export default function MyStory() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="crumb">
            <Link href="/">
              Home
            </Link>
             / My Story
          </p>
          <h1>
            A passionate WordPress developer & SEO specialist
          </h1>
          <p className="lead">
            Six years turning small-business websites into their best salesperson — fast, found, and built to convert.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div className="prose reveal" style={{margin: "0"}}>
            <span className="eyebrow">
              My story
            </span>
            <h2 className="h-lg" style={{marginBottom: "1rem"}}>
              From first line of code to 3600+ projects
            </h2>
            <p>
              I'm 
              <b>
                Mostafij Emon
              </b>
              , a WordPress Web Developer and SEO Specialist with over six years of hands-on experience. I started my professional journey in 2020, earned my bachelor's degree in 2021, and have spent every year since sharpening two skills that matter most for small businesses: building websites people enjoy using, and making sure search engines can find them.
            </p>
            <p>
              Along the way I've worked as a Web Developer with agencies serving clients in the United States, and as a Lead Web Developer on remote teams. That mix of agency discipline and freelance flexibility means you get professional standards without the agency price tag.
            </p>
            <p>
              My philosophy is simple: a website should pay for itself. Every project is built mobile-first, optimized for speed, and structured for SEO from day one — so you rank better and attract more customers without expensive add-ons down the road.
            </p>
          </div>
          <div className="media-frame reveal" data-spec="// about">
            <img loading="lazy" src="https://mostafijemon.com/wp-content/uploads/2025/05/mostafij-emon-website-designer-near-me.png" alt="Mostafij Emon, freelance WordPress developer and SEO expert" />
          </div>
        </div>
      </section>
      <section className="section bg-alt">
        <div className="container">
          <div className="center" style={{marginBottom: "2.4rem", maxWidth: "600px"}}>
            <span className="eyebrow">
              My expertise & skills
            </span>
            <h2 className="h-lg">
              What I bring to every project
            </h2>
          </div>
          <div className="grid grid-3">
            <article className="card reveal">
              <span className="idx">
                01
              </span>
              <h3>
                Web Design & Development
              </h3>
              <p>
                WordPress, Divi Builder, Elementor, and clean custom HTML/CSS/JavaScript.
              </p>
            </article>
            <article className="card reveal">
              <span className="idx">
                02
              </span>
              <h3>
                SEO
              </h3>
              <p>
                On-page, off-page, and technical SEO with keyword-focused content structure.
              </p>
            </article>
            <article className="card reveal">
              <span className="idx">
                03
              </span>
              <h3>
                UX / UI Design
              </h3>
              <p>
                Interfaces that feel effortless and guide visitors toward taking action.
              </p>
            </article>
            <article className="card reveal">
              <span className="idx">
                04
              </span>
              <h3>
                Performance & Bug Fixing
              </h3>
              <p>
                Speed optimization and reliable fixes that keep sites fast and stable.
              </p>
            </article>
            <article className="card reveal">
              <span className="idx">
                05
              </span>
              <h3>
                Logo & Graphic Design
              </h3>
              <p>
                Distinctive brand visuals and logos that make a strong first impression.
              </p>
            </article>
            <article className="card reveal">
              <span className="idx">
                06
              </span>
              <h3>
                Local & GMB
              </h3>
              <p>
                Google Business Profile setup so local customers find you first.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="center" style={{marginBottom: "2.4rem", maxWidth: "560px"}}>
            <span className="eyebrow">
              How I work
            </span>
            <h2 className="h-lg">
              Client satisfaction is my priority
            </h2>
          </div>
          <div className="split">
            <div className="reveal">
              <div className="steps">
                <div className="step">
                  <span className="n"></span>
                  <div>
                    <h3>
                      Listen
                    </h3>
                    <p>
                      I learn your business, goals, and the customers you want to reach.
                    </p>
                  </div>
                </div>
                <div className="step">
                  <span className="n"></span>
                  <div>
                    <h3>
                      Plan
                    </h3>
                    <p>
                      Keyword research and a clear sitemap so every page has a purpose.
                    </p>
                  </div>
                </div>
                <div className="step">
                  <span className="n"></span>
                  <div>
                    <h3>
                      Build
                    </h3>
                    <p>
                      A fast, responsive, SEO-ready website crafted to your brand.
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
                      Ongoing SEO, maintenance, and support to keep results climbing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal">
              <div className="card" style={{padding: "2rem"}}>
                <span className="eyebrow">
                  By the numbers
                </span>
                <div className="stats" style={{gridTemplateColumns: "repeat(2,1fr)", gap: "1rem", marginTop: "1rem"}}>
                  <div className="stat">
                    <div className="num">
                      3600+
                    </div>
                    <div className="lbl">
                      Clients
                    </div>
                  </div>
                  <div className="stat">
                    <div className="num">
                      6+
                    </div>
                    <div className="lbl">
                      Years
                    </div>
                  </div>
                  <div className="stat">
                    <div className="num">
                      90+
                    </div>
                    <div className="lbl">
                      PageSpeed
                    </div>
                  </div>
                  <div className="stat">
                    <div className="num">
                      24/7
                    </div>
                    <div className="lbl">
                      Support
                    </div>
                  </div>
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
              Let's tell your story online — and get it found.
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
