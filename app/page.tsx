import Link from "next/link";
import { featuredDishes } from "./data/menu";
import { site } from "./data/siteContent";

export default function HomePage() {
  return (
    <>
      {/* ---- Hero ---- */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <p className="hero-eyebrow">Est. 1998 · New York City</p>
            <h1 className="hero-title">Bella Vista Bistro</h1>
            <p className="hero-tagline">{site.tagline}</p>
            <div className="hero-ctas">
              <Link href="/menu" className="btn btn-primary">View Menu</Link>
              <Link href="/reservations" className="btn btn-outline">Book a Table</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Featured Dishes ---- */}
      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="container">
          <h2 className="section-title">Chef's Selection</h2>
          <p className="section-sub">Three dishes that define what Bella Vista Bistro is all about.</p>
          <div className="featured-grid">
            {featuredDishes.map((dish) => (
              <div key={dish.id} className="dish-card">
                <h3 className="dish-name">{dish.name}</h3>
                <p className="dish-desc">{dish.description}</p>
                <span className="dish-price">{dish.price}</span>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/menu" className="btn btn-primary">See Full Menu</Link>
          </div>
        </div>
      </section>

      {/* ---- Hours / Location teaser ---- */}
      <div className="teaser-strip">
        <div className="container">
          <div className="teaser-block">
            <h3>Find Us</h3>
            <p>{site.address}</p>
            <p>{site.phone}</p>
          </div>
          <div className="teaser-block">
            <h3>Hours</h3>
            {site.hours.map((h) => (
              <p key={h.day}><strong>{h.day}:</strong> {h.time}</p>
            ))}
          </div>
          <div className="teaser-block" style={{ alignSelf: "center" }}>
            <Link href="/reservations" className="btn btn-primary">Reserve a Table</Link>
          </div>
        </div>
      </div>
    </>
  );
}
