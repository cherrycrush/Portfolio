import React from 'react'
import Slide from 'react-reveal/Slide'

const Post = (props) => {
  return (
    <>
      <Slide left delay={300}>
        <main className='content'>
          <article>
            <h2>{props.title}</h2>
          </article>
        </main>
      </Slide>
    </>
  )
}

export default Post
