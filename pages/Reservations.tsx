import { FormEvent, useState } from 'react'
import Layout from '@/components/Layout'

export default function ReservationsPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <Layout title="Bella Vista Bistro | Reservations">
      <section className="section page-intro">
        <div className="container narrow-copy">
          <p className="eyebrow">Reservations</p>
          <h1>Book a table for dinner, brunch, or a special celebration.</h1>
          <p>Request a reservation below. This form is UI-only for demo purposes and does not send data to a server.</p>
        </div>
      </section>

      <section className="section section--tight-top">
        <div className="container narrow-copy">
          <div className="form-card">
            {submitted ? (
              <p className="form-success">
                Your reservation request has been recorded. We&apos;ll confirm availability by email shortly.
              </p>
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
                  Date
                  <input type="date" name="date" required />
                </label>
                <label>
                  Time
                  <input type="time" name="time" required />
                </label>
                <label>
                  Party size
                  <input type="number" name="partySize" min={1} max={20} required />
                </label>
                <label>
                  Special requests
                  <textarea name="notes" rows={4} />
                </label>
                <button type="submit" className="button button--primary">
                  Request reservation
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}
