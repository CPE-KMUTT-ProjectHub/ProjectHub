'use client'

import './globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

const metadata: Metadata = {
  title: 'Project Hub | KMUTT',
  description: 'Explore new possibility',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider refetchOnWindowFocus={false}>{children}</SessionProvider>
      </body>
    </html>
  )
}
