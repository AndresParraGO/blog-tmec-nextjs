
import React, {useEffect} from 'react'

import './index.css'

function Slider() {

  const changeImage = () => {
    const sliderContainer = document.getElementById('slider__container')

    let i = 0

    const interval = setInterval(() => {
      if(i < 4) {
        sliderContainer.style.left = `-${i*100}%`
        i++
      } else {
        i = 0
      }
    }, 2000)
  }

  useEffect(() => {
    changeImage()
  }, [])

  return(
    <article className="slider">
      <div className="container__slider" id="slider__container">
        <img className="slider__img" src="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/images%2Fgrupo-tmec.jpg?alt=media&token=b7c044f0-6f11-461c-a9d5-377fb4c1632a" alt="" />
        <img className="slider__img" src="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/images%2Fdia-de-la-mujer.jpg?alt=media&token=3f39fab5-ec8e-4b30-8d9a-9975308bfb5d" alt="" />
        <img className="slider__img" src="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/images%2Ftmec-en-sena.jpeg?alt=media&token=00af58a4-219e-4131-9487-eb3b321a98d1" alt="" />
        <img className="slider__img" src="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/images%2Fgrupo.jpg?alt=media&token=65521104-25c1-4aa1-8068-eb25f86c6aff" alt="" />
      </div>
    </article>
  )
}


export default Slider