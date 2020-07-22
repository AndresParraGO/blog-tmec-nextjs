
import React from 'react'
import Link from 'next/link'

import './index.css'

function Menu() {
  return(
    <nav className="navbar">
      <ul className="navbar__menu">
        <li className="nav__item">
          <Link href="/">
            <a className="nav__link">Inicio</a>
          </Link>
        </li>

        <li className="nav__item">
          <Link href="/blog">
            <a className="nav__link">Blog</a>
          </Link>
        </li>

        <li className="nav__item">
          <Link href="/nosotros">
            <a className="nav__link">Nosotros</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}


export default Menu