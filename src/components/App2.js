import React, { Component } from 'react'

export default class App2 extends Component {
  render () {
    function Contacts () {
      return <div className='Contatcts' />
    }

    function Chat () {
      return <div className='Chat' />
    }

    function SplitPane (props) {
      return (
        <div className='SplitPane'>
          <div className='SplitPane=left'>
            {props.left}
          </div>
          <div className='SplitPane-right'>
            {props.right}
          </div>
        </div>
      )
    }
    function App2 () {
      return (
        <SplitPane
          left={
            <Contacts />
          }
          right={
            <Chat />
          } />
      )
    }
    return <div>
      <App2 />
    </div>
  }
}
