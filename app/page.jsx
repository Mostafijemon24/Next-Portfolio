import Link from 'next/link'
import ServiceIcon from '@/app/components/ServiceIcon'
import { getHomePageData } from '@/lib/wordpress'

export const revalidate = 3600

export async function generateMetadata() {
  const { seo } = await getHomePageData()
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    ...(seo.ogImage ? { openGraph: { images: [{ url: seo.ogImage }] } } : {}),
  }
}

function CtaButton({ btn, large }) {
  const cls = `btn btn--${btn.variant === 'primary' ? 'primary' : 'ghost'}${large ? ' btn--lg' : ''}`
  return (
    <Link href={btn.url} className={cls}>
      {btn.label}
    </Link>
  )
}

export default async function Home() {
  const data = await getHomePageData()
  const { hero, stats, services, why, logos, work, reviews, cta } = data

  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="reveal in">
              <span className="eyebrow">{hero.eyebrow}</span>
              {hero.headingHtml ? (
                <h1 dangerouslySetInnerHTML={{ __html: hero.headingHtml }} />
              ) : (
                <h1>
                  {hero.headingBefore}
                  <span className="hl">{hero.headingHighlight}</span>
                  {hero.headingAfter}
                </h1>
              )}
              <p className="lead">{hero.lead}</p>
              <div className="hero-cta">
                {hero.ctas.map((btn) => (
                  <CtaButton key={`${btn.url}-${btn.label}`} btn={btn} large />
                ))}
              </div>
              <div className="hero-spec">
                {hero.specs.map((spec) => (
                  <span key={`${spec.value}-${spec.label}`}>
                    <b>{spec.value}</b> {spec.label}
                  </span>
                ))}
              </div>
            </div>
            <aside className="hero-card reveal in" aria-label="Quick facts">
              {hero.card.map((row) => (
                <div className="row" key={row.key}>
                  <span className="k">{row.key}</span>
                  <span className={row.highlight ? 'v teal' : 'v'}>{row.value}</span>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </section>

      <section className="section--tight bg-alt">
        <div className="container stats">
          {stats.map((stat) => (
            <div className="stat reveal" key={stat.lbl}>
              <div className="num">{stat.num}</div>
              <div className="lbl">{stat.lbl}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: '2.6rem', maxWidth: '660px' }}>
            <span className="eyebrow">{services.eyebrow}</span>
            <h2 className="h-lg">{services.heading}</h2>
            <p className="lead">{services.lead}</p>
          </div>
          <div className="grid grid-4">
            {services.items.map((item) => (
              <Link href={item.url} className="card reveal" key={item.url}>
                <ServiceIcon icon={item.icon} iconImage={item.iconImage} alt={item.iconAlt} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="more">Explore</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-alt">
        <div className="container split">
          <div className="reveal">
            <span className="eyebrow">{why.eyebrow}</span>
            <h2 className="h-lg">{why.heading}</h2>
            <p className="lead" style={{ marginBottom: '1.4rem' }}>{why.lead}</p>
            <ul className="checklist">
              {why.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="media-frame reveal" data-spec="// profile">
            <img loading="lazy" src={why.image.url} alt={why.image.alt} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: '2.2rem', maxWidth: '620px' }}>
            <span className="eyebrow">{logos.eyebrow}</span>
            <h2 className="h-lg">{logos.heading}</h2>
            <p className="lead">{logos.lead}</p>
          </div>
          <div className="logo-wall">
            {logos.items.map((logo) => (
              <img loading="lazy" key={logo.url} src={logo.url} alt={logo.alt} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-alt">
        <div className="container">
          <div className="center" style={{ marginBottom: '2.2rem', maxWidth: '560px' }}>
            <span className="eyebrow">{work.eyebrow}</span>
            <h2 className="h-lg">{work.heading}</h2>
          </div>
          <div className="work-grid">
            {work.items.map((item) => (
              <a
                className="work reveal"
                key={`${item.url}-${item.title}`}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img loading="lazy" src={item.image} alt={item.alt} />
                <div className="meta">
                  <span className="cat">{item.category}</span>
                  <h3>{item.title}</h3>
                </div>
              </a>
            ))}
          </div>
          <div className="center" style={{ marginTop: '2rem' }}>
            <Link href="/portfolio" className="btn btn--ghost">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: '2.4rem', maxWidth: '560px' }}>
            <span className="eyebrow">{reviews.eyebrow}</span>
            <h2 className="h-lg">{reviews.heading}</h2>
            <p className="lead">{reviews.lead}</p>
          </div>
          <div className="grid grid-3">
            {reviews.items.map((item) => (
              <figure className="quote reveal" key={`${item.name}-${item.initial}`}>
                <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
                <blockquote>
                  <p>&ldquo;{item.quote}&rdquo;</p>
                </blockquote>
                <figcaption className="who">
                  <span className="av">{item.initial}</span>
                  <span>
                    <b>{item.name}</b>
                    <span>{item.role}</span>
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
              {cta.buttons.map((btn) => (
                <CtaButton key={`${btn.url}-${btn.label}`} btn={btn} large />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
