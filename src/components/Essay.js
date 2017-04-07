import React, { Component } from 'react'

export default class Essay extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 'Please write something and hit submit'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({value: event.target.value})
  }

  handleSubmit (event) {
    alert('An essay was submitted: ' + this.state.value)
    event.preventDefault()
  }

  render () {
    return <div>
      <form onSubmit={this.handleSubmit}>
        <label>
        Name:
        <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  }
}
