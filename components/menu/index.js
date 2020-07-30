
import React, {useState, useEffect} from 'react'
import Link from 'next/link'

import Dropdown from '../dropdown'

import './index.css'

function Menu() {
  const [list, setList] = useState([])
  const [chageDropdown, setDropdown] = useState(false)

  useEffect(() => {
    setList([
    {title:'Todo', link: '/blog/posts'}, 
    {title:'Mantenimiento Preventivo', link: '/blog/mantenimiento-preventivo'},
    {title:'Mantenimiento Correctivo', link: '/blog/mantenimiento-correctivo'}, 
    {title:'Otros', link: '/blog/otros'}])
  }, [])

  
  const showDropdown = () => {
   setDropdown(!chageDropdown) 
  }
  

  return(
    <nav className="navbar">
      <ul className="navbar__menu">
        <li className="nav__item">
          <Link href="/">
            <a className="nav__link">Inicio</a>
          </Link>
        </li>

        <li className="nav__item" onClick={showDropdown}>
          <a className="nav__link">Blog</a>

          {chageDropdown 
            ? <Dropdown list={list} />
            : ''
          }
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