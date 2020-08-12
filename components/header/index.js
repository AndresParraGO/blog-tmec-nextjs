
import React, {useState} from 'react'
import Link from 'next/link'

import Search from '../search/'

import './index.css'

function Header( {allPosts} ) {
  const [showSearch, setShowSearch] = useState(false)

  return(
    <>
      <header className="header">
        <div className="container">
          <img className="header__icon" src="https://image.flaticon.com/icons/png/512/56/56763.png" />
          <Link href="/">
            <a className="header__title"><h1>TMEC</h1></a>
          </Link>
          <img className="header__icon" onClick={() => setShowSearch(!showSearch)} src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/search-512.png" alt="" />
        </div>

        {showSearch 
          ? <Search allPosts={allPosts} />
          : ''
        }
      </header>
    </>
  )
}

export default Header