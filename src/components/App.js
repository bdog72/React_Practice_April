import React, { Component } from 'react'
import App1 from './App1'
import Clock from './Clock'
import { Image, Jumbotron } from 'react-bootstrap'

class App extends Component {
  render () {
    return <div>
      <Jumbotron>
        <h1>Responsive Image with Bootstrap</h1>
        <Image className='image1' src='http://doglers.com/wp-content/gallery/beagle-puppies-photos/Beagle-Puppy-Photo.jpg' responsive />
      </Jumbotron>
      <App1 />
      <Clock />
    </div>
  }
}

export default App
