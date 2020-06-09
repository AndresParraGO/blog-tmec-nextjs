import Head from 'next/head'
import App from './_app.js'

import Header from '../components/header.js'
import Footer from '../components/footer.js'


export default function Nosotros() {
  return (
    <div>
      <Head>
        <title>Nosotros - TMEC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1>Nosotros</h1>
      </main>

      <Footer />


      {/* Styles Global */}
      <App />
    </div>
  )
}
