import React from 'react'
import Bounce from 'react-reveal/Bounce'

const Projects = () => {
  return (
    <>
      <Bounce bottom delay={500}>
        <main className='content'>
          <section className='image-card'>
            <img className='thumbnail' src='#' alt='Card image'></img>
            <h1 className='title'>Starships in React</h1>
          </section>
        </main>
      </Bounce>
    </>
  )
}

export default Projects
