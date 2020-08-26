import Head from 'next/head'

import Top from '../components/top'
import Footer from '../components/footer'
import CardMe from '../components/card-me'
import CardPerson from '../components/card-person'
import Accessibility from '../components/accessibility/'
import Slider from '../components/slider/'

import { getAllPosts } from '../lib/api'

import './nosotros.css'


export default function Nosotros( {allPosts} ) {
  return (
    <div>
      <Head>
        <meta property="og:url" content="https://computo.now.sh/nosotros" />
        <meta property="og:site_name" content="TMEC" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@AndresParraGar4" />
        <meta property="twitter:creator" content="@AndresParraGar4" />
        <meta property="twitter:title" content="Sobre la Técnica de Cómputo de Colmabrija - TMEC" />
        <meta property="twitter:description" content="TMEC - sobre la tmec , técnica de mantenimiento de equipos de cómputo." />
        <meta property="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/images%2Fdia-de-la-mujer.jpg?alt=media&token=3f39fab5-ec8e-4b30-8d9a-9975308bfb5d" />
        
        <meta property="og:title" content="Sobre la Técnica de Cómputo de Colmabrija - TMEC" />
        <meta property="og:description" content="TMEC - sobre la tmec , técnica de mantenimiento de equipos de cómputo." />
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/images%2Fdia-de-la-mujer.jpg?alt=media&token=3f39fab5-ec8e-4b30-8d9a-9975308bfb5d" />

        <title>Nosotros - TMEC</title>
        <meta name="description" content="TMEC - sobre la tmec , técnica de mantenimiento de equipos de cómputo." /> 
        <meta name="keywords" content="tmec, colmabrija, compúto, tecnología, sena, instituto, fe y alegría, cúcuta, colombia, andres parra." />  

        <link rel="icon" href="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/images%2Ficon.png?alt=media&token=94753675-3700-40b4-9d77-a49531d24d4c" />
      </Head>

      <Top allPosts={allPosts} />
      <Accessibility />

      

      <main>
        <div className="container mt">
          <div className="we-content">
            <section>
              
              <article className="we__institution">
                <header>
                    <h3 className="we__institution__title">Sena</h3>
                    <p className="we__institution__description">EL SENA es un establecimiento público del orden Nacional y con autonomía administrativa, adscrito al Ministerio del Trabajo.</p>
                </header>

                <div className="we__institution__text">
                  <img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAHZltC.img?h=0&amp;w=720&amp;m=6&amp;q=60&amp;u=t&amp;o=f&amp;l=f" alt="Sena - TMEC" />
                  <a className="btn" href="http://www.sena.edu.co/es-co/Paginas/default.aspx" target="_blank">Ver página oficial</a>
                </div>
              </article>

              <article className="we__institution">
                <header>
                    <h3 className="we__institution__title">INSTITUCIÓN TÉCNICO PADRE MANUEL BRICEÑO JAUREGUI FE Y ALEGRÍA</h3>
                    <p className="we__institution__description">Centro educativo. "Formando hombres y mujeres en y para el mundo productivo , con paz , amor y justicia".</p>
                </header>
                <div className="we__institution__text">
                  <img src="https://colmabrija.edu.co/web/wp-content/uploads/2020/04/AniversarioWEB.jpg" alt="Sena - TMEC" />
                  <a className="btn" href="https://colmabrija.edu.co/web/" target="_blank">Ver página oficial</a>
                </div>
              </article>
            </section>

            <aside className="we__institution__aside">
              <h3>Grupo de trabajo</h3>
              <CardMe />
              <CardPerson name="Jairo Blanco" img="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/jairo.jpeg?alt=media&token=e517d29e-f7a0-4543-9b21-a8dda8c0d17d" />
              <CardPerson name="Cristian Quintero" img="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/cristian.jpg?alt=media&token=5dacbbb1-f2b7-4668-9727-cb87bc83c851" />
              <CardPerson name="Jose Tarazona" img="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/jose.jpeg?alt=media&token=4517e8a8-cf76-4936-bacb-89c9620626e6" />
            </aside>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt'
  ])

  return {
    props: { allPosts }
  }
}