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
        <meta property="twitter:title" content="Día de formateo y limpieza de los portatiles de clase - TMEC" />
        <meta property="twitter:description" content="TMEC - Es este día nos encargamos de formatear equipos, instalando su respectivo sistema operativo y los programas básicos del día a día. Cómputo Colmabrija." />
        <meta property="twitter:image" content="/images/dia-de-formateo-IMG-1.jpg" />

        <meta property="og:title" content="Día de formateo y limpieza de los portatiles de clase - TMEC" />
        <meta property="og:description" content="TMEC - Es este día nos encargamos de formatear equipos, instalando su respectivo sistema operativo y los programas básicos del día a día. Cómputo Colmabrija." />
        <meta property="og:image" content="/images/dia-de-formateo-IMG-1.jpg" />

        <title>Día de formateo y limpieza de los portatiles de clase - TMEC</title>
        <meta name="description" content="TMEC - Es este día nos encargamos de formatear equipos, instalando su respectivo sistema operativo y los programas básicos del día a día. Cómputo Colmabrija" /> 
        <meta name="keywords" content="tmec, colmabrija, compúto, tecnología, formateo, comunidad, estudiantes, colegio, técnica, programas, software." /> 

        <link rel="icon" href="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/images%2Ficon.png?alt=media&token=94753675-3700-40b4-9d77-a49531d24d4c" />
        <script data-ad-client="ca-pub-2561679341949863" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>

      <Header />
      <Menu />

      <Share 
        facebook="https://www.facebook.com/sharer/sharer.php?u=https://computo.now.sh/post/dia-de-formateo" 
        twitter="https://twitter.com/share?url=https://computo.now.sh/post/dia-de-formateo" 
        linkedin="https://www.linkedin.com/shareArticle?mini=true&url=https://computo.now.sh/post/dia-de-formateo&title=&summary=Visita el siguiente artículo de tmec https://computo.now.sh/post/dia-de-formateo&source="
        web="dia-de-formateo"
      />

      <main className="container">
        <section className="page-post">
          <h2 className="h1 mb">Día de formateo y limpieza de los portatiles de clase - TMEC</h2>
          <h3>Es este día nos encargamos de formatear equipos, instalando su respectivo sistema operativo y los programas básicos del día a día.</h3>

          <img src="/images/dia-de-formateo-IMG-1.jpg" alt="Estudiantes de la técnica de cómputo - TMEC"/>

          <p>Trabajamos todos en equipo ya que debíamos terminar cada uno con su equipo, nos ayudamos entre otros para aprender.</p>

          <h4 className="h3">¿QUÉ HICIMOS?</h4>

          <ul>
            <li>Formateamos los equipo atrevés de memorias USB con el sistema operativo en modo arranque.</li>
            <li>Instalamos los programas básicos, como Microsoft Office , Winrar por nombrar algunos.</li>
            <li>En una ocación reparamos un portatil cambiando su disco duro.</li>
          </ul>

          <h5 className="h3">Imágenes</h5>
          <img src="/images/dia-de-formateo-IMG-2.jpg" alt="Alumnos de la técnica de cómpúto de colmabrija - TMEC"/>
          <img src="/images/dia-de-formateo-IMG-7.jpg" alt="Alumno instalando microsoft office - TMEC"/>
          <img src="/images/dia-de-formateo-IMG-5.jpg" alt="Reparando laptop, cambio de disco duro - TMEC"/>

        </section>

        <PostsRecomendados />
      </main>

      <Footer />


      {/* Styles Global */}
      <App />
      <style jsx>{`

        .page-post ul {
          margin: 1em 0;
        }

        .page-post ul li {
          margin-bottom: .5em;
        }

      `}</style>
    </div>
  )
}