import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const quickSand = Quicksand({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bienes raíces',
  description: 'Administrador de propedades',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      
      <body className={quickSand.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
