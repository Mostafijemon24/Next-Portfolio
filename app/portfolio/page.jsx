import Link from 'next/link'
import { getPortfolioPageData } from '@/lib/wordpress'

export const dynamic = 'force-dynamic'

export async function generateMetadata() {
  const data = await getPortfolioPageData()
  return {
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords,
  }
}

export default async function Portfolio() {
  const { hero, items, logos, reviews, cta } = await getPortfolioPageData()

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="crumb">
            <Link href="/">Home</Link> / Portfolio
          </p>
          <h1>{hero.title}</h1>
          <p className="lead">{hero.lead}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="work-grid">
            {items.map((item) => (
              <a
                key={item.title}
                className="work reveal"
                href={item.url}
                target="_blank"
                rel="noopener"
              >
                <img loading="lazy" src={item.image} alt={item.alt} />
                <div className="meta">
                  <span className="cat">{item.category}</span>
                  <h3>{item.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-alt">
        <div className="container">
          <div className="center" style={{ marginBottom: '2.2rem', maxWidth: '620px' }}>
            <span className="eyebrow">{logos.eyebrow}</span>
            <h2 className="h-lg">{logos.heading}</h2>
            <p className="lead">{logos.lead}</p>
          </div>
          <div className="logo-wall">
            {logos.items.map((logo) => (
              <img key={logo.url} loading="lazy" src={logo.url} alt={logo.alt} />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: '2.4rem', maxWidth: '560px' }}>
            <span className="eyebrow">{reviews.eyebrow}</span>
            <h2 className="h-lg">{reviews.heading}</h2>
          </div>
          <div className="grid grid-3">
            {reviews.items.map((review) => (
              <figure key={review.name} className="quote reveal">
                <div className="stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                <blockquote>
                  <p>“{review.quote}”</p>
                </blockquote>
                <figcaption className="who">
                  <span className="av">{review.initial}</span>
                  <span>
                    <b>{review.name}</b>
                    <span>{review.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="cta-band reveal">
            <span className="eyebrow">{cta.eyebrow}</span>
            <h2 className="h-lg">{cta.heading}</h2>
            <p className="lead">{cta.lead}</p>
            <div style={{ display: 'flex', gap: '.8rem', justifyContent: 'center', flexWrap: 'wrap' }}>
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
