import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { siteContent } from '@/data/siteContent'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
  { href: '/reservations', label: 'Reservations' },
]

export default function Header() {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) => router.pathname === href

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand-mark" onClick={() => setOpen(false)}>
          <span className="brand-mark__eyebrow">Est. 2026</span>
          <span className="brand-mark__name">{siteContent.name}</span>
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
          <span className="sr-only">Toggle navigation</span>
        </button>

        <nav id="primary-navigation" className={`site-nav ${open ? 'site-nav--open' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? 'nav-link nav-link--active' : 'nav-link'}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
