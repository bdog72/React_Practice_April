import React, { Component } from 'react'
import App1 from './App1'
import Clock from './Clock'
import Toggle from './Toggle'
import Warning from './Warning'
import Practice from './Practice'
import NameForm from './NameForm'
import { Image, Jumbotron } from 'react-bootstrap'

class App extends Component {
  render () {
    return <div>
      <Jumbotron>
        <h1>Responsive Image with Bootstrap</h1>
        <Image className='image1' src='https://s-media-cache-ak0.pinimg.com/736x/ac/6e/2a/ac6e2a153df28eb73cf33921e61ca7a1.jpg' responsive />
      </Jumbotron>
      <App1 />
      <Clock />
      <Toggle />
      <br />
      <Warning />
      <br />
      <Practice />
      <br />
      <h1>Type a name and hit submit</h1>
      <NameForm />
    </div>
  }
}

export default App
