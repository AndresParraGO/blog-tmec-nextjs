
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
        <img src="/images/figure-green.png" alt="Background figure" className="frase__img" />

        <div className="frase__text">
          <h4>{sentence.text}</h4>
          <p>{sentence.author}</p>
        </div>
      </article>
    </div>
  )
}


export default Sentence