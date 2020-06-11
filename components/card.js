
import React from 'react'
import Link from 'next/link'


function Card( {title, description, path, img} ) {
  return (
    <article className="card">
      <img src={img} alt={title} className="card__img" />

      <div className="post__text">
        <h4 className="card__title">{title}</h4>
        <p className="card__description">{description}</p>
        <Link href={path}>
          <a className="post__btn">Leer más</a>
        </Link>
      </div>

      <style jsx>{`
        .card {
          border: 1px solid var(--borderColor);
          box-shadow: 0 0 10px 0 var(--borderColor);
          padding-bottom: 1em;
          border: 1px solid var(--borderColor);

          border-radius: 5px;
        }

        .card__img {
          width: 100%;
          border-radius: 5px 5px 0 0;
          objet-fit: cover;
        }

        .post__text {
          padding: 0 1em;
        }

        .post__btn {
          margin-top: 1em;
          display: inline-block;
          padding: 0 1em;
          border-radius: 3px;
          height: 35px;
          line-height: 35px;
          background-color: var(--firstColor);
          color: var(--textColorAlt);
        }

        .post__btn:hover {
          background-color: var(--firstColorAlt);
        }

        .card__title {
          font-size: 1.5em;
          padding: 1em 0;
        }

        .card__description {
          color: var(--secondTextColor);
        }

        .card__footer {
          display: flex;
          align-items: center;
          padding-top: 2em;
        }

        .card__footer img {
          width: 35px;
          height: 35px;
          object-fit: cover;
          border-radius: 50%;
        }

        .card__footer span {
          padding-left: 1em;
        }


        @media screen and (min-width: 960px) {
          
          .card__img {
            height: 200px;
          }

        }
      `}</style>
    </article>
  );
}


export default Card