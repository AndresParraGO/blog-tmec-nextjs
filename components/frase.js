
import React, {useState, useEffect} from 'react'

import sentenceJSON from '../database/frase.json'

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

      <style jsx>{`
        .frase {
          padding:5em 0;
          position: relative;
        }

        .frase__img {
          position: absolute;
          right: 0;
          width: 400px;
          opacity: .6;
        }

        .frase__text {
          position: relative;
          z-index: 20;

        }

        .frase__text h4 {
          font-size: 5em;
          text-align: center;
        }

        .frase__text p {
          font-size: 3em;
          text-align: right;
          padding-right: 2em;
          font-style: italic;
        }


        @media screen and (max-width: 650px) {

          .frase {
            padding: 3em 0;
          }

          .frase__img {
            width: 200px;
          }

          .frase__text h4 {
            font-size: 2.4em;
          }

          .frase__text p {
            font-size:1em;
          }

        }
      `}</style>
    </div>
  )
}


export default Sentence