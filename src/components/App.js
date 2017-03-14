import React, { Component } from 'react'

import { Image, Jumbotron } from 'react-bootstrap'

class App extends Component {
  render () {
    return <div>
      <div>
        <Image className='image1' src='http://doglers.com/wp-content/gallery/beagle-puppies-photos/Beagle-Puppy-Photo.jpg' responsive />
      </div>
      <div>
        <Jumbotron>
          <Image className='image1' src='http://doglers.com/wp-content/gallery/beagle-puppies-photos/Beagle-Puppy-Photo.jpg' responsive />
        </Jumbotron>
      </div>
    </div>
  }
}

export default App
