import React from 'react'
import Bounce from 'react-reveal/Bounce'

const Footer = (props) => {
  return (
    <Bounce right delay={200}>
      <footer>
        <p>
          Crafted by {props.author}
        </p>
      </footer>
    </Bounce>
  )
}

export default Footer