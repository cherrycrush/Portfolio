import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
  state = {}
  handleClick = (evt, { name }) => this.setState({ activeItem: name })

  render () {
    const { activeItem } = this.state

    return (
      <div>
        <nav>
          <ul className='nav-list'>
            <li
              active={activeItem === 'Home'}
              onClick={this.handleClick}>
              <Link className='nav-item' to ={'/'}>Aaron Emerson</Link>
            </li>
            <li
              active={activeItem === 'Projects'}
              onClick={this.handleClick}>
              <Link className='nav-item' to ={'/Projects'}>Projects</Link>
            </li>
            <li
              active={activeItem === 'Home'}
              onClick={this.handleClick}>
              <Link className='nav-item' to ={'/Contact'}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
