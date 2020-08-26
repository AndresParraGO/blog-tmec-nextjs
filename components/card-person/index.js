
import React from 'react'

import './index.css'


function CardPerson( {img, name} ) {
  return(
    <article className="card card__me card__person" id="card__me">
      <img src={img} alt={name} />

      <div className="card__me__text">
        <h4>{name}</h4>
      </div>
    </article>
  )
}


export default CardPerson