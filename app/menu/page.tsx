import { menuCategories } from "../data/menu";

export const metadata = { title: "Menu | Bella Vista Bistro" };

export default function MenuPage() {
  return (
    <>
      <div className="page-hero">
        <h1>Our Menu</h1>
        <p>Seasonal Italian cuisine prepared with love.</p>
      </div>

      <section className="section">
        <div className="container">
          {menuCategories.map((cat) => (
            <div key={cat.id} className="menu-category">
              <h2 className="category-title">{cat.title}</h2>
              <div className="menu-grid">
                {cat.items.map((item) => (
                  <div key={item.id} className="menu-card">
                    <span className="menu-card-name">{item.name}</span>
                    <span className="menu-card-desc">{item.description}</span>
                    <span className="menu-card-price">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
