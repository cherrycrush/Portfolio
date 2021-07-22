import React from 'react'
import Bounce from 'react-reveal/Bounce'

const Projects = () => {
  return (
    <>
      <Bounce bottom delay={500}>
        <main className='content'>
          <section className='image-card'>
            <img className='thumbnail' src='./images/react-sw.png' alt='Card image'></img>
            <h2 className='title'>Starships in React</h2>
            <br></br>
            <p className='description'>
              A project I made during bootcamp that calls an external API and retrieves the data via JSON and displays it inside react components.
            </p>
          </section>
        </main>
      </Bounce>
    </>
  )
}

export default Projects
