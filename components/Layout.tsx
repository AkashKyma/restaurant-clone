import type { ReactNode } from 'react'
import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

type LayoutProps = {
  children: ReactNode
  title: string
  description?: string
}

export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={description ?? 'Bella Vista Bistro is a warm, modern Italian restaurant with a full menu, gallery, contact info, and reservation request form.'}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="site-shell">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
