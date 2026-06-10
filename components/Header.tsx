'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { routes } from '@/data/routes'
import { siteContent } from '@/data/siteContent'

export function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  function isActive(path: string) {
    return pathname === path
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-inner">
          <Link href="/" className="brand-block" onClick={closeMenu}>
            <span className="brand-mark">{siteContent.name}</span>
            <span className="brand-subtitle">Warm Italian dining</span>
          </Link>

          <nav aria-label="Primary" className="desktop-nav">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={`nav-link${isActive(route.path) ? ' active' : ''}`}
              >
                {route.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        {menuOpen ? (
          <nav id="mobile-navigation" aria-label="Mobile" className="mobile-nav">
            <ul className="mobile-nav-list">
              {routes.map((route) => (
                <li key={route.path}>
                  <Link
                    href={route.path}
                    className={`nav-link${isActive(route.path) ? ' active' : ''}`}
                    onClick={closeMenu}
                  >
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>
    </header>
  )
}
