import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Playfair_Display, Inter, Inter_Tight } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CustomCursor } from '@/components/CustomCursor'
import { ConciergeBar } from '@/components/ConciergeBar'

import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['200'],
  variable: '--font-inter-tight',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vertex Exterior Design | Luxury Landscape & Architectural Design',
  description:
    'Bespoke exterior design, luxury landscaping, modern facades, and premium outdoor living spaces in Dubai.',
  generator: 'Next.js',
}

export const viewport: Viewport = {
  themeColor: '#4A6B53',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${playfair.variable} ${inter.variable} ${interTight.variable} bg-background`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <CustomCursor />
        <ConciergeBar />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
