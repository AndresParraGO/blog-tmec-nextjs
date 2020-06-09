
import React from 'react'
import Link from 'next/link'


function Banner() {
  return(
    <div className="container">
      <section className="about">
        <img className="about__img" src="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/images%2Fdia-de-la-mujer.jpg?alt=media&amp;token=3f39fab5-ec8e-4b30-8d9a-9975308bfb5d" alt="Día de la mujer - TMEC" />

        <div className="about__bg"></div>
        <div className="about__text">
          <h3 className="about__title">¿ QÚE SIGNIFICA TMEC ?</h3>
          <p>TMEC es el acronimo de técnica mantenimiento de equipos de cómputo. En esta página se sube todas las actividades que hacemos en clase.</p>
          <Link href="/nosotros"><a className="about__btn">Saber más</a></Link>
        </div>
      </section>

       <style jsx>{`

        .about {
          margin-top: 3em;

          background-color: var(--bgBody);
          display: grid;
          grid-template-columns: repeat(2, 1fr);

          position: relative;

          box-shadow: 0 0 10px 0 var(--borderColor);
          border: 1px solid var(--borderColor);
          border-radius: 5px;

        }

        .about .about__img {
          width: 100%;
          display: block;
        }

        .about__bg {
          position: absolute;
        }



    

        .about__text {

          padding: 1em;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          position: relative;
          z-index: 20;

          overflow: hidden;
        }

        .about__title {
          font-size: 2em;
          padding-bottom: 0.5em;
          font-weight: 900;
        }

        .about__text p {
          font-weight: 300;
        }


        .about__btn {
          height: 40px;
          padding: 0 1em;
          background-color: var(--firstColor);
          color: var(--textColorAlt);
          line-height: 40px;
          width: 200px;

          margin-top: 1em;
        }

        .about__btn:hover {
          background-color: var(--firstColorAlt);
        }


        .about__text__img {
          display: none;
        }


        

        @media screen and (max-width: 650px) {
            
         .about {
            grid-template-columns: repeat(1, 1fr);
          }

          .about__text {
            padding: 1em;
          
          }

        }


        @media screen and (min-width: 960px) {
          
          .about__title {
            margin-top: -3em;
          }

          .about__text__img {
              display: block;
              width: 100px;
              position: absolute;
              z-index: 10;
              bottom: 30px;
          }

        }
      `}</style>
   </div>
  )
}


export default Banner