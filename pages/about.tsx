import Layout from '@/components/Layout'
import { siteContent } from '@/data/siteContent'

export default function AboutPage() {
  return (
    <Layout title="Bella Vista Bistro | About">
      <section className="section">
        <div className="container split-layout">
          <div className="narrow-copy">
            <p className="eyebrow">About</p>
            <h1>The story behind Bella Vista Bistro.</h1>
            {siteContent.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="feature-image" aria-label="Bella Vista Bistro dining room ambiance" />
        </div>
      </section>
    </Layout>
  )
}
