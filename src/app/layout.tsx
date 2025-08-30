import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
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
