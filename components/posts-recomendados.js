

import React, { useState, useEffect } from 'react'
import Link from 'next/link'


import postsJSON from '../database/posts.json'

function PostsRecomendados() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    setPosts(postsJSON.posts)
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
                  <img key={index} src={img} alt={title + ' - TMEC'} />
                </Link>
              )
            }
          })
        }
      </section>


      <style jsx>{`
        .posts {
          margin-top:4em;
          margin-bottom:4em;
        }

        .posts-recomendados {
          display: grid;
          grid-gap: 2em;
          grid-template-columns: repeat(3, 1fr);
        }

        .posts-recomendados img {
          width: 100%;
          height: 150px;
          object-fit: cover;

          cursor: pointer;
          transition:all 200ms;
        }

        .posts-recomendados img:hover {
          opacity: .7;
        }


        @media screen and (max-width: 650px) {
          .posts-recomendados {
            grid-template-columns: repeat(1, 1fr);
          }

          .posts-recomendados img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        }

        @media screen and (min-width: 960px) {
          .posts-recomendados  {
            grid-template-columns: repeat(3, 1fr);
          }

          .posts-recomendados img {
            width: 100%;
            height: 200px;
          }
        }
        
      `}</style>
    </div>
  );
}


export default PostsRecomendados