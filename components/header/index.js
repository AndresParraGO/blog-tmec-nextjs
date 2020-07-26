
import React from 'react'
import Link from 'next/link'

import './index.css'

function Header() {
  return(
    <>
      <header className="header">
        <div className="container">
          <Link href="/">
            <a><h1 className="header__title">TMEC</h1></a>
          </Link>
        </div>
      </header>
    </>
  )
}

export default Header