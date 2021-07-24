import React, { useState, useEffect } from 'react'
import Bounce from 'react-reveal/Bounce'
import { fetchPosts } from '../api/apiClient'

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

  return (
    <>
      <Bounce bottom delay={500}>
        <main className='content'>
          <h2>{{ ...post[0] }.title}</h2>
          <hr></hr>
          <p>{{ ...post[0] }.paragraphs}</p>
        </main>
      </Bounce>
    </>
  )
}

export default Blog
