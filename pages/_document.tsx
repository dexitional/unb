import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script'
function MyDocument() {
  return (
    <Html>
      <Head>
         <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@100;200;400;700;800&display=swap" rel="stylesheet"/>
         <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;700&display=swap" rel="stylesheet" />
         <link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@100;200;400;500;600;700;800&display=swap" rel="stylesheet" />
         <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;400;500;600;700;800&display=swap" rel="stylesheet" />
         <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;400;500;600;700;800&display=swap" rel="stylesheet" />
         <Script async src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"></Script>
         <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4676341155028169" crossOrigin={`anonymous`} ></Script>
      </Head>
     
      <body className="font-inter">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;