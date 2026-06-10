import { FormEvent, useState } from 'react'
import Layout from '@/components/Layout'
import { siteContent } from '@/data/siteContent'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <Layout title="Bella Vista Bistro | Contact">
      <section className="section page-intro">
        <div className="container narrow-copy">
          <p className="eyebrow">Contact</p>
          <h1>Find us downtown, or send a note before your visit.</h1>
          <p>Hours, directions, and a quick message form for questions about private dining, dietary needs, or large parties.</p>
        </div>
      </section>

      <section className="section section--tight-top">
        <div className="container split-layout">
          <div>
            <h2>Visit</h2>
            <p>{siteContent.address}</p>
            <p>{siteContent.phone}</p>
            <p>{siteContent.email}</p>

            <h2 style={{ marginTop: '2rem' }}>Hours</h2>
            <ul className="hours-list">
              {siteContent.hours.map((entry) => (
                <li key={entry.day}>
                  <span>{entry.day}</span>
                  <span>{entry.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="form-card">
            <h2>Send a message</h2>
            {submitted ? (
              <p className="form-success">Thanks for reaching out. We&apos;ll get back to you shortly.</p>
            ) : (
              <form className="stack-form" onSubmit={handleSubmit}>
                <label>
                  Name
                  <input type="text" name="name" required />
                </label>
                <label>
                  Email
                  <input type="email" name="email" required />
                </label>
                <label>
                  Message
                  <textarea name="message" rows={5} required />
                </label>
                <button type="submit" className="button button--primary">
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}
