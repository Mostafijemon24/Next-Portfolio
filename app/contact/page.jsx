import Link from 'next/link'
import ContactForm from '@/app/components/ContactForm'
import { getContactPageData } from '@/lib/wordpress'

export const revalidate = 3600

export async function generateMetadata() {
  const data = await getContactPageData()
  return {
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords,
  }
}

export default async function Contact() {
  const data = await getContactPageData()
  const { hero, form, sidebar } = data

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="crumb">
            <Link href="/">Home</Link> / Contact
          </p>
          <h1>{hero.title}</h1>
          <p className="lead">{hero.lead}</p>
        </div>
      </section>
      <section className="section">
        <div className="container contact-grid">
          <div className="reveal">
            <span className="eyebrow">{form.eyebrow}</span>
            <h2 className="h-lg" style={{ marginBottom: '1.4rem' }} dangerouslySetInnerHTML={{ __html: form.heading }} />
            <ContactForm
              endpoint={`${process.env.WORDPRESS_API_URL || 'https://next.mostafijemon.com/wp-json'}/me/v1/contact`}
              serviceOptions={form.serviceOptions}
              submitLabel={form.submitLabel}
            />
          </div>
          <div className="reveal">
            <span className="eyebrow">{sidebar.eyebrow}</span>
            <h2 className="h-lg" style={{ marginBottom: '1.4rem' }} dangerouslySetInnerHTML={{ __html: sidebar.heading }} />
            <ul className="info-list">
              <li>
                <span className="ico">✉</span>
                <div>
                  <b>Email</b><br />
                  <a href={`mailto:${sidebar.email}`}>{sidebar.email}</a>
                </div>
              </li>
              <li>
                <span className="ico">📞</span>
                <div>
                  <b>Phone</b><br />
                  <a href={`tel:${(sidebar.phone || '').replace(/\s/g, '')}`}>{sidebar.phone}</a>
                </div>
              </li>
              <li>
                <span className="ico">💬</span>
                <div>
                  <b>WhatsApp</b><br />
                  <a
                    href={`https://wa.me/${String(sidebar.whatsapp || '').replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </li>
              <li>
                <span className="ico">⏱</span>
                <div>
                  <b>Response time</b><br />
                  <span>{sidebar.responseTime}</span>
                </div>
              </li>
              <li>
                <span className="ico">🛠</span>
                <div>
                  <b>Availability</b><br />
                  <span>{sidebar.availability}</span>
                </div>
              </li>
            </ul>
            <div className="card" style={{ marginTop: '1.6rem' }}>
              <span className="eyebrow">{sidebar.whyEyebrow}</span>
              <ul className="checklist" style={{ marginTop: '.6rem' }}>
                {sidebar.whyItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
