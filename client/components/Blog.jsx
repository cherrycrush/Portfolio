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
      .then(posts => {
        console.log(posts)
        setPosts(posts)
        return null
      })
      .catch(err => console.log(err.message))
  }, [])

  return (
    <>
      <Bounce bottom delay={500}>
        <main className='content'>
          <p>{postData.title}</p>
        </main>
      </Bounce>
    </>
  )
}

export default Blog
