import React, { Component } from 'react'
import './App.css'
import FirstList from './components/FirstList'
import OtherList from './components/OtherList'

import Nav from './components/Nav'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Nav />
        <Switch>
          <Route exact path='/' component={FirstList} />
          <Route exact path='/otherlist' component={OtherList} />
        </Switch>
      </div>
    )
  }
}

export default App
