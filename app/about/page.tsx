import { siteContent } from '@/data/siteContent'

export const metadata = {
  title: 'About',
}

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container split-layout about-layout">
        <div>
          <p className="eyebrow">Our story</p>
          <h1>A neighborhood bistro built for long meals and easy conversation</h1>
          {siteContent.aboutParagraphs.map((paragraph) => (
            <p key={paragraph} className="body-copy">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="image-panel about-image-panel" aria-label="Dining room atmosphere placeholder">
          <div className="image-panel-content">
            <span>Dining room ambience</span>
          </div>
        </div>
      </div>
    </section>
  )
}
