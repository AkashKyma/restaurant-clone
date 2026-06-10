import { menuCategories } from '@/data/menu'

export const metadata = {
  title: 'Menu',
}

export default function MenuPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading narrow-heading">
          <p className="eyebrow">Full menu</p>
          <h1>Seasonal plates, handmade pastas, and classic desserts</h1>
          <p>
            Everything here is static for now, but the layout is ready for copy updates and future menu adjustments.
          </p>
        </div>

        <div className="menu-category-list">
          {menuCategories.map((category) => (
            <section key={category.id} className="menu-category-block">
              <div className="menu-category-header">
                <h2>{category.title}</h2>
                <p>{category.description}</p>
              </div>
              <div className="card-grid">
                {category.items.map((item) => (
                  <article key={item.id} className="info-card menu-item-card">
                    <div className="menu-item-topline">
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
      </div>
    </section>
  )
}
