import React from 'react'
import Bounce from 'react-reveal/Bounce'

const Projects = () => {
  const swProject = ['JavaScript', 'React', 'CSS', 'HTML']
  const loyaltyProject = ['JavaScript', 'React', 'Semantic UI', 'Passport.JS']

  return (
    <>
      <Bounce bottom delay={200}>
        <main className='content'>
          <h1>Projects</h1>
          <hr></hr>
          <section className='image-card'>
            <h2 className='title'>React Star Wars</h2>
            <img className='thumbnail' src='./images/react-sw.png' alt='Project thumbnail'></img>
            <br></br>
            <p className='description'>
              Inspired by Star Wars! A React app that calls an external API (swapi) and retrieves the JSON data and displays that data inside React components.
              <br></br>
              <a href='https://github.com/cherrycrush/React-Starwars'> View code</a>
            </p>
            <div className='container'>
              {swProject.map((item, index) => (
                <div key={index} className='info-box'>{item}</div>
              ))}
            </div>
          </section>
          <section className='image-card'>
            <h2 className='title'>Loyalty Card Wallet</h2>
            <iframe width="350" height="300" src="https://www.youtube.com/embed/1KplKq0V_Kg" allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <br></br>
            <p className='description'>
              A project I created with a group at EDA. An idea was pitched to make a loyalty card app wallet that stores your personal loyalty cards in one place! I helped create the front-end using Semantic UI and designing some of the React components.
              <br></br>
              <a href='https://github.com/cherrycrush/Loyal-tea'> View code</a>
            </p>
            <div className='container'>
              {loyaltyProject.map((item, index) => (
                <div key={index} className='info-box'>{item}</div>
              ))}
            </div>
          </section>
          <section className='image-card'>
            <h2 className='title'>EDA Learning Blog</h2>
            <p className='description'>A blog created for my learning journey throughout EDA. I talk about tools and techniques learned, and exploring my growth mindset! I created it with plain HTML, CSS and JavaScript.
              <br></br>
              <a href='https://cherrycrush.github.io'> View Blog</a>
            </p>
          </section>
          <section className='image-card'>
            <h2 className='title'>NFT Project</h2>
							<p className='description'>A work in progress, check back soon!
							<br></br>
							<a href='#'>View code</a>
							</p>
          </section>
        </main>
      </Bounce>
    </>
  )
}

export default Projects
