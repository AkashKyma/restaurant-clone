'use client'

import { FormEvent, useState } from 'react'

export default function ReservationsPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <section className="section">
      <div className="container split-layout reservation-layout">
        <div>
          <p className="eyebrow">Reservations</p>
          <h1>Request a table in a few clicks</h1>
          <p className="body-copy">
            This is a UI-only reservation flow for now. Guests can share the basics and receive an on-page confirmation without any backend integration.
          </p>
          <div className="info-card reservation-note">
            <h2>Before you arrive</h2>
            <ul className="detail-list">
              <li>Reservations are ideal for dinner service and weekend brunch.</li>
              <li>Large-party and event requests can be handled later with a real backend or email workflow.</li>
              <li>Form success is inline only, exactly as requested for v1.</li>
            </ul>
          </div>
        </div>

        <div className="form-panel">
          <h2>Reservation request</h2>
          <form className="form-grid" onSubmit={handleSubmit}>
            <label>
              Date
              <input type="date" name="date" required />
            </label>
            <label>
              Time
              <input type="time" name="time" required />
            </label>
            <label>
              Party size
              <select name="partySize" required defaultValue="">
                <option value="" disabled>
                  Select party size
                </option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((size) => (
                  <option key={size} value={size}>
                    {size} {size === 1 ? 'guest' : 'guests'}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Name
              <input type="text" name="name" required />
            </label>
            <label className="full-width">
              Phone
              <input type="tel" name="phone" required />
            </label>
            <button type="submit" className="button primary-button">
              Request reservation
            </button>
          </form>
          {submitted ? <p className="form-success">Request received. We&apos;ll confirm your table shortly.</p> : null}
        </div>
      </div>
    </section>
  )
}
