import Head from 'next/head'

import Top from '../components/top'
import Footer from '../components/footer'
import Posts from '../components/posts'

import { getAllPosts } from '../lib/api'

import './blog.css'

export default function Blog( {allPosts} ) {
  return (
    <div>
      <Head>
        <meta property="og:url" content="https://computo.now.sh/" />
        <meta property="og:site_name" content="TMEC" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@AndresParraGar4" />
        <meta property="twitter:creator" content="@AndresParraGar4" />
        <meta property="twitter:title" content="Blog de la Técnica mantenimiento de equipos de Cómputo de Colmabrija - TMEC" />
        <meta property="twitter:description" content="TMEC - Blog de tmec , articulos de tecnología." />
        <meta property="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/images%2Fdia-de-la-mujer.jpg?alt=media&token=3f39fab5-ec8e-4b30-8d9a-9975308bfb5d" />
        <meta property="og:title" content="Blog de la Técnica de Cómputo de Colmabrija - TMEC" />
        <meta property="og:description" content="TMEC - Blog de tmec , articulos de tecnología" />
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/images%2Fdia-de-la-mujer.jpg?alt=media&token=3f39fab5-ec8e-4b30-8d9a-9975308bfb5d" />

        <title>Blog - TMEC</title>
        <meta name="description" content="TMEC - Blog de tmec , articulos de tecnología." /> 
        <meta name="keywords" content="tmec, colmabrija, compúto, tecnología, zoom, técnica, blog, algoritmos, computadores, software, programación, web, javascript, virus." />  

        <link rel="icon" href="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/images%2Ficon.png?alt=media&token=94753675-3700-40b4-9d77-a49531d24d4c" />
      </Head>

      <Top allPosts={allPosts} />

      <main className="container">
        <h3>Posts</h3>
        <Posts allPosts={allPosts} />
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