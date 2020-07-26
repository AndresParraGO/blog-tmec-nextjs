
import React from 'react'
import Link from 'next/link'

import Card from '../card'

import './index.css'

function LastsPosts( {allPosts} ) {
  return (
    <section className="posts container">
      <h1>Ultimos Posts</h1>
      <article className="lasts-posts">
        {
          allPosts.map(({ title, excerpt, coverImage, slug}, index) => {
            if (index < 3) {
              return (
                <Card
                  title={title}
                  key={title}
                  description={excerpt}
                  img={coverImage}
                  slug={slug}
                />
              )
            }
          })
        }
      </article>

      <div className="center">
        <Link href="/blog">
          <a className="btn">Más Posts</a>
        </Link>
      </div>
    </section>
  );
}


export default LastsPosts