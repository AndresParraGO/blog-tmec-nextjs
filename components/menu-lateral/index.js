

import React, {useState, useEffect} from 'react';

import Card from '../card'

import './index.css';

function MenuLateral( {allPosts} ) {
  const [input, setInput] = useState('un')

  const [newPosts, setNewPosts] = useState([])

  const searchPost = () => {
    const inputSearch = document.getElementById('inputMenuLateral')
    setInput(inputSearch.value)
  }


  const filter = (input) => {
    const postsSearch = []
    const postsFilters = allPosts.filter(post => {
      const separado = post.title.toLowerCase().split(' ')

      separado.forEach(el => {
        if(input.toLowerCase() === el.toLowerCase()) {
          postsSearch.push(post)
        }
      })
    })
    return postsSearch
  }


  useEffect(() => {
    setNewPosts(filter(input))
  }, [input])


  return (
    <aside className="menulateral" id="menulateral">
      <span className="menulateral__close" onClick={() => {
        document.getElementById('menulateral').style.left = '-100%'
      }}>X</span>

      <form className="menulateral__form" onSubmit={(event) => event.preventDefault()}>
        <h4 className="menulateral__form--title">Buscar</h4>  
        <input id="inputMenuLateral" className="menulateral__form--input" type="text" placeholder="Escribe aquí..." onChange={(event) => event.preventDefault()} />
        <button 
          type="submit" 
          className="btn menulateral__form--button"  
          onClick={() => {
            searchPost(event)
          }}>Buscar
        </button>
      </form>

      <section className="menulateral__posts">
        {
          newPosts.map(({ title, excerpt, coverImage, slug}, index) => {
       
            return (
              <Card
                title={title}
                key={slug}
                description={excerpt}
                img={coverImage}
                slug={slug}
              />
            )
            
          })
        }
      </section>
    </aside>
  );
}

export default MenuLateral;