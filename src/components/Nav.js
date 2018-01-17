import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
          <li><button>Log In</button></li>
          <li><button>Log out </button></li>
        </ul>
      </nav>
    )
  }
}

export default Nav
