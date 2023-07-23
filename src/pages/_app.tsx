'use client'

import Loading from '@/components/Loading'
import type { AppProps } from 'next/app'
import { Suspense } from 'react'
import '../app/globals.css'
import Navbar from '@/components/navbar/navbar'
import { useRouter } from 'next/router'
import AuthProvider from '@/components/AuthProvider/authprovider'
import OrgCheck from '@/components/OrgCheck'

export default function App({ Component, pageProps }: AppProps) {
  const location = useRouter()

  const navbarRouteFilter = () => {
    switch (location.pathname) {
      case '/auth/sign-in':
        return

      case '/403':
        return

      default:
        return <Navbar />
    }
  }

  return (
    <AuthProvider>
      <Suspense fallback={<Loading />}>
        <OrgCheck>
          {navbarRouteFilter()}
          <Component {...pageProps} />
        </OrgCheck>
      </Suspense>
    </AuthProvider>
  )
}
