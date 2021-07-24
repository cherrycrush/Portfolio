import React from 'react'
import Bounce from 'react-reveal/Bounce'

const Footer = (props) => {
  return (
    <Bounce right delay={200}>
      <footer>
        <ul>
          <li className='social'>Crafted by {props.author}</li>
          <li>
            <a href='https://www.linkedin.com/in/aaron-emerson21/'><i className='social fab fa-linkedin fa-2x'></i></a>
          </li>
          <li>
            <a href='https://github.com/cherrycrush'><i className='social fab fa-github-square fa-2x'></i></a>
          </li>
        </ul>
      </footer>
    </Bounce>
  )
}

export default Footer
