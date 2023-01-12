import React, { useState, useEffect } from 'react'
import Bounce from 'react-reveal/Bounce'
import { fetchPosts } from '../api/apiClient'
import Post from './Post'

const Blog = () => {
  const [post, setPost] = useState({
    title: '',
    dateCreated: '',
    paragraphs: ''
  })

  useEffect(() => {
    fetchPosts()
      .then(res => {
        setPost(res)
        return null
      })
      .catch(err => console.log(err.message))
  }, [])

  console.log(post)
  return (
    <>
      <Bounce bottom delay={200}>
        <main className='content'>
        <article>
        <h2>Blog</h2>
        <h2>Blog coming soon!</h2>
            <h2>{{ ...post[1]}.title}</h2>
            <span>{{ ...post[1]}.dateCreated}</span>
            <hr></hr>
            <p>{{ ...post[1]}.paragraphs}</p>
          </article>
          <br></br>
          <article>
            <h2>{{ ...post[0]}.title}</h2>
            <span>{{ ...post[0]}.dateCreated}</span>
            <hr></hr>
            <p>{{ ...post[0]}.paragraphs}</p>
          </article>
          <br></br>
        </main>
      </Bounce>
    </>
  )
}

export default Blog
