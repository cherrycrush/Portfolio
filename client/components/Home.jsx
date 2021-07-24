import React from 'react'
import Bounce from 'react-reveal/Bounce'

const Home = () => {
  return (
    <>
      <Bounce bottom delay={200}>
        <main className='content'>
          <header className='home-header'>
            <h1 className='header-title'>
              <img className='avatar' src='/images/mug.png' alt='avatar'></img>
              <br></br>
              Aaron Emerson
            </h1>
            <p>Full Stack Web Developer</p>
          </header>
          <hr></hr>
          <br></br>
          <p>
            <strong>Kia ora!</strong> I'm Aaron. Currently making the leap into a new career in full stack web development. When I'm not working I'm outside, doing resistance training in the gym, collecting/restoring dress shoes and boots or hanging out with friends.
          </p>
          <br></br>
          <p>
            I am a web developer with an interest in crafting beautiful things. I have always had an interest in expressing myself creatively through building levels for games, creating sleek and responsive web pages.
            My working background has afforded me different experiences and challenges that have helped me grow as a person and with a growth mindset that will continue throughout my life.
          </p>
        </main>
      </Bounce>
    </>
  )
}

export default Home
