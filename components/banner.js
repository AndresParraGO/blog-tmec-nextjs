
import React from 'react'
import Link from 'next/link'


function Banner() {
  return(
    <div className="banner">
      <div className="banner__slider">
        <div className="banner__slider__bg"></div>
        <div className="banner__slider__text">
          <h3>"Día de formateo"</h3>
          <div>
            <p>01 May 2020</p><Link href="/dia-de-formateo"><a><i className="fas fa-angle-right"></i></a></Link>
          </div>
        </div>
      </div>

      <div className="banner__featured" id="banner-posts">
        <Link href="#">
          <div className="banner__featured__post">
            <div>
              <img src="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/images%2Fque-es-un-algoritmo-featured.png?alt=media&token=e1f6b025-de63-4829-92f5-908e0769bd8c" alt="" />
            </div>
            <div className="featured__post__text">
              <p>22 de mayo de 2020</p>
              <h4>Algoritmo de mayor y menor</h4>
            </div>
          </div>
        </Link>

        <Link href="#">
          <div className="banner__featured__post">
            <div>
              <img src="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/images%2Fque-es-un-algoritmo-featured.png?alt=media&token=e1f6b025-de63-4829-92f5-908e0769bd8c" alt="" />
            </div>
            <div className="featured__post__text">
              <p>22 de mayo de 2020</p>
              <h4>Algoritmo de mayor y menor</h4>
            </div>
          </div>
        </Link>

        <Link href="#">
          <div className="banner__featured__post">
            <div>
              <img src="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/images%2Fque-es-un-algoritmo-featured.png?alt=media&token=e1f6b025-de63-4829-92f5-908e0769bd8c" alt="" />
            </div>
            <div className="featured__post__text">
              <p>22 de mayo de 2020</p>
              <h4>Algoritmo de mayor y menor</h4>
            </div>
          </div>
        </Link>
      </div>

       <style jsx>{`
        .banner {
          margin-top: 2em;
          width: 100%;
        }


        .banner__slider {
          background-image: url(https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/images%2Fdia-de-formateo-IMG-1.jpg?alt=media&token=b02f48fa-a158-4b71-9c92-ecfb520bde0a);
          width: 100%;
          padding: 5em 0;
          background-position: center;
          background-size: cover;

          position: relative;
        }

        .banner__slider__bg {
          background-color: rgba(0,0,0,0, .56);
          position: absolute;
          left:0;
          top:0;

          width: 100%;
          height: 100%;
        }


        .banner__slider__text {
          height: 100%;

          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;

          text-align: center;
          position: relative;
          z-index: 10;
          color: var(--textColorAlt);
          
        }

        .banner__slider__text h3 {
          font-size: 2em;
          font-weight: 700;
        }

        .banner__slider__text .btn {
          text-align: center;
          background-color: rgba(0,0,0,0, .54);
        }


        .banner__slider__text .btn :hover {
          background-color: rgba(0,0,0,0, .54);
        }

       .banner__slider__text div {
          width: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;

        }

        .banner__slider__text div a {
          color: $textColorAlt;
          font-size: 1.5em;
          background-color: var(--firstColor);
          width: 50px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          border-radius: 50%;

        }
  
        .banner__slider__text div a:hover {
          background-color: var(--firstColorAlt);
        }


        .banner__featured {
          width: 100%;
          background-color: var(--firstTextColor);
          color: $textColorAlt;
          padding: 1em;

          display: flex;
          justify-content: space-around;
          flex-direction: column;
        }


        .banner__featured__post {
          width: 100%;
          display: flex;
          align-items: center;
          color:var(--textColorAlt);
        }

        .banner__featured__post img {
          display: block;
          width: 70px;
          height: 70px;
          object-fit: cover;
          border-radius: 50%;
        }

        .featured__post__text {
          padding-left: 1em;
        }

        .banner__featured__post p {
          font-size: 0.9em;
        }

        .banner__featured__post h4 {
          margin-top: .5em;
          font-size: 1.2em;
        }


        @media screen and (max-width: 650px) {
            
          .btn {
            display: none;
          }

          .banner__featured__post {
            margin: 1em 0;
          }

        }


        @media screen and (min-width: 960px) {

          .banner {
            height: 20em;
            display: flex;
          }

          .banner__slider {
            width: 70%;
          }

          .banner__slider__text h3 {
            font-size: 3em;
          }

          .banner__featured {
            width: 30%;
          }

        }
      `}</style>
   </div>
  )
}


export default Banner