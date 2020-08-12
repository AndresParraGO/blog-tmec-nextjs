
import React, {useState} from 'react'
import Card from '../card/'

import './index.css'

function PostsFilters( {hideSearch, input, posts} ) {
  const [hide, setHide] = useState(hideSearch)

  return(hide
    ?
    <section className="posts__filters">
      <h2>Resultados de: {input}</h2>
      <article>
        {
          posts.map(({ title, excerpt, coverImage, slug}, index) => {

            return (
              <article key={slug} className="card">
                <img src={coverImage} alt={title} className="card__img" />

                <div className="post__text">
                  <h3 className="card__title">{title}</h3>
                  <p className="card__description">{excerpt}</p>
                  <a href={`/post/${slug}`} className="post__btn">Leer más</a>
                </div>
              </article>
            )
            
          })
        }

        <span className="posts__filters-icon-close" onClick={() => setHide(!hide)}>X</span>
      </article>
    </section>
    : ''
  )
}


export default PostsFilters