import Head from 'next/head'

import Header from '../../components/header'
import Menu from '../../components/menu'
import Banner from '../../components/banner'

import Footer from '../../components/footer'
import Posts from '../../components/posts'
import Accessibility from '../../components/accessibility/'

import { getAllPosts } from '../../lib/api'

import './blog.css'

export default function Blog( {filters, allPosts} ) {
  return (
    <div>
      <Head>
        <meta property="og:url" content="https://computo.now.sh/blog/mantenimiento-correctivo" />
        <meta property="og:site_name" content="TMEC" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@AndresParraGar4" />
        <meta property="twitter:creator" content="@AndresParraGar4" />
        <meta property="twitter:title" content="Mantenimiento Correctivo - TMEC" />
        <meta property="twitter:description" content="TMEC - Blog de tmec sobre mantenimiento correctivo." />
        <meta property="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/images%2Fdia-de-la-mujer.jpg?alt=media&token=3f39fab5-ec8e-4b30-8d9a-9975308bfb5d" />
        <meta property="og:title" content="Mantenimiento correctivo - TMEC" />
        <meta property="og:description" content="TMEC - Blog de tmec sobre mantenimiento correctivo." />
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/images%2Fdia-de-la-mujer.jpg?alt=media&token=3f39fab5-ec8e-4b30-8d9a-9975308bfb5d" />

        <title>Mantenimiento Correctivo - TMEC</title>
        <meta name="description" content="TMEC - Blog de tmec sobre mantenimiento correctivo." /> 
        <meta name="keywords" content="mantenimineto, correctivo, software, tmec, colmabrija, compúto, tecnología, zoom, técnica, blog, algoritmos, computadores, software, programación, web, javascript, virus." />  

        <link rel="icon" href="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/images%2Ficon.png?alt=media&token=94753675-3700-40b4-9d77-a49531d24d4c" />
      </Head>

      <Header allPosts={allPosts} />
      <Menu />
      <Banner allPosts={allPosts} />
      <Accessibility />

      <main className="container">
        <h3>Mantenimiento Correctivo</h3>
        <p>Se denomina <em>mantenimiento correctivo</em>, aquel que corrige los defectos observados en los equipamientos o instalaciones, es la forma más básica de mantenimiento y consiste en localizar averías o defectos para corregirlos o repararlos. <span>Fuente <a href="https://es.wikipedia.org/wiki/Mantenimiento_correctivo" target="_blank">Wikipedia</a></span></p>
        
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

  const filters = allPosts.filter(post => post.tag == 'correctivo')

  return {
    props: { filters, allPosts }
  }
}