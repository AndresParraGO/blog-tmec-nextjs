
import React, {useState, useEffect} from 'react'

import Card from '../components/card.js'

import postsJSON from '../database/posts.json'


function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    setPosts(postsJSON.posts)
  }, [])

  return(
    <section className="posts">
      {
        posts.map(({ title, id, description, img, path }, index) => {
          return (
            <Card
              title={title}
              key={id}
              description={description}
              img={img}
              path={path}
            />
          ) 
        })
      }

      <style jsx>{`
        .posts {
          display: grid;
          grid-gap: 2em;
        }

        @media screen and (max-width: 650px) {
          .posts {
            grid-template-columns: repeat(1, 1fr);
          }
        }

        @media screen and (min-width: 960px) {
          .posts {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
      `}</style>
    </section>
  )
}


export default Posts