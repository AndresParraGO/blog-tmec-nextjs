

import React from 'react'
import Link from 'next/link'


import './index.css'


function PostsRecomendados( {allPosts} ) {
  return (
    <div className="posts container">
      <h1>Posts Recomendados</h1>
      <section className="posts-recomendados">
        {
          allPosts.map(({ title, coverImage, slug }, index) => {
            if (index < 3) {
              return (
                <Link key={index} href="/post/[slug]" as={`/post/${slug}`}>
                  <article className="post">
                    <img key={index} title={title} src={coverImage} alt={title + ' - TMEC'} />
                    <div className="content">
                      <h5>{title}</h5>
                    </div>
                  </article>
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