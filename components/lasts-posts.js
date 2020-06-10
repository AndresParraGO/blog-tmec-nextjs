
import React, {useState, useEffect} from 'react'
import Link from 'next/link'

import getData from '../services/api.js'

import Card from './card.js'


function LastsPosts() {
  const [posts, setPosts] = useState([])

  async function data() {
    const dataFetch = await getData()
    setPosts(dataFetch.data.posts.reverse())
  }

  useEffect(() => {
    data()
  }, [])

  if(!posts) {
    return <span>Loading ...</span>
  }

  let i = 0

  return (
    <div className="posts container">
      <h1>Ultimos Posts</h1>
      <section className="lasts-posts">
        {
          posts.map(({ title, id, description, img, path }) => {
            i++
            if(i <= 3) {
              return (
                <Card
                  title={title}
                  key={id}
                  description={description}
                  img={img}
                  path={path}
                />
              )
            }
          })
        }
      </section>

      <style jsx>{`
        .posts {
          margin-top:4em;
          margin-bottom:4em;
        }

        .lasts-posts {
          display: grid;
          grid-gap: 2em;
        }

        @media screen and (max-width: 650px) {
          grid-template-columns: repeat(1, 1fr);
        }

        @media screen and (min-width: 960px) {
          grid-template-columns: repeat(3, 1fr);
        }
      `}</style>
    </div>
  );
}


export default LastsPosts