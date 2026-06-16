import Link from 'next/link'

export const metadata = {
  title: "Contact \u2014 Hire an Affordable Website Designer | Mostafij Emon",
  description: "Get in touch with Mostafij Emon for affordable website design, SEO, and digital marketing. Request a free, no-pressure quote today.",
  keywords: "hire affordable website designer, contact web developer near me, free website quote, web design enquiry",
}

export default function Contact() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="crumb">
            <Link href="/">
              Home
            </Link>
             / Contact
          </p>
          <h1>
            Let's build something that grows your business
          </h1>
          <p className="lead">
            Tell me about your project and goals. I'll reply with honest advice and a clear, no-pressure quote.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container contact-grid">
          <div className="reveal">
            <span className="eyebrow">
              Send a message
            </span>
            <h2 className="h-lg" style={{marginBottom: "1.4rem"}}>
              Request your free quote
            </h2>
            <form id="contact-form" noValidate action="https://formspree.io/f/your-form-id" method="POST">
              <div className="field">
                <label htmlFor="name">
                  Your name
                </label>
                <input id="name" name="name" type="text" placeholder="Jane Doe" required />
              </div>
              <div className="field">
                <label htmlFor="email">
                  Email
                </label>
                <input id="email" name="email" type="email" placeholder="jane@business.com" required />
              </div>
              <div className="field">
                <label htmlFor="service">
                  What do you need?
                </label>
                <select id="service" name="service">
                  <option>
                    Website Design
                  </option>
                  <option>
                    SEO Services
                  </option>
                  <option>
                    Google Business Profile (GMB)
                  </option>
                  <option>
                    Social Media Marketing
                  </option>
                  <option>
                    Website Maintenance
                  </option>
                  <option>
                    Digital Marketing
                  </option>
                  <option>
                    Graphic & Logo Design
                  </option>
                  <option>
                    E-commerce Store
                  </option>
                  <option>
                    Not sure yet
                  </option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="message">
                  Project details
                </label>
                <textarea id="message" name="message" placeholder="A few sentences about your business, goals, and budget..."></textarea>
              </div>
              <button className="btn btn--primary btn--lg" type="submit">
                Send Message
              </button>
              <p id="form-note" role="status" style={{display: "none", marginTop: "1rem", color: "var(--teal)", fontSize: ".92rem"}}></p>
            </form>
          </div>
          <div className="reveal">
            <span className="eyebrow">
              Other ways to reach me
            </span>
            <h2 className="h-lg" style={{marginBottom: "1.4rem"}}>
              Get in touch
            </h2>
            <ul className="info-list">
              <li>
                <span className="ico">
                  ✉
                </span>
                <div>
                  <b>
                    Email
                  </b>
                  <br />
                  <span>
                    hello@mostafijemon.com
                  </span>
                </div>
              </li>
              <li>
                <span className="ico">
                  🌐
                </span>
                <div>
                  <b>
                    Website
                  </b>
                  <br />
                  <span>
                    mostafijemon.com
                  </span>
                </div>
              </li>
              <li>
                <span className="ico">
                  ⏱
                </span>
                <div>
                  <b>
                    Response time
                  </b>
                  <br />
                  <span>
                    Usually within 24 hours
                  </span>
                </div>
              </li>
              <li>
                <span className="ico">
                  🛠
                </span>
                <div>
                  <b>
                    Availability
                  </b>
                  <br />
                  <span>
                    Remote · working with clients worldwide
                  </span>
                </div>
              </li>
            </ul>
            <div className="card" style={{marginTop: "1.6rem"}}>
              <span className="eyebrow">
                Why reach out
              </span>
              <ul className="checklist" style={{marginTop: ".6rem"}}>
                <li>
                  Free, honest project advice — no obligation
                </li>
                <li>
                  Clear, fixed quote before any work begins
                </li>
                <li>
                  Fast turnaround and reliable communication
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
