
import React from 'react'

import Card from '../card'

import './index.css'


export default function Posts( {allPosts} ) {
  return(
    <section className="posts-blog">
      {
        allPosts.map(({ title, excerpt, coverImage, slug }, index) => {
          return (
            <Card
              title={title}
              key={title}
              description={excerpt}
              img={coverImage}
              path={slug}
            />
          ) 
        })
      }
    </section>
  )
}

