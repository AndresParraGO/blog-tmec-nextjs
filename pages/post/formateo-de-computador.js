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
        <meta property="twitter:title" content="AFormateo de un computador, instalandole windows 7 - TMEC" />
        <meta property="twitter:description" content="TMEC - Aquí te mostraremos como instalamos Windows 7 en una laptop, formateando el equipo con un dispositivo USB. Cómputo Colmabrija." />
        <meta property="twitter:image" content="/images/formateo-banner.jpg" />

        <meta property="og:title" content="Formateo de un computador, instalandole windows 7 - TMEC" />
        <meta property="og:description" content="TMEC - Aquí te mostraremos como instalamos Windows 7 en una laptop, formateando el equipo con un dispositivo USB. Cómputo Colmabrija." />
        <meta property="og:image" content="/images/formateo-banner.jpg" />

        <title>Formateo de un computador, instalandole windows 7 - TMEC</title>
        <meta name="description" content="TMEC - Aquí te mostraremos como instalamos Windows 7 en una laptop, formateando el equipo con un dispositivo USB. Cómputo Colmabrija." /> 
        <meta name="keywords" content="tmec, colmabrija, compúto, tecnología, formateo, instalación, windows, windows 7, computadores, laptops, usb, vimeo." />

        <link rel="icon" href="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/images%2Ficon.png?alt=media&token=94753675-3700-40b4-9d77-a49531d24d4c" />
      </Head>

      <Header />
      <Menu />
      <Share 
        facebook="https://www.facebook.com/sharer/sharer.php?u=https://computo.now.sh/post/formateo-de-computador" 
        twitter="https://twitter.com/share?url=https://computo.now.sh/post/formateo-de-computador" 
        linkedin="https://www.linkedin.com/shareArticle?mini=true&url=https://computo.now.sh/post/formateo-de-computador&title=&summary=Visita el siguiente artículo de tmec https://computo.now.sh/post/formateo-de-computador&source="
        web="formateo-de-computador"
      />


      <main className="container">
        <section className="page-post">
          <h2 className="h1 mb">Formateo de un computador, instalandole windows 7</h2>
          <h3>Aquí te mostraremos como instalamos Windows 7 en una laptop, formateando el equipo con un dispositivo USB.</h3>


          <iframe src="https://player.vimeo.com/video/429650476" width="640" height="564" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
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