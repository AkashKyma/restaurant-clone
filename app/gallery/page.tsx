import { gallery } from "../data/gallery";

export const metadata = { title: "Gallery | Bella Vista Bistro" };

export default function GalleryPage() {
  return (
    <>
      <div className="page-hero">
        <h1>Gallery</h1>
        <p>A taste of the ambiance — before you arrive.</p>
      </div>

      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {gallery.map((item) => (
              <div
                key={item.id}
                className="gallery-item"
                style={{ background: item.color }}
                role="img"
                aria-label={item.alt}
              >
                {item.alt}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
