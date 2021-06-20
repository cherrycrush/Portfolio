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
            <li className='nav-item'
              active={activeItem === 'Home'}
              onClick={this.handleClick}>
              <Link to ={'/'}>Aaron Emerson</Link>
            </li>
            <li
              className='nav-item'
              active={activeItem === 'Projects'}
              onClick={this.handleClick}>
              <Link to ={'/Projects'}>Projects</Link>
            </li>
            <li
              className='nav-item'
              active={activeItem === 'Home'}
              onClick={this.handleClick}>
              <Link to ={'/'}>Item</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
