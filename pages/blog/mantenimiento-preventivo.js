import Head from 'next/head'

import Header from '../../components/header'
import Menu from '../../components/menu'
import Banner from '../../components/banner'

import Footer from '../../components/footer'
import Posts from '../../components/posts'
import Accessibility from '../../components/accessibility/'

import { getAllPosts } from '../../lib/api'

import './blog.css'

export default function Blog( {filters,allPosts} ) {
  return (
    <div>
      <Head>
        <meta property="og:url" content="https://computo.now.sh/blog/mantenimiento-preventivo" />
        <meta property="og:site_name" content="TMEC" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@AndresParraGar4" />
        <meta property="twitter:creator" content="@AndresParraGar4" />
        <meta property="twitter:title" content="Mantenimiento preventivo - TMEC" />
        <meta property="twitter:description" content="TMEC - Blog de tmec sobre el mantenimiento preventivo de computadores." />
        <meta property="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/images%2Fdia-de-la-mujer.jpg?alt=media&token=3f39fab5-ec8e-4b30-8d9a-9975308bfb5d" />
        <meta property="og:title" content="Mantenimiento preventivo - TMEC" />
        <meta property="og:description" content="TMEC - Blog de tmec sobre el mantenimiento preventivo de computadores." />
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/images%2Fdia-de-la-mujer.jpg?alt=media&token=3f39fab5-ec8e-4b30-8d9a-9975308bfb5d" />

        <title>Mantenimiento Preventivo - TMEC</title>
        <meta name="description" content="TMEC - Blog de tmec sobre el mantenimiento preventivo de computadores." /> 
        <meta name="keywords" content="mantenimineto, preventivo, software, tmec, colmabrija, compúto, tecnología, zoom, técnica, blog, algoritmos, computadores, software, programación, web, javascript, virus." />  

        <link rel="icon" href="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/images%2Ficon.png?alt=media&token=94753675-3700-40b4-9d77-a49531d24d4c" />
      </Head>

      <Header />
      <Menu />
      <Banner allPosts={allPosts} />
      <Accessibility />

      <main className="container">
        <h3>Mantenimiento Preventivo</h3>
        <p>El <em>mantenimiento preventivo</em> es el destinado a la conservación de equipos o instalaciones mediante la realización de revisión y limpieza que garanticen su buen funcionamiento y fiabilidad. El mantenimiento preventivo se realiza en equipos en condiciones de funcionamiento, por oposición al mantenimiento correctivo que repara o pone en condiciones de funcionamiento aquellos que dejaron de funcionar o están dañados. <span className="bold">Fuente <a href="https://es.wikipedia.org/wiki/Mantenimiento_preventivo#:~:text=En%20las%20operaciones%20de%20mantenimiento,su%20buen%20funcionamiento%20y%20fiabilidad.&text=El%20mantenimiento%20preventivo%20debe%20evitar,antes%20de%20que%20estos%20ocurran." target="_blank">Wikipedia</a></span></p>

        <br />
        <hr />
        <br />
  
        <Posts allPosts={filters} />
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  let allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'tag'
  ])

  const filters = allPosts.filter(post => post.tag == 'preventivo')

  return {
    props: { filters,allPosts }
  }
}