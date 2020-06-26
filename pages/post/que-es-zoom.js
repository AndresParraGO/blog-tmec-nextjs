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
        <meta property="twitter:title" content="¿Qué es ZOOM y como instalarlo? - TMEC" />
        <meta property="twitter:description" content="TMEC - En este pequeño post te explicaremos que es, para que sirve y como usarlo de la manera más sencilla posible. Cómputo Colmabrija." />
        <meta property="twitter:image" content="/images/zoom-banner.jpg" />
        
        <meta property="og:title" content="¿Qué es ZOOM y como instalarlo? - TMEC" />
        <meta property="og:description" content="TMEC - En este pequeño post te explicaremos que es zoom, para que sirve y como usarlo de la manera más sencilla posible. Cómputo Colmabrija." />
        <meta property="og:image" content="/images/zoom-banner.jpg" />

        <title>¿Qué es ZOOM y como instalarlo? - TMEC</title>
        <meta name="description" content="TMEC - En este pequeño post te explicaremos que es zoom, para que sirve y como usarlo de la manera más sencilla posible. Cómputo Colmabrija" /> 
        <meta name="keywords" content="tmec, colmabrija, compúto, tecnología, zoom, instalación, windows, reuniones." />  

        <link rel="icon" href="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/images%2Ficon.png?alt=media&token=94753675-3700-40b4-9d77-a49531d24d4c" />
      </Head>

      <Header />
      <Menu />
      <Share 
        facebook="https://www.facebook.com/sharer/sharer.php?u=https://computo.now.sh/post/que-es-zoom" 
        twitter="https://twitter.com/share?url=https://computo.now.sh/post/que-es-zoom" 
        linkedin="https://www.linkedin.com/shareArticle?mini=true&url=https://computo.now.sh/post/que-es-zoom&title=&summary=Visita el siguiente artículo de tmec https://computo.now.sh/post/que-es-zoom&source="
        web="que-es-zoom"
      />


      <main className="container">
        <section className="page-post">
          <h2 className="h1 mb">¿Qué es ZOOM y como instalarlo? - TMEC</h2>
          <h3 className="mb">En este pequeño post te explicaremos que es, para que sirve y como usarlo de la manera más sencilla posible.</h3>
          <img src="/images/zoom-banner.jpg" title="Banner de ZOOM" alt="Zoom - TMEC" />


          <h4 className="h3">¿Qué es zoom?</h4>
          <p className="mb">Zoom es una aplicación para hacer reuniones virtuales. Esta aplicación se puede utilizar en teléfonos móviles y en computadores.</p>
        
          <h4 className="h3">¿Por qué usar zoom?</h4>
          <p className="mb">Puede alcanzar hasta 1000 usuarios con video y 10000 usuarios de espectadores, es fácil de usar.</p>

          <h4 className="mb h3">¿Cómo descargamos Zoom?</h4>

          <h5 className="h4">Movil</h5>
          <p>Para Mobile debemos ingresar a nuestra tienda de aplicaciones y buscar zoom. Una vez seleccionada la App debemos dar clic en instalar.</p>

          <h5 className="h4">Computador</h5>
          <p>Para computador deber ingresar al siguiente sitio web. <a href="https://zoom.us/download" target="_blank">https://zoom.us/download</a> Damos clic en descargar y esperamos que termine.</p>
          <figure className="mb">
            <img src="/images/zoom1.png" title="Descarga de ZOOM" alt="Descargar Zoom - TMEC" />
          </figure>


          <p>Cuando termine la descargar iniciamos el instalador. Si sale una alerta como esta, damos en ejecutar</p>
          <figure className="mb">
            <img src="/images/zoom2.png" alt="Ejecutamos el instalador de Zoom - TMEC" />
          </figure>


          <p>Una vez terminada la instalación saldrá esta ventana, damos clic en Ingresar para entrar con una cuenta.</p>
          <figure className="mb">
            <img src="/images/zoom3.png" alt="Ingresamos a de Zoom - TMEC" />
          </figure>


          <p>Ingresamos con nuestra cuenta de Google o con Facebook</p>
          <figure className="mb">
            <img src="/images/zoom4.png" alt="Ingresamos con cuenta de google o facebook a de Zoom - TMEC" />
          </figure>


          <p className="mb">Y listo, ya tenemos zoom en nuestra pc, solo es empezar una reunión o ingresar a una</p>


          <h5 className="h2">Video de como ingresar a una reunión atreves de su link.</h5>
          <figure>
            <img src="/images/zoom-video-reunion.gif" title="Video explicativo de como entrar a una reuinión en ZOOM" alt="Como ingresar a una reunion en Zoom - TMEC" />
          </figure>

        </section>
        
        <PostsRecomendados />
      </main>

      <Footer />


      {/* Styles Global */}
      <App />
      <style jsx>{`
        .page-post img {
          margin: 1em 0;
        }
      `}</style>
    </div>
  )
}