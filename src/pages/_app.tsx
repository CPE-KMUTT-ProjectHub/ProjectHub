'use client'

import Loading from '@/components/Loading'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { Suspense } from 'react'
import '../app/globals.css'
import Navbar from '@/components/navbar/navbar'
import { useRouter } from 'next/router'
import { useSession } from "next-auth/react"

export default function App({ Component, pageProps }: AppProps) {
  const location = useRouter()

  return (
    <SessionProvider session={pageProps.session}>
    <Component {...pageProps} />
  </SessionProvider>
  )
}
