'use client'

import Loading from '@/components/Loading'
import type { AppProps } from 'next/app'
import { Suspense } from 'react'
import '../app/globals.css'
import Navbar from '@/components/Navbar'
import { useRouter } from 'next/router'
import AuthProvider from '@/components/AuthProvider'
import { FORBIDDEN_PAGE, SIGN_IN_PAGE } from '@/constants/route'
import dynamic from 'next/dynamic'

// Lazy loading : will show loading before render the page (kinda like caching)
const OrgCheck = dynamic(() => import('@/components/OrgCheck'))

export default function App({ Component, pageProps }: AppProps) {
  const location = useRouter()

  const navbarRouteFilter = () => {
    switch (location.pathname) {
      case SIGN_IN_PAGE:
        return

      case FORBIDDEN_PAGE:
        return

      default:
        return <Navbar />
    }
  }

  return (
    <AuthProvider>
      <Suspense fallback={<Loading />}>
        {navbarRouteFilter()}
        <OrgCheck element={<Component {...pageProps} />} />
      </Suspense>
    </AuthProvider>
  )
}
