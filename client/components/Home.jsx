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
            Technically proficient IT professional with 3 years of experience in tech support and system administration. Skilled in troubleshooting hardware and software issues, optimizing system performance, and implementing solutions that enhance user experience. Strong communicator with a background in customer service, sales, and automotive technology, enabling effective problem-solving and client interactions. Passionate about continuous learning, staying up to date with industry trends, and leveraging the principles of kaizen for ongoing skill development.
          </p>
        </main>
      </Bounce>
    </>
  )
}

export default Home
