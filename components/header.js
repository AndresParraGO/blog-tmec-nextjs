
import React from 'react'

function Header() {
  return(
    <>
      <header className="header">
        <div className="container">
          <h1 className="header__title">TMEC</h1>
        </div>

        <style jsx>{`
        .header {
          padding: 2em 0;
          text-align:center;
        }

        .header__title {
          color: var(--firstColor)
        }


        @media screen and (min-width: 960px) {
          .header__title {
            font-size: 4em;
          }
        }
      `}</style>
      </header>
    </>
  )
}

export default Header