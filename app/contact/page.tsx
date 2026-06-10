'use client'

import { FormEvent, useState } from 'react'
import { siteContent } from '@/data/siteContent'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <section className="section">
      <div className="container split-layout contact-layout">
        <div>
          <p className="eyebrow">Visit or say hello</p>
          <h1>Contact Bella Vista Bistro</h1>
          <div className="contact-card-stack">
            <article className="info-card">
              <h2>Location</h2>
              <p>{siteContent.address.street}</p>
              <p>
                {siteContent.address.city}, {siteContent.address.state} {siteContent.address.zip}
              </p>
            </article>
            <article className="info-card">
              <h2>Call or email</h2>
              <p>
                <a href={`tel:${siteContent.phoneRaw}`}>{siteContent.phone}</a>
              </p>
              <p>
                <a href={`mailto:${siteContent.email}`}>{siteContent.email}</a>
              </p>
            </article>
            <article className="info-card">
              <h2>Opening hours</h2>
              <table className="hours-table">
                <tbody>
                  {siteContent.hours.map((entry) => (
                    <tr key={entry.day}>
                      <th scope="row">{entry.day}</th>
                      <td>{entry.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </article>
            <article className="map-placeholder info-card" aria-label="Map placeholder">
              <h2>Map</h2>
              <p>Map embed placeholder for future integration.</p>
            </article>
          </div>
        </div>

        <div className="form-panel">
          <h2>Send a message</h2>
          <p>Questions about private dining, special occasions, or dietary accommodations? We&apos;ll follow up.</p>
          <form className="form-grid" onSubmit={handleSubmit}>
            <label>
              Name
              <input type="text" name="name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" required />
            </label>
            <label className="full-width">
              Message
              <textarea name="message" rows={6} required />
            </label>
            <button type="submit" className="button primary-button">
              Submit
            </button>
          </form>
          {submitted ? <p className="form-success">Thanks, we&apos;ll get back to you.</p> : null}
        </div>
      </div>
    </section>
  )
}
