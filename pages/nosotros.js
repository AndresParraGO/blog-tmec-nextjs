import Head from 'next/head'
import App from '../_app.js'

import Top from '../components/top.js'
import Footer from '../components/footer.js'
import CardMe from '../components/card-me.js'


export default function Nosotros() {
  return (
    <div>
      <Head>
        <meta property="og:url" content="https://computo.now.sh/" />
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

      <Top />

      <main>
        <div className="container mt">
          <div className="we-content">
            <div>
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
            </div>

            <aside className="we__institution__aside">
              <h3>Desarrollador del sitio web</h3>
              <CardMe />
            </aside>
          </div>
        </div>

      </main>

      <Footer />


      {/* Styles Global */}
      <App />

      <style jsx>{`
      .we-content {
        display: grid;
      }

      .we__institution {
        margin-bottom: 3em;

      }

      .we__institution .btn {
        margin-top: 1em;
        width: 100%;
      }

      .we__institution__title {
        font-size: 2em;
        text-transform: uppercase;
      }



      .we__institution__text img {
        width: 100%;
        margin-top: 1em;
      }

      .card__me__text {
        margin-top: 1em;
      }

      .card__me__text h4 {
        font-size: 1.5em;
      }


       
      .we__institution__aside h3 {
        font-size: 1.5em;
        margin-bottom: 1em; 
      }

        
      .about {
        margin-top: 3em;

        background-color: var(--bgBody);
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        position: relative;

        box-shadow: 0 0 10px 0 var(--borderColor);
        border: 1px solid var(--borderColor);
        border-radius: 5px;
      }

      .about .about__img {
        width: 100%;
        display: block;
      }

      .about__bg {
        position: absolute;
      }



      .about__img {
        border-radius: 5px 0 0 5px;
      }

      .about__text {
        padding: 1em;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        position: relative;
        z-index: 20;

        overflow: hidden;
      }

      .about__title {
        font-size: 2em;
        padding-bottom: 0.5em;
      }

      .about__btn {
        height: 40px;
        padding: 0 1em;
        background-color: var(--firstColor);
        color: var(--textColorAlt);
        line-height: 40px;
        width: 200px;
        margin-top: 1em;
      }


     .about__btn:hover {
        background-color: var(--firstColorAlt);
      }


      .about__text__img {
        display: none;
      }


      @media screen and (max-width: 650px) {
        
        .about {
          grid-template-columns: repeat(1, 1fr); 
        }

        .about__text {
          padding: 1em 0;
        }


      }
  

      @media screen and (min-width: 960px) {      

        .we-content {
          grid-template-columns: 60% 30%;
          grid-column-gap:4em;
        }
       
        .about__title {
          margin-top: -3em;
        }

        .about__text__img {
          display: block;
          width: 100px;
          position: absolute;
          z-index: 10;

          bottom: 30px;
        }

      }


      `}</style>
    </div>
  )
}