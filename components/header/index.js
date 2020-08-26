
import React, {useState} from 'react'
import Link from 'next/link'

import Search from '../search/';
import MenuLateral from '../menu-lateral';


import './index.css'

function Header( {allPosts} ) {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenuLateral, setShowMenuLateral] = useState(false);

  return(
    <>
      <header className="header">
        <div className="container">
          <img className="header__icon" onClick={() => {
            document.getElementById('menulateral').style.left = '0'
          }} src="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/icons%2Fopen-menu.svg?alt=media&token=3b86f8ef-a0bd-4cff-ba74-e8ab0d4b3f21" alt="Icon menu - TMEC" />
          <Link href="/">
            <a className="header__title"><h1>TMEC</h1></a>
          </Link>
          <img className="header__icon" onClick={() => setShowSearch(!showSearch)} src="https://firebasestorage.googleapis.com/v0/b/tmec-api.appspot.com/o/icons%2Fsearch.svg?alt=media&token=bb6c2608-667a-4b62-bd4e-a2c34fc57d9c" alt="icon search - TMEC" />
        </div>

        {showSearch 
          ? <Search allPosts={allPosts} />
          : ''
        }

        
        <MenuLateral allPosts={allPosts} />
      
      </header>
    </>
  )
}

export default Header