import Head from 'next/head'
import App from '../_app.js'

import Header from '../components/header.js'
import Footer from '../components/footer.js'


export default function Home() {
  return (
    <div>
      <Head>
        <title>TMEC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />

      <main>
       <h1>Inicio</h1>
      </main>

      <Footer />


      {/* Styles Global */}
      <App />
    </div>
  )
}
