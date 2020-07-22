

import React, { useState, useEffect } from 'react'
import Link from 'next/link'


import postsJSON from '../database/posts.json'

import './index.css'


function PostsRecomendados() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    setPosts(postsJSON.posts.reverse())
  }, [])

  return (
    <div className="posts container">
      <h1>Posts Recomendados</h1>
      <section className="posts-recomendados">
        {
          posts.map(({ title, img, path }, index) => {
            if (index < 3) {
              return (
                <Link key={index} href={path}>
                  <img key={index} title={title} src={img} alt={title + ' - TMEC'} />
                </Link>
              )
            }
          })
        }
      </section>
    </div>
  );
}


export default PostsRecomendados