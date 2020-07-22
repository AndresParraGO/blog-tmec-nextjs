

import React from 'React'

import './index.css'


function Recomendados( {list} ) {
  return(
    <article className="recomendados">
      <div className="container">
        <div className="recomendado__item">
          <img src="https://www.xlsemanal.com/wp-content/uploads/sites/3/2019/12/las-mejores-fotografias.jpg" alt="" />
        </div>

        <div className="recomendado__item">
          <img src="https://www.xlsemanal.com/wp-content/uploads/sites/3/2019/12/las-mejores-fotografias.jpg" />
         </div>

        <div className="recomendado__item">
          <img src="https://www.xlsemanal.com/wp-content/uploads/sites/3/2019/12/las-mejores-fotografias.jpg" />
        </div>
      </div>
    </article>
  )
}



export default Recomendados