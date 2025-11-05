import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Café Coco - Artisan Coffee & Fresh Pastries',
  description: 'Your neighborhood coffee destination in Long Island City. Serving exceptional coffee, house-made pastries, fresh tartines, and nourishing bowls. Order online through Toast POS.',
  keywords: 'coffee shop, espresso, pastries, tartines, acai bowls, breakfast, downtown district',
  authors: [{ name: 'Café Coco' }],
  openGraph: {
    title: 'Café Coco - Artisan Coffee & Fresh Pastries',
    description: 'Your neighborhood coffee destination serving exceptional coffee and house-made treats.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <meta name="apple-mobile-web-app-title" content="Café Coco" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z8V0K1DXG5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z8V0K1DXG5');
          `}
        </Script>
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
