import Document, { Html, Head, Main, NextScript } from 'next/document'
              
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <script data-ad-client="ca-pub-4169130686987019" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />        
        </body>
      </Html>
    )
  }
}