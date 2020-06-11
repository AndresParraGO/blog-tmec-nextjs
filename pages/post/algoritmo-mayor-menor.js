import Head from 'next/head'
import App from '../../_app.js'

import Header from '../../components/header.js'
import Menu from '../../components/menu.js'
import Footer from '../../components/footer.js'
import PostsRecomendados from '../../components/posts-recomendados.js'


export default function Nosotros() {
  return (
    <div>
      <Head>
        <meta property="og:url" content="https://computo.now.sh/" />
        <meta property="og:site_name" content="TMEC" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@AndresParraGar4" />
        <meta property="twitter:creator" content="@AndresParraGar4" />
        <meta property="twitter:title" content="Algoritmo de número mayor y menor - TMEC" />
        <meta property="twitter:description" content="TMEC - Algoritmo para saber cual es el número mayor y el número menor - Diagramas de Flujo. Cómputo Colmabrija." />
        <meta property="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/images%2Fque-es-un-algoritmo-featured.png?alt=media&token=e1f6b025-de63-4829-92f5-908e0769bd8c" />
        
        <meta property="og:title" content="Algoritmo de número mayor y menor - TMEC" />
        <meta property="og:description" content="TMEC - Algoritmo para saber cual es el número mayor y el número menor - Diagramas de Flujo. Cómputo Colmabrija." />
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/images%2Fque-es-un-algoritmo-featured.png?alt=media&token=e1f6b025-de63-4829-92f5-908e0769bd8c" />

        <title>Algoritmo de mayor y menor - TMEC</title>
        <link rel="icon" href="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/images%2Ficon.png?alt=media&token=94753675-3700-40b4-9d77-a49531d24d4c" />
      </Head>

      <Header />
      <Menu />

      <main className="container">
        <section className="page-post">
          <h2 className="h1 mb">Algoritmo para saber cual es el número mayor y el número menor - Diagramas de Flujo</h2>

          <video src="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/videos%2FAlgoritmo-mayor-menor.mp4?alt=media&token=469595b7-65f2-49af-b72d-d79be130fd8a" controls alt="Algoritmo de mayor y menor - TMEC con diagrama de flujo"></video>
        </section>
        
        <PostsRecomendados />
      </main>

      <Footer />


      {/* Styles Global */}
      <App />
    </div>
  )
}