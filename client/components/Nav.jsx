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
              <Link className='nav-item' to ={'/'}><i class="fa-sharp fa-solid fa-house"></i></Link>
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
