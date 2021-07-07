import React from 'react'
import Bounce from 'react-reveal/Bounce'

const Home = () => {
  return (
    <>
      <Bounce bottom delay={500}>
        <main className='content'>
          <header className='home-header'>
            <h1 className='header-title'>
              <img className='avatar' src='/images/mug.png' alt='avatar'></img>
              <br></br>
              Aaron Emerson
            </h1>
            <p>Full Stack Web Developer</p>
          </header>
          <br></br>
          <p>Kia ora, I'm Aaron. Currently making the leap into a new career in full stack web development. When I'm not working I'm outside, doing resistance training in the gym, collecting/restoring worn dress shoes and boots or hanging out with friends. I also like to game, used to play Quake Live competitively.</p>
        </main>
      </Bounce>
    </>
  )
}

export default Home
