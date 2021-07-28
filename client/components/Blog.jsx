import React, { useState, useEffect } from 'react'
import Bounce from 'react-reveal/Bounce'
import { fetchPosts } from '../api/apiClient'

const Blog = () => {
  const [posts, setPosts] = useState({
    id: '',
    title: '',
    dateCreated: '',
    paragraphs: ''
  })

  useEffect(() => {
    fetchPosts()
      .then(res => {
        setPosts(res)
        console.log(res)
        return null
      })
      .catch(err => console.log(err.message))
  }, [])

  return (
    <>
      <Bounce bottom delay={200}>
        <main className='content'>
          <article>
            <p>{{ ...posts }.id}</p>
            <h2>{{ ...posts }.title}</h2>
            <span>{{ ...posts[0] }.dateCreated}</span>
            <hr></hr>
            <p>{{ ...posts[0] }.paragraphs}</p>
          </article>
          <br></br>
          <article>
            <h2>{{ ...posts[1] }.title}</h2>
            <span>{{ ...posts[1] }.dateCreated}</span>
            <hr></hr>
            <p>{{ ...posts[1] }.paragraphs}</p>
          </article>
        </main>
      </Bounce>
    </>
  )
}

export default Blog
