

import React, {useState, useEffect} from 'react'

import './index.css'

function Accessibility() {

  const [inDarkMode, setInDarkMode] = useState(false)

  const changeFontSize = (status) => {
    document.body.className = ''

    if(status === '+') {
      document.body.classList.add('big-font-size')
      console.log('+')
    } else if(status === '-') {
      document.body.classList.add('small-font-size')
    }
  }

  const darkMode = () => {
    setInDarkMode(!inDarkMode)  
  }

  
  useEffect(() => {
    if(inDarkMode) document.body.classList.add('dark-mode')
    else document.body.classList.remove('dark-mode')
  }, [inDarkMode])



  return(
    <aside className="accessibility">
      <ul className="accessibility__menu">
        <li className="accessibility__item" onClick={ () => darkMode() }><img src="/logos/icon_contrast.png" alt="Dark mode app" /></li>
        <li className="accessibility__item" onClick={ () => changeFontSize('-') }>A-</li>
        <li className="accessibility__item" onClick={ () => changeFontSize('+') }>A+</li>
      </ul>
    </aside>
  )
}


export default Accessibility