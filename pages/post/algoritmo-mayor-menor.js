import Head from 'next/head'
import App from '../../_app.js'

import Header from '../../components/header.js'
import Menu from '../../components/menu.js'
import Footer from '../../components/footer.js'
import PostsRecomendados from '../../components/posts-recomendados.js'

import Share from '../../components/share.js'


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
        <meta property="twitter:image" content="/images/que-es-un-algoritmo-featured.png" />
        
        <meta property="og:title" content="Algoritmo de número mayor y menor - TMEC" />
        <meta property="og:description" content="TMEC - Algoritmo para saber cual es el número mayor y el número menor - Diagramas de Flujo. Cómputo Colmabrija." />
        <meta property="og:image" content="/images/que-es-un-algoritmo-featured.png" />

        <title>Algoritmo de mayor y menor - TMEC</title>
        <meta name="description" content="TMEC - Algoritmo para saber cual es el número mayor y el número menor - Diagramas de Flujo. Cómputo Colmabrija." /> 
        <meta name="keywords" content="tmec, colmabrija, compúto, tecnología, algoritmos, programación, software, diagramas, diagramas de flujo, vimeo." /> 

        <link rel="icon" href="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/images%2Ficon.png?alt=media&token=94753675-3700-40b4-9d77-a49531d24d4c" />
        <script data-ad-client="ca-pub-2561679341949863" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>

      <Header />
      <Menu />
      <Share 
        facebook="https://www.facebook.com/sharer/sharer.php?u=https://computo.now.sh/post/algoritmo-mayor-menor" 
        twitter="https://twitter.com/share?url=https://computo.now.sh/post/algoritmo-mayor-menor" 
        linkedin="https://www.linkedin.com/shareArticle?mini=true&url=https://computo.now.sh/post/algoritmo-mayor-menor&title=&summary=Visita el siguiente artículo de tmec https://computo.now.sh/post/algoritmo-mayor-menor&source="
        web="algoritmo-mayor-menor"
      />


      <main className="container">
        <section className="page-post">
          <h2 className="h1 mb">Algoritmo para saber cual es el número mayor y el número menor - Diagramas de Flujo</h2>


          <iframe src="https://player.vimeo.com/video/420842065" width="640" height="564" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
        </section>
        
        <PostsRecomendados />
      </main>

      <Footer />


      {/* Styles Global */}
      <App />

      <style jsx>{`
        .page-post iframe {
          width: 100%;
        }
      `}</style>
    </div>
  )
}