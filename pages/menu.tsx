import Layout from '@/components/Layout'
import { menuCategories } from '@/data/menu'

export default function MenuPage() {
  return (
    <Layout title="Bella Vista Bistro | Menu">
      <section className="section page-intro">
        <div className="container narrow-copy">
          <p className="eyebrow">Menu</p>
          <h1>A full menu built for long dinners and one-more-bite desserts.</h1>
          <p>Browse starters, mains, and desserts with prices and quick descriptions that are easy to scan on mobile.</p>
        </div>
      </section>

      <section className="section section--tight-top">
        <div className="container menu-stack">
          {menuCategories.map((category) => (
            <section key={category.title} className="menu-category">
              <div className="section-heading section-heading--stacked">
                <p className="eyebrow">{category.title}</p>
                <h2>{category.title}</h2>
              </div>
              <div className="card-grid card-grid--menu">
                {category.items.map((item) => (
                  <article key={item.id} className="info-card info-card--menu">
                    <div className="title-row">
                      <h3>{item.name}</h3>
                      <span>{item.price}</span>
                    </div>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </Layout>
  )
}
