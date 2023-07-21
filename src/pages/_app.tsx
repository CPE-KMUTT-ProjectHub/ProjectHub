'use client'

import Loading from '@/components/Loading'
import type { AppProps } from 'next/app'
import { Suspense } from 'react'
import '../app/globals.css'
import Navbar from '@/components/navbar/navbar'
import { useRouter } from 'next/router'
import AuthProvider from '@/components/AuthProvider'

export default function App({ Component, pageProps }: AppProps) {
  const location = useRouter()

  const navbarRouteFilter = () => {
    switch (location.pathname) {
      case '/auth/sign-in':
        return

      default:
        return <Navbar />
    }
  }

  return (
    <AuthProvider session={pageProps.session}>
      <Suspense fallback={<Loading />}>
        {navbarRouteFilter()}
        <Component {...pageProps} />
      </Suspense>
    </AuthProvider>
  )
}
