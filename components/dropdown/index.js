

import React from 'react'
import Link from 'next/link'

import './index.css'

function Dropdown( {list} ) {
  return(
    <div className="dropdown">
      <ul className="dropdown-menu">
        {
          list.map(element => {
            return(
              <Link href={element.link}>
                <li key={element.link} className="dropdown-item">
                  <a>{element.title}</a>
                </li>
              </Link>
            )
          })
        }  
      </ul>
    </div>
  )
}


export default Dropdown