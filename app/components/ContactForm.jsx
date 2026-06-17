'use client'

function isFormReady(action) {
  return Boolean(action && !action.includes('your-form-id'))
}

export default function ContactForm({ action, serviceOptions, submitLabel }) {
  const ready = isFormReady(action)

  return (
    <form
      id="contact-form"
      noValidate
      action={action}
      method="POST"
      onSubmit={(e) => {
        if (!ready) {
          e.preventDefault()
          const note = document.getElementById('form-note')
          if (note) {
            note.style.display = 'block'
            note.textContent =
              'Contact Form Endpoint সেট করা নেই। WordPress → Site Settings → Contact → Contact Form Endpoint-এ Formspree URL দিন (অথবা Vercel-এ NEXT_PUBLIC_FORM_ENDPOINT env যোগ করুন)।'
          }
        }
      }}
    >
      <div className="field">
        <label htmlFor="name">Your name</label>
        <input id="name" name="name" type="text" placeholder="Jane Doe" required />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="jane@business.com" required />
      </div>
      <div className="field">
        <label htmlFor="service">What do you need?</label>
        <select id="service" name="service">
          {serviceOptions.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">Project details</label>
        <textarea id="message" name="message" placeholder="A few sentences about your business, goals, and budget..." />
      </div>
      <button className="btn btn--primary btn--lg" type="submit">{submitLabel}</button>
      {!ready && (
        <p role="status" style={{ marginTop: '1rem', color: 'var(--muted)', fontSize: '.92rem' }}>
          Form এখনও কানেক্ট করা নেই — নিচের ধাপগুলো করুন, তারপর আবার চেষ্টা করুন।
        </p>
      )}
      <p id="form-note" role="status" style={{ display: 'none', marginTop: '1rem', color: 'var(--teal)', fontSize: '.92rem' }} />
    </form>
  )
}
