
import React from 'react'

import './index.css'


function CardMe() {
  return(
    <article className="card card__me" id="card__me">
      <img src="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/jmGlZffY_400x400.jpg?alt=media&token=64e638e3-57c1-4d7d-83e0-7ee87a1726fa" alt="Andrés Parra Garzón - Frontend Developer" />

      <div className="card__me__text">
        <h4>Andrés Parra Garzón</h4>
        <p>Frontend Developer</p>

        <div className="card__me__social">
          <a href="https://github.com/AndresParraGO" target="_blank">
            <img src="/logos/github-logo.png" alt="Icono de Github" />
          </a>

          <a href="https://twitter.com/AndresParraGar4" target="_blank">
            <img src="/logos/twitter-logo.png" alt="Icono de Twitter" />
          </a>

          <a href="https://www.linkedin.com/in/andr%C3%A9s-alfonso-parra-garz%C3%B3n-37529919a/" target="_blank">
            <img src="/logos/icon-linkedin.png" alt="Icono de Linkedin" />
          </a>
        </div>
      </div>
    </article>
  )
}


export default CardMe