

import React from 'React'


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



      <style jsx>{`
        
        .recomendados {
          border: 5px solid red;
          height: 300px;
        }


        .recomendados__item {
          display: inline; 
          width: 100px;
        }

        .recomendados__item img {
          width: 100%;
        }


      `}</style>
    </article>
  )
}



export default Recomendados
