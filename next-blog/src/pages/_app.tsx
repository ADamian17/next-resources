import Head from 'next/head'
import MainLayout from '@/layouts/main-layout'
import type { AppProps } from 'next/app'

import '@/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Component {...pageProps} />
    </MainLayout>
  )
}
