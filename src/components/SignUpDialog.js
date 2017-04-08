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

    return <div>
      <WelcomeDialog />
    </div>
  }
}
