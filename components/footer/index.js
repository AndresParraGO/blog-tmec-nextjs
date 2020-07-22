

import React from 'react'
import Link from 'next/link'

import './index.css'

function Footer() {
  return(
    <footer className="footer">
      <div className="container">
        <div className="footer__logo">
          <h4><Link href="/"><a>TMEC</a></Link></h4>
        </div>

        <div className="footer__menu">
          <ul>
            <li><Link href="/"><a>Inicio</a></Link></li>
            <li><Link href="/blog"><a>Blog</a></Link></li>
            <li><Link href="/nosotros"><a>Nosotros</a></Link></li>
          </ul>
        </div>

        <div className="footer__copy">
          <p>© 2020 TMEC. Desarrollado por<a href="https://twitter.com/AndresParraGar4" target="_blank"> Andres Parra Garzón</a></p>
        </div>
      </div>
    </footer>
  )
}


export default Footer