import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
  return (
    <div>
      <nav>
        <ul>
          <div className='nav-left'>
            <li>
              <Link className='nav-item' to ={'/'}>{props.author}</Link>
              <li className='title'><a href='http://github.com/cherrycrush'>GitHub</a></li>
            </li>
          </div>
          <div className='nav-right'>
            <li>
              <Link className='nav-item' to ={'/Blog'}>Blog</Link>
            </li>
            <li>
              <Link className='nav-item' to ={'/Projects'}>Projects</Link>
            </li>
            <li>
              <Link className='nav-item' to ={'/Contact'}>Contact</Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
