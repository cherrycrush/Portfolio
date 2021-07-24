import React from 'react'
import { Link } from 'react-router-dom'
import Bounce from 'react-reveal/Bounce'

const Nav = (props) => {
  return (
    <div>
      <Bounce left delay={200}>
        <ul className='nav'>
          <div className='nav-left'>
            <li>
              <Link className='nav-item' to ={'/'}>{props.author}</Link>
            </li>
            <li>
              <a className='nav-item' href='https://www.linkedin.com/in/aaron-emerson21/'><i className='fab fa-linkedin fa-2x'></i></a>
            </li>
            <li>
              <a className='nav-item' href='https://github.com/cherrycrush'><i className='fab fa-github-square fa-2x'></i></a>
            </li>
          </div>
          <div className='nav-right'>
            <li>
              <Link className='nav-item' to ={'/Blog'}>{props.blog}</Link>
            </li>
            <li>
              <Link className='nav-item' to ={'/Projects'}>{props.projects}</Link>
            </li>
          </div>
        </ul>
      </Bounce>
    </div>
  )
}

export default Nav
