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
        <meta property="twitter:title" content="Cómo proteger nuestras memorias de los virus - TMEC" />
        <meta property="twitter:description" content="TMEC - Como proteger nuestras memorias sin duda es importante. Veremos con unos sencillo pasos como protegerla de los virus. Cómputo Colmabrija." />
        <meta property="twitter:image" content="/images/proteger-memoria-banner.jpg" />

        <meta property="og:title" content="Cómo proteger nuestras memorias de los virus - TMEC" />
        <meta property="og:description" content="TMEC - Como proteger nuestras memorias sin duda es importante. Veremos con unos sencillo pasos como protegerla de los virus. Cómputo Colmabrija." />
        <meta property="og:image" content="/images/proteger-memoria-banner.jpg" />

        <title>Cómo proteger nuestras memorias de los virus - TMEC</title>
        <meta name="description" content="TMEC - Como proteger nuestras memorias sin duda es importante. Veremos con unos sencillo pasos como protegerla de los virus. Cómputo Colmabrija." /> 
        <meta name="keywords" content="tmec, colmabrija, compúto, tecnología, protección, memorias, malwares, virus, windows, pc, laptops." />  

        <link rel="icon" href="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/images%2Ficon.png?alt=media&token=94753675-3700-40b4-9d77-a49531d24d4c" />
      </Head>

      <Header />
      <Menu />
      <Share 
        facebook="https://www.facebook.com/sharer/sharer.php?u=https://computo.now.sh/post/proteger-memoria-de-virus" 
        twitter="https://twitter.com/share?url=https://computo.now.sh/post/proteger-memoria-de-virus" 
        linkedin="https://www.linkedin.com/shareArticle?mini=true&url=https://computo.now.sh/post/proteger-memoria-de-virus&title=&summary=Visita el siguiente artículo de tmec https://computo.now.sh/post/proteger-memoria-de-virus&source="
        web="proteger-memoria-de-virus"
      />


      <main className="container">
        <section className="page-post">
          <h2 className="h1 mb">Cómo proteger nuestras memorias de los virus</h2>
          <h3>Como proteger nuestras memorias sin duda es importante. Veremos con pasos sencillos como protegerla de los virus.</h3>

          <img src="/images/proteger-memoria-banner.jpg" alt="Memorias usb - TMEC"/>


          <p>Lo primero obviamente es tener una memoria. La introducimos en un computador con Windows sin este sistema operativo no te funcionara.</p>
          <img src="/images/proteger-usb-paso-1.jpg" alt="Memoria usb isertada en una laptop - TMEC"/>

          <p>Una vez insertada la memoria, nos dirigimos al explorador de archivos de Windows. A la izquierda sale el nombre de la memoria le damos click derecho y en formatear.</p>
          <img src="/images/proteger-usb-paso-2.jpg" alt="Formatear memoria usb - TMEC"/>

          <p>Sé mostrar esta ventana le damos donde dice Sistema de archivos seleccionamos NTFS.Y en etiqueta de volumen le damos cualquier nombre. Y al final damos en Inicia.</p>
          <img src="/images/proteger-usb-paso-3.jpg" alt="Configuración del formateo - TMEC"></img>

          <p>Una vez iniciado le damos click en aceptar. Esto normalmente no tarda mucho.</p>
          <img src="/images/proteger-usb-paso-4.jpg" alt="Advertencia del formateo - TMEC"/>

          <p>Una vez terminado el proceso de formateo, vamos al explorador de archivos y entramos a la memoria. Dentro de la memoria creamos una carpeta con el nombre HOME.</p>
          <img src="/images/proteger-usb-paso-5.jpg" alt="Seleccionar la carpeta home - TMEC"/>

          <p>En la parte izquierda del explorador de archivos le damos click derecho donde está la memoria. Y damos click en propiedades.</p>
          <img src="/images/proteger-usb-paso-6.jpg" alt="Propiedades de la memoria usb - TMEC"/>

          <p>Se mostrara esta ventana le daremos click en las pestañas de arriba en Seguridad y debajo le daremos click en Editar.</p>
          <img src="/images/proteger-usb-paso-7.jpg" alt="Configuracón de seguridad de la memoria usb - TMEC"/>

          <p>Seleccionamos la casilla Control total le damos en Denegar.Y a la casilla lectura le damos Permitir.Y finalmente en aplicar y luego aceptar.</p>
          <img src="/images/proteger-usb-paso-8.jpg" alt="Permisos de la memoria usb - TMEC"/>

          <p>Vamos a la memoria, después a la carpeta que creamos llamada HOME le damos click derecho y propiedades. Hacemos el mismo procedimiento anterior lo único que cambiaremos es dar en Control total seleccionamos Permitir. Damos aplicar y luego en aceptar.</p>
          <img src="/images/proteger-usb-paso-9.jpg" alt="Permitir todos los accesos de la memoria - TMEC - TMEC"/>

          <p>Y listo ya tenemos la memoria segura, todos los archivo y documentos hay que guardarlos en la carpeta HOME. Si se intentan pasar archivos en la raíz de la memoria no lo dejara mostrara un mensaje de espacio insuficiente.</p>

        </section>

        <PostsRecomendados />
      </main>

      <Footer />


      {/* Styles Global */}
      <App />
    </div>
  )
}