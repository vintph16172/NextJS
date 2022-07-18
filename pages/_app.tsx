import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { AppPropsWithLayout } from '@/models/layout'
import LayoutWebsite from '@/layouts'
import { SWRConfig } from 'swr'
import instance from '@/api/instance'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWrapper = Component.Layout ?? LayoutWebsite
  return (
    <LayoutWrapper>
      <SWRConfig
        value={{
          fetcher: async (url) => instance.get(url),
      }}
      >
        <Component {...pageProps} />
      </SWRConfig>
      
    </LayoutWrapper>
  )
}

export default MyApp
