import Head from 'next/head'
import App from '../_app.js'


import Header from '../components/header.js'
import Footer from '../components/footer.js'
import LastsPosts from '../components/lasts-posts.js'
import Sentence from  '../components/frase.js'


export default function Home() {
  return (
    <div>
      <Head>
        <title>TMEC</title>
        <link rel="icon" href="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/images%2Ficon.png?alt=media&token=94753675-3700-40b4-9d77-a49531d24d4c" />
      </Head>
      
      <Header />
      <LastsPosts />
      <Sentence />


      <main>
       <h1>Inicio</h1>
      </main>

      <Footer />


      {/* Styles Global */}
      <App />
    </div>
  )
}