import React, { Component } from 'react'

export default class Login extends Component {
  function LoginButton (props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    )
  }
  function LogoutButton (props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    )
  }
  constructor (props) {
    super(props)
    this.handleLoginClick = this.handleloginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.state = {isLoggedIn: false}
  }
  handleLoginClick () {
    this.setState({isLoggedIn: true})
  }
  handleLogoutClick () {
    this.setState({isLoggedIn: false})
  }
  render () {
    const isLoggedIn = this.state.isLoggedIn
    let button = null
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }
    return <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </div>
  }
}
