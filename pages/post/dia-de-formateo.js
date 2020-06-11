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
        <meta property="twitter:title" content="Día de formateo y limpieza de los portatiles de clase - TMEC" />
        <meta property="twitter:description" content="TMEC - Es este día nos encargamos de formatear equipos, instalando su respectivo sistema operativo y los programas básicos del día a día. Cómputo Colmabrija." />
        <meta property="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/images%2Fproteger-memoria-banner.jpg?alt=media&token=ea3ac750-2e65-48c4-be9b-9250b97bb51c" />

        <meta property="og:title" content="Día de formateo y limpieza de los portatiles de clase - TMEC" />
        <meta property="og:description" content="TMEC - Es este día nos encargamos de formatear equipos, instalando su respectivo sistema operativo y los programas básicos del día a día. Cómputo Colmabrija." />
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/images%2Fproteger-memoria-banner.jpg?alt=media&token=ea3ac750-2e65-48c4-be9b-9250b97bb51c" />

        <title>Día de formateo y limpieza de los portatiles de clase - TMEC</title>
        <link rel="icon" href="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/images%2Ficon.png?alt=media&token=94753675-3700-40b4-9d77-a49531d24d4c" />
      </Head>

      <Header />
      <Menu />

      <main className="container">
        <section className="page-post">
          <h2 className="h1 mb">Día de formateo y limpieza de los portatiles de clase - TMEC</h2>
          <h3>Es este día nos encargamos de formatear equipos, instalando su respectivo sistema operativo y los programas básicos del día a día.</h3>

          <img src="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/images%2Fdia-de-formateo-IMG-1.jpg?alt=media&token=b02f48fa-a158-4b71-9c92-ecfb520bde0a" alt="Estudiantes de la técnica de cómputo - TMEC"/>

          <p>Trabajamos todos en equipo ya que debíamos terminar cada uno con su equipo, nos ayudamos entre otros para aprender.</p>

          <h4 className="h3">¿QUÉ HICIMOS?</h4>

          <ul>
            <li>Formateamos los equipo atrevés de memorias USB con el sistema operativo en modo arranque.</li>
            <li>Instalamos los programas básicos, como Microsoft Office , Winrar por nombrar algunos.</li>
            <li>En una ocación reparamos un portatil cambiando su disco duro.</li>
          </ul>

          <h5 className="h3">Imágenes</h5>
          <img src="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/images%2Fdia-de-formateo-IMG-2.jpg?alt=media&token=f0e44512-a9f0-478a-8412-56105fa875c2" alt="Alumnos de la técnica de cómpúto de colmabrija - TMEC"/>
          <img src="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/images%2Fdia-de-formateo-IMG-7.jpg?alt=media&token=1e2cfc6b-075a-4e73-a2aa-0da7898c0718" alt="Alumno instalando microsoft office - TMEC"/>
          <img src="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/images%2Fdia-de-formateo-IMG-5.jpg?alt=media&token=54ae02f3-eba3-4206-bfde-2c36369e27a9" alt="Reparando laptop, cambio de disco duro - TMEC"/>

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