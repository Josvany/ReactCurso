import React from 'react'
import { Link } from 'react-router-dom'

const WelcomePages = props => {
  return (
    <div>
      Welcome
      <div>
        <Link to="/main">Main</Link>
      </div>
    </div>
  )
}


export default WelcomePages
