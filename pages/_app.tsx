import '../styles/globals.css'
import type { AppProps } from 'next/app'
import OneSignal from 'react-onesignal';
import Analytics from 'analytics'
//@ts-ignore
import googleAnalytics from '@analytics/google-analytics'
import { useEffect } from 'react';
import Router from 'next/router';
import Script from 'next/script'
import NProgress from 'nprogress'; 
import 'nprogress/nprogress.css'; 

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());


function MyApp({ Component, pageProps }: AppProps) {
  // Google Analytics Integration
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

  useEffect(() => {
    OneSignal.init({ appId: '2403f9ce-30d0-4d3e-95e3-748cb571bce3' });
  }, []);

  <Script 
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4676341155028169`}
        crossOrigin="anonymous"
        id="Adsense-id"
        async={true}
        strategy="beforeInteractive"
        onError={ (e) => { console.error('Adsense Script failed to load', e) }}
      />

  return <Component {...pageProps} />
}

export default MyApp
