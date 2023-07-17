'use client'

import Loading from '@/components/Loading'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { Suspense } from 'react'
import '../app/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback={<Loading />}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Suspense>
  )
}
