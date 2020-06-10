
import React from 'react'
import Link from 'next/link'


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

      <style jsx>{`
      .navbar {
        padding: 1em 0;
        background-color: var(--firstColor);
      }

      .navbar__menu {
        margin-left: auto;
        margin-right: auto;
        width: 60%;
        display: flex;
        justify-content: space-between;
      }

      .nav__link {
        color:var(--textColorAlt);
        font-weight: 700;
        text-transform: uppercase;
        font-size: 1.1em;

      }

      .nav__link:hover {
        color:var(--secondColor);
      }

      `}</style>
    </nav>
  )
}


export default Menu