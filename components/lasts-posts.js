
import React, {useState, useEffect} from 'react'
import Link from 'next/link'

import Card from './card.js'

import postsJSON from '../database/posts.json'

function LastsPosts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    setPosts(postsJSON.posts)
  }, [])

  // if(!posts) {
  //   return <span>Loading ...</span>
  // }


  return (
    <div className="posts container">
      <h1>Ultimos Posts</h1>
      <section className="lasts-posts">
        {
          posts.map(({ title, id, description, img, path }, index) => {
            if (index < 3) {
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

      <div className="center">
        <Link href="/blog">
          <a className="btn">Más Posts</a>
        </Link>
      </div>

      <style jsx>{`
        .posts {
          margin-top:4em;
          margin-bottom:4em;
        }


        .posts .btn {
          padding: 0 2em;
          margin-top: 2em;
          font-size: 1.2em;
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