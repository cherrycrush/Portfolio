import React from 'react'
import { useHistory } from 'react-router-dom'

export default function HomeButton () {
  const history = useHistory()

  function handleClick () {
    history.push('/')
  }
  return (
    <button type='button' onClick={handleClick}>
      Go home
    </button>
  )
}
