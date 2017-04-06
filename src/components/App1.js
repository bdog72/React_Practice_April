import React, { Component } from 'react'

export default class App1 extends Component {
  render () {
    function Welcome (props) {
      return <h4>Hello, {props.name}</h4>
    }
    return <div>
      <div>
        <Welcome name='Brian' />
        <Welcome name='Sarah' />
        <Welcome name='Marci' />
      </div>
    </div>
  }
}
