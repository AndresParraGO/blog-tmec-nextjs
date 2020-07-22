
import React from 'react'

import './index.css'


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
    </aside> 
  )
}


export default Share