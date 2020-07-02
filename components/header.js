
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
          padding-top: 2em;
          padding-bottom: 2em;
          text-align:center;
        }

        .header__title {
          color: var(--firstColor);
          font-family: 'Press Start 2P', cursive;
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