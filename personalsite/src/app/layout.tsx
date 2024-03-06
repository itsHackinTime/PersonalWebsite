import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.sass'
import { NavBar } from './_components/NavBar'

import Template from './template'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ian Weinholtz',
  description: 'A personal website to showcase my web development product',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header>
        <nav>
        <NavBar />
        </nav>
      </header>
      <main>
        {children}
      </main>      
      </body>
    </html>
  )
}
