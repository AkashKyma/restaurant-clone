import { galleryImages } from '@/data/gallery'

export const metadata = {
  title: 'Gallery',
}

export default function GalleryPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading narrow-heading">
          <p className="eyebrow">Gallery</p>
          <h1>A quick look at Bella Vista Bistro</h1>
          <p>Placeholder panels stand in for real photography and scale cleanly across phone and desktop screens.</p>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <article
              key={image.id}
              className="gallery-card"
              style={{ background: image.background }}
              aria-label={image.alt}
            >
              <div className="gallery-card-overlay">
                <span>{image.alt}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
