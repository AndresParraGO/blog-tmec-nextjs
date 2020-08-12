
import React, {useState, useEffect} from 'react'

import PostsFilters from '../posts-filters/'

import './index.css'



function Search( {allPosts} ) {

  const [input, setInput] = useState('')
  const [hideSearch, sethideSearch] = useState(false)
  const [hideInputSearch, sethideInputSearch] = useState(false)
  const [posts, setPosts] = useState([])

  const searchPost = () => {
    const inputSearch = document.getElementById('inputSearch')
    setInput(inputSearch.value)
  }


  const filter = (input) => {
    const newPosts = []

    const postsFilters = allPosts.filter(post => {
      const separado = post.title.toLowerCase().split(' ')

      separado.forEach(el => {
        if(input === el) {
          newPosts.push(post)
        }
      })
    })
    return newPosts
  }


  useEffect(() => {
    setPosts(filter(input))
  }, [input])


  if(hideSearch) {
    return(<PostsFilters hideSearch={hideSearch} input={input} posts={posts} />)
  }


  return(!hideInputSearch
    ?
    <form className="container__search" onSubmit={(event) => event.preventDefault()}>
      <h4 className="search__title">Buscar</h4>  
      <input id="inputSearch" className="search" type="text" placeholder="Escribe aquí..." />
      <button 
        type="submit" 
        className="btn search__button"  
        onClick={() => {
          searchPost(event)
          sethideSearch(true)
        }}>Buscar
      </button>
      <span className="search__icon-close" onClick={() => sethideInputSearch(!hideInputSearch)}>x</span>
    </form>
    : ''
  )
}


export default Search