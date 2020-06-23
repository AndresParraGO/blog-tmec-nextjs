
import React from 'react'


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


      <style jsx>{`
        
        .card {
          border: 1px solid var(--borderColor);
          box-shadow: 0 0 10px 0 var(--borderColor);
          padding-bottom: 1em;
          border: 1px solid var(--borderColor);
          border-radius: 5px;
        }
        
        .card__me {
          text-align: center;
          padding: 2em 0;
        }

        .card__me > img {
          margin-left:auto;
          margin-bottom: 1em;
          margin-right: auto;
          width: 100px;
          border-radius: 50%;
        }


        .card__me__social {
          margin-top: 1em;
        }

        .card__me__social a{
          display: inline-block;
          transition: all 200ms;
          margin: 0 .5em;
        }

        .card__me__social > a img {
          width: 30px;
        }

        .card__me__social > a img:hover {
          transform: scale(.9)
        }


      `}</style>

    </article>
  )
}


export default CardMe