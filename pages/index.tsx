import Link from 'next/link'
import Layout from '@/components/Layout'
import { featuredDishes } from '@/data/menu'
import { siteContent } from '@/data/siteContent'

export default function HomePage() {
  return (
    <Layout title="Bella Vista Bistro | Home">
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Bella Vista Bistro</p>
              <h1>{siteContent.tagline}</h1>
              <p>{siteContent.heroDescription}</p>
              <div className="cta-row">
                <Link href="/menu" className="button button--primary">
                  View Menu
                </Link>
                <Link href="/reservations" className="button button--secondary">
                  Book a Table
                </Link>
              </div>
            </div>
            <div className="hero-card">
              <span className="hero-card__label">Tonight&apos;s mood</span>
              <strong>Golden hour aperitifs, handmade pasta, and dessert worth staying late for.</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container section-heading">
          <div>
            <p className="eyebrow">Featured dishes</p>
            <h2>Guest favorites that turn first visits into regular rituals.</h2>
          </div>
          <Link href="/menu" className="text-link">
            See the full menu
          </Link>
        </div>
        <div className="container card-grid">
          {featuredDishes.map((dish) => (
            <article key={dish.id} className="info-card">
              <div className="image-swatch" />
              <div className="card-copy">
                <div className="title-row">
                  <h3>{dish.name}</h3>
                  <span>{dish.price}</span>
                </div>
                <p>{dish.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--accent">
        <div className="container teaser-grid">
          <div>
            <p className="eyebrow">Hours & location</p>
            <h2>Dinner downtown, brunch on weekends, and room for one more round of espresso.</h2>
          </div>
          <div className="teaser-card">
            <p>{siteContent.address}</p>
            <p>{siteContent.phone}</p>
            <Link href="/contact" className="text-link">
              View hours and contact details
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
