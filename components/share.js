
import React from 'react'



function Share( {facebook, twitter, linkedin, web} ) {
  return(
    <aside className="share">
      <a href={facebook} target="_blank">
        <img src="/logos/facebook.svg" alt="Logo de Facebook" />
      </a>
      <a href={twitter} target="_blank">
        <img src="/logos/twitter.svg" alt="Logo de Twitter" />
      </a>
      <a href={linkedin} target="_blank">
        <img src="/logos/linkedin.svg" alt="Logo de Linkedin" />
      </a>
      <a href={`https://computo.now.sh/post/${web}`} target="_blank">
        <img src="/logos/connection.svg" alt="Logo de Web" />
      </a>

      <style jsx>{`
            
        .share {
          position: fixed;
          width: 50px;
          display: flex;
          flex-direction: column;
          background-color: rgba(0,0,0,.1);

          z-index: 60;
        }

        .share img {
          padding: .9em;
          transition: all 300ms;
        }

        .share img:hover {
          transform: scale(.8)
        }


        @media screen and (max-width: 650px) {
          .share {
            display: none;
            visibility: hidden;
          }
        }

      `}</style>
    </aside> 
  )
}


export default Share