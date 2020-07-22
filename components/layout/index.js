

import Head from 'next/head'

import Top from '../top'
import Footer from '../footer'



export default function Layout( {children, allPosts} ) {
  return (
    <>
      <Top allPosts={allPosts} />
      
      <main>
        {children}
      </main>
      
      <Footer />
    </>
  )
}