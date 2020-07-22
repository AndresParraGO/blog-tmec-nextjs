
import React, {useState, useEffect} from 'react'

import sentenceJSON from '../../database/frase.json'

import './index.css'


function Sentence() {
  const [sentence, setSentence] = useState({})

  useEffect(() => {
    setSentence(sentenceJSON.frase)
  }, [])

  return(
    <div className="container">
      <article className="frase">
        <img src="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/figure-green.png?alt=media&token=ffcfe13a-c65b-4226-ab2e-f59552683cef" alt="Background figure" className="frase__img" />

        <div className="frase__text">
          <h4>{sentence.text}</h4>
          <p>{sentence.author}</p>
        </div>
      </article>
    </div>
  )
}


export default Sentence