import React, { Component } from 'react'
import { getAccessToken } from '../AuthService'

class FirstList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      listItems: []
    }
  }

  componentDidMount () {
    this.fetchList()
  }

  fetchList () {
    const url = 'http://localhost:8080'
    fetch(url + '/list', {
      method: 'get',
      headers: {
        Authorization: `Bearer ${getAccessToken()}`
      }
    })
    .then((results) => results.json())
    .then((data) => {
      this.setState({ listItems: data })
    })
    .catch(function (error) {
      console.log('fail', error)
    })
  }

  render () {
    return (
      <div>
        <ul>
          {
            this.state.listItems.map((cur) => <li key={cur}>{cur}</li>)
          }
        </ul>
      </div>
    )
  }
}

export default FirstList
