import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { MobileNav } from '@/components/mobile-nav'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'FutMatch',
  description: 'Plataforma de agendamento esportivo com interface genérica e funcionamento básico.',
}

export const viewport: Viewport = {
  themeColor: '#1a3a2a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="pb-16 md:pb-0">
          {children}
        </div>
        <MobileNav />
      </body>
    </html>
  )
}
