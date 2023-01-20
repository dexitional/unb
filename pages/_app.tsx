import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Analytics from 'analytics'
//@ts-ignore
import googleAnalytics from '@analytics/google-analytics'


function MyApp({ Component, pageProps }: AppProps) {
  
  const analytics = Analytics({
    app: 'uccnoticeboaed.info',
    plugins: [
      googleAnalytics({
        measurementIds: ['G-8GYY0T30FG']
      })
    ]
  })

  /* Track a page view */
  analytics.page()
  
  return <Component {...pageProps} />
}

export default MyApp
