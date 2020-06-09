import Head from 'next/head'
import App from '../_app.js'


import Header from '../components/header.js'
import Footer from '../components/footer.js'
import LastsPosts from '../components/lasts-posts.js'


export default function Home() {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V" crossorigin="anonymous" />
        <title>TMEC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />

      <LastsPosts />

      <main>
       <h1>Inicio</h1>
      </main>

      <Footer />


      {/* Styles Global */}
      <App />
    </div>
  )
}