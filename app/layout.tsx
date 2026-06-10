import type { Metadata } from 'next'
import './globals.css'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { siteContent } from '@/data/siteContent'

export const metadata: Metadata = {
  title: {
    default: `${siteContent.name} | Warm Italian Dining`,
    template: `%s | ${siteContent.name}`,
  },
  description:
    'Bella Vista Bistro is a warm neighborhood restaurant serving seasonal Italian-inspired dishes, desserts, and cocktails in a welcoming setting.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <Header />
          <main className="page-shell">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
