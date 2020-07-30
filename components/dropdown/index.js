

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
              <li key={element.link} className="dropdown-item">
                <Link href={element.link}><a>{element.title}</a></Link>
              </li>
            )
          })
        }  
      </ul>
    </div>
  )
}


export default Dropdown
