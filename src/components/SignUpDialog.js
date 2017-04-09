import React, { Component } from 'react'

export default class SignUpDialog extends Component {
  render () {
    function FancyBorder (props) {
      return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
          {props.children}
        </div>
      )
    }

    function WelcomeDialog () {
      return (
        <FancyBorder color='blue'>
          <h1 className='Dialog-title'>
            Welcome
          </h1>
          <p className='Dialog-message'>
            Thank You for visiting
          </p>
        </FancyBorder>
      )
    }

    function Dialog (props) {
      return (
        <FancyBorder color='blue'>
          <h1 className='Dialog-title'>
            {props.title}
          </h1>
          <p className='Dialog-message'>
            {props.message}
          </p>
          {props.children}
        </FancyBorder>
      )
    }

    class SignUpDialog1 extends React.Component {
      constructor (props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSignUp = this.handleSignUp.bind(this)
        this.state = {login: ''}
      }

      render () {
        return (
          <Dialog title='Mars Program'
            message='What should we call you'>
            <input value={this.state.login}
              onChange={this.handleChange} />
            <button onClick={this.handleSignUp}>
                Sign me up!
              </button>
          </Dialog>
        )
      }

      handleChange (e) {
        this.setState({login: e.target.value})
      }
      handleSignUp (e) {
        alert(`Welcome aboard, ${this.state.login}!`)
      }
}
    return <div>
      <WelcomeDialog />
      <br />
      <SignUpDialog1 />
    </div>
  }
}
