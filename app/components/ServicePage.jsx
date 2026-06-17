import Link from 'next/link'

export default function ServicePage({ data }) {
  const { hero, intro, features, process, faqs, cta } = data

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="crumb">
            <Link href="/services">Services</Link> / {hero.breadcrumb}
          </p>
          <h1>{hero.title}</h1>
          <p className="lead">{hero.lead}</p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="reveal">
            <span className="eyebrow">{intro.eyebrow}</span>
            <h2 className="h-lg" dangerouslySetInnerHTML={{ __html: intro.heading }} />
            <p className="lead" style={{ marginBottom: '1.3rem' }}>{intro.lead}</p>
            <ul className="checklist">
              {intro.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link href={intro.ctaUrl} className="btn btn--primary" style={{ marginTop: '1rem' }}>
              {intro.ctaText}
            </Link>
          </div>
          <div className="media-frame reveal" data-spec="// preview">
            <img loading="lazy" src={intro.image.url} alt={intro.image.alt} />
          </div>
        </div>
      </section>

      <section className="section bg-alt">
        <div className="container">
          <div className="center" style={{ marginBottom: '2.5rem', maxWidth: '640px' }}>
            <span className="eyebrow">{features.eyebrow}</span>
            <h2 className="h-lg" dangerouslySetInnerHTML={{ __html: features.heading }} />
          </div>
          <div className="grid grid-3">
            {features.items.map((item) => (
              <article className="card reveal" key={item.idx}>
                <span className="idx">{item.idx}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split reverse">
          <div className="reveal">
            <div className="steps">
              {process.steps.map((step) => (
                <div className="step reveal" key={step.title}>
                  <span className="n"></span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal">
            <span className="eyebrow">{process.eyebrow}</span>
            <h2 className="h-lg" dangerouslySetInnerHTML={{ __html: process.heading }} />
            <p className="lead">{process.lead}</p>
          </div>
        </div>
      </section>

      <section className="section bg-alt">
        <div className="container">
          <div className="center" style={{ marginBottom: '2.5rem', maxWidth: '620px' }}>
            <span className="eyebrow">{faqs.eyebrow}</span>
            <h2 className="h-lg" dangerouslySetInnerHTML={{ __html: faqs.heading }} />
          </div>
          <div className="grid grid-2">
            {faqs.items.map((item) => (
              <article className="card reveal" key={item.question}>
                <h3 style={{ fontSize: '1.05rem' }}>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band reveal">
            <span className="eyebrow">{cta.eyebrow}</span>
            <h2 className="h-lg" dangerouslySetInnerHTML={{ __html: cta.heading }} />
            <p className="lead">{cta.lead}</p>
            <div style={{ display: 'flex', gap: '.8rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn--primary btn--lg">Get a Free Quote</Link>
              <Link href="/portfolio" className="btn btn--ghost btn--lg">View Portfolio</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
