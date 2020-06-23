

import React from 'react'
import Link from 'next/link'


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


      <style jsx>{`
      .footer {
        background-color: var(--bgFooter);
        padding: 4em 0;
        text-align: center;
      }

      .footer__logo {
        padding-bottom: 2em;

      }

      .footer__logo h4 {
        font-size: 3em;
        color:var(--textColorAlt);

      }

      .footer__logo h4 a {
        color: inherit;
      }

      .footer__menu {
        padding-bottom: 2em;

      }

      .footer__menu ul {
        display: flex;
        justify-content: center;

      }

      .footer__menu ul a{
        padding: 0 2em;
        color:var(--textColorAlt);      
      }


      .footer__copy {
        color:var(--secondTextColor);

      }

      .footer__copy a{
        color:var(--secondColorAlt);
        font-weight: 700;
      }
      `}</style>
    </footer>
  )
}


export default Footer