import Link from 'next/link'
import { siteContent } from '@/data/siteContent'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <h3>{siteContent.name}</h3>
            <p className="footer-copy">{siteContent.tagline}</p>
            <p className="footer-copy">
              {siteContent.address.street}, {siteContent.address.city}, {siteContent.address.state} {siteContent.address.zip}
            </p>
          </div>
          <div>
            <h3>Explore</h3>
            <ul className="footer-socials">
              {siteContent.socialLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="social-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-meta">
          <span>© 2026 {siteContent.name}</span>
          <span>Marketing site prototype</span>
        </div>
      </div>
    </footer>
  )
}
