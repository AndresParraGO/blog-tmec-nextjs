
import React from 'react'

import Header from '../header'
import Menu from '../menu'
import Banner from '../banner'
import Significado from '../significado'

function Top( {allPosts} ) {
  return (
    <>
      <Header allPosts={allPosts} />
      <Menu />
      <Banner allPosts={allPosts} />
      <Significado />
    </>
  )
}

export default Top