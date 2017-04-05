import React, { Component } from 'react'

export default class App1 extends Component {
  render () {
    function Welcome (props) {
      return <h1>Hello, {props.name}</h1>
    }
    return <div>
      <div>
        <Welcome name='Sara' />
        <Welcome name='Cahal' />
        <Welcome name='Edite' />
      </div>

    </div>
  }
}
