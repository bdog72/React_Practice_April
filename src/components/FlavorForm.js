import React, { Component } from 'react'

export default class FlavorForm extends Component {
  constructor (props) {
    super(props)
    this.state = {value: 'coconut'}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({value: event.target.value})
  }

  handleSubmit (event) {
    alert('Your favorite flavor is: ' + this.state.value)
  }

  render () {
    return <div>
      <form onSubmit={this.handleSubmit}>
        <label>
        Pick your favorite flavor:
        <select value={this.state.value} onChange={this.handleChange}>
          <option value='grapefruit'>Grapefruit</option>
          <option value='lime'>Lime</option>
          <option value='coconut'>Coconut</option>
          <option value='mango'>Mango</option>
          <option value='strawberry'>Strawberry</option>
          <option value='Watermelon'>Watermelon</option>
        </select>
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  }
}
