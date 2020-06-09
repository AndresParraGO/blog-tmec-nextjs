import Head from 'next/head'
import App from '../_app.js'

import Header from '../components/header.js'
import Footer from '../components/footer.js'


export default function Blog() {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V" crossorigin="anonymous" />
        <title>Blog - TMEC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1>Blog</h1>
      </main>

      <Footer />


      {/* Styles Global */}
      <App />
    </div>
  )
}