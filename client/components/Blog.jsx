import React, { useState, useEffect } from 'react'
import Bounce from 'react-reveal/Bounce'
import { fetchPosts } from '../api/apiClient'

const Blog = (props) => {
  const [postData, setPosts] = useState({
    title: '',
    dateCreated: '',
    paragraphs: ''
  })

  useEffect(() => {
    fetchPosts()
      .then(res => {
        setPosts(res)
        return null
      })
      .catch(err => console.log(err.message))
  }, [])

  return (
    <>
      <Bounce bottom delay={500}>
        <main className='content'>
          <p>Blog content coming soon.</p>
          <h2>{postData.title}</h2>
          <p>{postData.paragraphs}</p>
        </main>
      </Bounce>
    </>
  )
}

export default Blog
