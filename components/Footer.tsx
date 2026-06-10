import { siteContent } from '@/data/siteContent'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>{siteContent.name}</h3>
          <p>{siteContent.hoursTeaser}</p>
        </div>
        <div>
          <h3>Visit</h3>
          <p>{siteContent.address}</p>
          <p>{siteContent.phone}</p>
        </div>
        <div>
          <h3>Follow</h3>
          <ul className="social-list">
            {siteContent.socialLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} aria-label={link.label}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">© 2026 Bella Vista Bistro</div>
    </footer>
  )
}
