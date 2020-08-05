
import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Disqus from "disqus-react"


import { getPostBySlug, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'

import Header from '../../components/header/'
import Menu from '../../components/menu/'
import Footer from '../../components/footer'
import PostsRecomendados from '../../components/posts-recomendados'

import PostBody from '../../components/post-body/'
import Accessibility from '../../components/accessibility/'


import './index.css'


function Post( {post, allPosts} ) {
  const disqusShortname = "tmec-1"
  const disqusConfig = {
    url: `https://computo.now.sh/post/${post.slug}`,
    identifier: post.title.trim(),
    title: post.title
  }

  const router = useRouter()
  const { id } = router.query

  if (!router.isFallback && !post?.slug) {
    return <i>Error</i>
  }

  return(
    <>
      {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <Head>
              <meta property="og:url" content={`https://computo.now.sh/post/${post.slug}`} />      
              <meta property="og:site_name" content="TMEC" />    
              <meta property="twitter:card" content="summary_large_image" />     
              <meta property="twitter:site" content="@AndresParraGar4" />       
              <meta property="twitter:creator" content="@AndresParraGar4" />      
              <meta property="twitter:title" content={`${post.title} - TMEC`} />        
              <meta property="twitter:description" content={post.excerpt} />       
              <meta property="twitter:image" content={post.coverImage} />
              <meta property="og:title" content={`${post.title} - TMEC`} /> 
              <meta property="og:description" content={post.excerpt} />
              <meta property="og:image" content={post.coverImage} />
              <link rel="icon" href="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/images%2Ficon.png?alt=media&token=94753675-3700-40b4-9d77-a49531d24d4c" />

              <meta name="description" content={post.excerpt} />
              <title>{post.title}</title>
            </Head>
          
            <Header />
            <Menu />

            <Accessibility />

            <main className="container">
              <section className="content page-post">
                <h2 className="post__title">{post.title}</h2>
                <p className="post__date">{post.date}</p>
                <p className="post__description">{post.excerpt}</p>

                <PostBody content={post.content} />
              </section>
            </main>


            <section className="comments">
              <Disqus.DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}
              />
            </section>
            
            <PostsRecomendados  allPosts={allPosts} />

            <Footer />
          </>
      )}
    </>
  )
}


export default Post



export async function getStaticProps({ params }) {
    const allPosts = getAllPosts([
      'title',
      'date',
      'slug',
      'author',
      'coverImage',
      'excerpt'
    ])


  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'excerpt'
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
      allPosts
    }
  }
}


export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}