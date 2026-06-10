import Link from "next/link";
import { site } from "../data/siteContent";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-brand">Bella Vista Bistro</p>
          <p className="footer-address">{site.address}</p>
          <p className="footer-address">{site.phone} · {site.email}</p>
        </div>
        <div className="footer-socials">
          <a href={site.socials.instagram} aria-label="Instagram">IG</a>
          <a href={site.socials.facebook}  aria-label="Facebook">FB</a>
          <a href={site.socials.twitter}   aria-label="Twitter">TW</a>
        </div>
        <p className="footer-copy">© 2026 Bella Vista Bistro. All rights reserved.</p>
      </div>
    </footer>
  );
}
