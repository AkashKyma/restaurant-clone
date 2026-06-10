"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { routes } from "../data/siteContent";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="logo">Bella Vista Bistro</Link>

        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          <span /><span /><span />
        </button>

        <nav className={`nav ${open ? "nav--open" : ""}`}>
          {routes.map((r) => (
            <Link
              key={r.path}
              href={r.path}
              className={`nav-link ${pathname === r.path ? "nav-link--active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {r.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
