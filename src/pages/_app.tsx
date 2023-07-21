'use client'

import Loading from '@/components/Loading'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { Suspense } from 'react'
import '../app/globals.css'
import Navbar from '@/components/navbar/navbar'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const location = useRouter()

  const renderNavbar = () => {
    switch (location.pathname) {
      case '/auth/sign-in':
        return
      default:
        return <Navbar />
    }
  }

  return (
    <Suspense fallback={<Loading />}>
      <SessionProvider session={pageProps.session}>
        {renderNavbar()}
        <Component {...pageProps} />
      </SessionProvider>
    </Suspense>
  )
}
