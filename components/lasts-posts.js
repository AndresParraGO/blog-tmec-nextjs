
import React, {useState, useEffect} from 'react'
import Link from 'next/link'

import getData from '../services/api.js'


function LastsPosts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://us-central1-tmec-api.cloudfunctions.net/api')
      .then(res => res.json())
      .then(data => setPosts(data.data.posts))
      .catch(() => {
          setPosts({
              done: true,
              success: false
          })
        })
  }, [])

  if(posts === []) {
    return <span>Loading ...</span>
  }


  return(
    <div className="container">
      {
        posts.map(({title, id}) => {
          return <h1 key={id}>{title}</h1>
        })
      }
    </div>
  )
}


export default LastsPosts