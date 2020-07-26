
import React from 'react'
import Link from 'next/link'

import './index.css'

function Card( {title, description, img, slug} ) {
  return (
    <article className="card">
      <img src={img} alt={title} className="card__img" />

      <div className="post__text">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
        <Link href="/post/[slug]" as={`/post/${slug}`}>
          <a className="post__btn">Leer más</a>
        </Link>
      </div>
    </article>
  );
}


export default Card