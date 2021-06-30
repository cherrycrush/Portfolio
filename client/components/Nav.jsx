import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
  return (
    <div>
      <nav>
        <ul className='nav-list'>
          <li>
            <Link className='nav-item' to ={'/'}>{props.author}</Link>
          </li>
          <li>
            <Link className='nav-item' to ={'/Projects'}>Projects</Link>
          </li>
          <li>
            <Link className='nav-item' to ={'/Contact'}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
