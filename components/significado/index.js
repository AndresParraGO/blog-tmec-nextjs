
import React from 'react'
import Link from 'next/link'

import './index.css'

function Banner() {
  return(
    <div className="container">
      <section className="about">
        <img className="about__img" src="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/images%2Fdia-de-la-mujer.jpg?alt=media&token=3f39fab5-ec8e-4b30-8d9a-9975308bfb5d" alt="Día de la mujer - TMEC" />

        <div className="about__bg"></div>
        <div className="about__text">
          <h3 className="about__title">¿ QÚE SIGNIFICA TMEC ?</h3>
          <p>TMEC es el acronimo de técnica mantenimiento de equipos de cómputo. En esta página se sube todas las actividades que hacemos en clase.</p>
          <Link href="/nosotros"><a className="about__btn">Saber más</a></Link>
        </div>
      </section>
   </div>
  )
}


export default Banner