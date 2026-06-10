import Link from 'next/link'
import { featuredDishes } from '@/data/menu'
import { siteContent } from '@/data/siteContent'

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="eyebrow">Classic neighborhood dining</p>
          <h1>{siteContent.name}</h1>
          <p className="hero-tagline">{siteContent.tagline}</p>
          <div className="hero-actions">
            <Link href="/menu" className="button primary-button">
              View Menu
            </Link>
            <Link href="/reservations" className="button secondary-button">
              Book a Table
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Featured plates</p>
            <h2>Guest favorites worth starting with</h2>
            <p>
              A few Bella Vista staples for diners who want a quick feel for the menu before planning a visit.
            </p>
          </div>
          <div className="card-grid three-column-grid">
            {featuredDishes.map((dish) => (
              <article key={dish.id} className="info-card menu-item-card">
                <div className="menu-item-topline">
                  <h3>{dish.name}</h3>
                  <span>{dish.price}</span>
                </div>
                <p>{dish.description}</p>
                <Link href="/menu" className="text-link">
                  Explore the full menu
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section accent-section">
        <div className="container split-layout">
          <div>
            <p className="eyebrow">Plan tonight easily</p>
            <h2>Hours and location at a glance</h2>
            <p>
              Find us in the heart of the neighborhood for weeknight dinners, lingering weekend lunches, and candlelit date nights.
            </p>
            <ul className="detail-list">
              <li>
                <strong>Address:</strong> {siteContent.address.street}, {siteContent.address.city}, {siteContent.address.state} {siteContent.address.zip}
              </li>
              <li>
                <strong>Phone:</strong> <a href={`tel:${siteContent.phoneRaw}`}>{siteContent.phone}</a>
              </li>
              <li>
                <strong>Today&apos;s vibe:</strong> Walk in for cocktails or reserve ahead for the dining room.
              </li>
            </ul>
          </div>
          <div className="hours-card">
            <h3>Opening hours</h3>
            <ul>
              {siteContent.hours.map((entry) => (
                <li key={entry.day}>
                  <span>{entry.day}</span>
                  <span>{entry.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
