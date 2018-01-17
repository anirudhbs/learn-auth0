import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { login, logout } from '../AuthService'

import '../App.css'

class Nav extends Component {
  render () {
    return (
      <nav>
        <div>
          <Link to='/'>Home</Link>
        </div>
        <ul>
          <li> <Link to='/'>Home</Link> </li>
          <li> <Link to='/otherlist'>Other List</Link> </li>
        </ul>
        <ul>
          <li><button onClick={() => login()}>Log In</button></li>
          <li><button onClick={() => logout()}>Log out</button></li>
        </ul>
      </nav>
    )
  }
}

export default Nav
