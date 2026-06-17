import Link from 'next/link'
import ServiceIcon from '@/app/components/ServiceIcon'
import { getServicesOverviewData } from '@/lib/wordpress'

export const dynamic = 'force-dynamic'

export async function generateMetadata() {
  const data = await getServicesOverviewData()
  return {
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords,
  }
}

export default async function Services() {
  const { hero, items, intro, cta } = await getServicesOverviewData()

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="crumb">
            <Link href="/">Home</Link> / Services
          </p>
          <h1>{hero.title}</h1>
          <p className="lead">{hero.lead}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {items.map((item) => (
              <Link key={item.title} href={item.url} className="card reveal">
                <ServiceIcon icon={item.icon} iconImage={item.iconImage} alt={item.iconAlt} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="more">{item.moreLabel || 'Learn more'}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-alt">
        <div className="container split">
          <div className="reveal">
            <span className="eyebrow">{intro.eyebrow}</span>
            <h2 className="h-lg">{intro.heading}</h2>
            <p className="lead" style={{ marginBottom: '1.3rem' }}>
              {intro.lead}
            </p>
            <ul className="checklist">
              {intro.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link href="/contact" className="btn btn--primary" style={{ marginTop: '1.2rem' }}>
              Get a Free Quote
            </Link>
          </div>
          <div className="reveal">
            <div className="steps">
              {intro.steps.map((step) => (
                <div key={step.title} className="step">
                  <span className="n"></span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
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
