import '../styles/globals.css'
import type { AppProps } from 'next/app'
//import OneSignal from 'react-onesignal';
import Analytics from 'analytics'
//@ts-ignore
import googleAnalytics from '@analytics/google-analytics'
import { useEffect } from 'react';


function MyApp({ Component, pageProps }: AppProps) {
  // One-Signal Integration
 // OneSignal.init({ appId: '2403f9ce-30d0-4d3e-95e3-748cb571bce3' });
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
    if (typeof window !== undefined) {
      // @ts-ignore
      window.OneSignal = window.OneSignal || [];
      OneSignal.push(function () {
        OneSignal.init({
          appId: "2403f9ce-30d0-4d3e-95e3-748cb571bce3",
          notifyButton: {
            enable: true,
          },
        });
      });
    }
    return () => {
      // @ts-ignore
      window.OneSignal = undefined;
    };
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
