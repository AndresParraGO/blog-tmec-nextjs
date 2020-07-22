
import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { getPostBySlug, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'

import Header from '../../components/header/'
import Menu from '../../components/menu/'

// import ListPosts from '../../components/posts/'
import PostBody from '../../components/post-body/'


import './index.css'


function Post( {post, allPosts} ) {
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
              <meta name="description" content={post.excerpt} />
              <title>{post.title}</title>
            </Head>
          
            <Header />
            <Menu />

            <main className="container">
              <section className="content page-post">
                <h2 className="post__title">{post.title}</h2>
                <p className="post__date">{post.date}</p>
                <p className="post__description">{post.excerpt}</p>

                <PostBody content={post.content} />
              </section>
            </main>
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