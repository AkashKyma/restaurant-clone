import Layout from '@/components/Layout'
import { galleryImages } from '@/data/gallery'

export default function GalleryPage() {
  return (
    <Layout title="Bella Vista Bistro | Gallery">
      <section className="section page-intro">
        <div className="container narrow-copy">
          <p className="eyebrow">Gallery</p>
          <h1>Get the feel before you ever open the door.</h1>
          <p>A responsive gallery with rich placeholder visuals for dishes, interiors, and evening atmosphere.</p>
        </div>
      </section>
      <section className="section section--tight-top">
        <div className="container gallery-grid">
          {galleryImages.map((image) => (
            <figure key={image.id} className="gallery-card">
              <div className="gallery-card__image" style={{ background: image.image }} aria-label={image.alt} />
              <figcaption>{image.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </Layout>
  )
}
