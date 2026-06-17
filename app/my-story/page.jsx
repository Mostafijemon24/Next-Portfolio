import Link from 'next/link'
import { getMyStoryPageData } from '@/lib/wordpress'

export const revalidate = 3600

export async function generateMetadata() {
  const data = await getMyStoryPageData()
  return {
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords,
  }
}

export default async function MyStory() {
  const { hero, story, skills, process, cta } = await getMyStoryPageData()

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="crumb">
            <Link href="/">Home</Link> / My Story
          </p>
          <h1>{hero.title}</h1>
          <p className="lead">{hero.lead}</p>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div className="prose reveal" style={{ margin: '0' }}>
            <span className="eyebrow">{story.eyebrow}</span>
            <h2 className="h-lg" style={{ marginBottom: '1rem' }}>
              {story.heading}
            </h2>
            {story.paragraphs.map((paragraph, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </div>
          <div className="media-frame reveal" data-spec="// about">
            <img loading="lazy" src={story.image.url} alt={story.image.alt} />
          </div>
        </div>
      </section>
      <section className="section bg-alt">
        <div className="container">
          <div className="center" style={{ marginBottom: '2.4rem', maxWidth: '600px' }}>
            <span className="eyebrow">{skills.eyebrow}</span>
            <h2 className="h-lg">{skills.heading}</h2>
          </div>
          <div className="grid grid-3">
            {skills.items.map((item) => (
              <article key={item.idx} className="card reveal">
                <span className="idx">{item.idx}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: '2.4rem', maxWidth: '560px' }}>
            <span className="eyebrow">{process.eyebrow}</span>
            <h2 className="h-lg">{process.heading}</h2>
          </div>
          <div className="split">
            <div className="reveal">
              <div className="steps">
                {process.steps.map((step) => (
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
            <div className="reveal">
              <div className="card" style={{ padding: '2rem' }}>
                <span className="eyebrow">By the numbers</span>
                <div
                  className="stats"
                  style={{ gridTemplateColumns: 'repeat(2,1fr)', gap: '1rem', marginTop: '1rem' }}
                >
                  {process.stats.map((stat) => (
                    <div key={stat.lbl} className="stat">
                      <div className="num">{stat.num}</div>
                      <div className="lbl">{stat.lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
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
