
import React, {useState, useEffect} from 'react'
import Link from 'next/link'

import './index.css'


function Banner( {allPosts} ) {
  return(
    <section className="banner">
      <div className="banner__slider">
        <div className="banner__slider__bg"></div>
      </div>

      <div className="banner__featured" id="banner-posts">
        {
          allPosts.map(({ title, coverImage, slug, date }, index) => {
            if(index < 3) {
              return (
                <Link key={title} href="/post/[slug]" as={`/post/${slug}`}>
                  <a>
                    <div className="banner__featured__post">
                      <div>
                        <img src={coverImage} alt={title} />
                      </div>
                      <div className="featured__post__text">
                        <p>{date}</p>
                        <h4>{title}</h4>
                      </div>
                    </div>
                  </a>
                </Link>
              )
            }
          })
        }
      </div>

   </section>
  )
}


export default Banner