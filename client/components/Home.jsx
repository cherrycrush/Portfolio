import React from 'react'
import Bounce from 'react-reveal/Bounce'

const Home = () => {
  return (
    <>
      <Bounce bottom delay={200}>
        <main className='content'>
          <header className='home-header'>
          <img className='avatar' src='/images/mug.jpeg' alt='Mug'></img>
            <h1 className='header-title'>
              Aaron Emerson
            </h1>
            <p>Welcome to my personal website!</p>
          </header>
          <hr></hr>
          <br></br>
          <p>
            IT professional with three years of experience in tech support. Skilled in troubleshooting hardware and software issues, optimizing system performance, and implementing solutions that enhance user experience. Five years of experience in sales and tech, immigration, FMCG, automotive.
          </p>
        </main>
      </Bounce>
    </>
  )
}

export default Home
