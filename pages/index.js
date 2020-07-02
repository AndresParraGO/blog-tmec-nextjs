import Head from 'next/head'
import App from '../_app.js'


import Top from '../components/top.js'
import Footer from '../components/footer.js'
import LastsPosts from '../components/lasts-posts.js'
import Sentence from  '../components/frase.js'


import Recomendados from '../components/recomendados.js'


export default function Home() {
  return (
    <div>
      <Head>
        <meta property="og:url" content="https://computo.now.sh/" />      
        <meta property="og:site_name" content="TMEC" />    
        <meta property="twitter:card" content="summary_large_image" />     
        <meta property="twitter:site" content="@AndresParraGar4" />       
        <meta property="twitter:creator" content="@AndresParraGar4" />      
        <meta property="twitter:title" content="Técnica de Cómputo de Colmabrija - TMEC" />        
        <meta property="twitter:description" content="TMEC - Evidencias y articulos sobre tecnología en la TMEC. Cómputo Colmabrija." />       
        <meta property="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/images%2Fdia-de-la-mujer.jpg?alt=media&token=3f39fab5-ec8e-4b30-8d9a-9975308bfb5d" />
        <meta property="og:title" content="Técnica de Cómputo de Colmabrija - TMEC" /> 
        <meta property="og:description" content="TMEC es una página web donde estan la evidencias de la técnica de mantenimineto de equipos de cómputo. Cómputo Colmabrija." />
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/images%2Fdia-de-la-mujer.jpg?alt=media&token=3f39fab5-ec8e-4b30-8d9a-9975308bfb5d" />

        <title>TMEC</title>
        <meta name="description" content="TMEC es una página web donde estan la evidencias de la técnica de mantenimineto de equipos de cómputo. Cómputo Colmabrija." /> 
        <meta name="keywords" content="tmec, colmabrija, compúto, tecnología, sena, técnica, blog, algoritmos, computadores, software." />  


        <link rel="icon" href="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/images%2Ficon.png?alt=media&token=94753675-3700-40b4-9d77-a49531d24d4c" />
      </Head>
      
      
      <main>
        <Top />
        <LastsPosts />
        <Sentence />

        <Recomendados />
      </main>
       

      <Footer />
      <App />
    </div>
  )
}