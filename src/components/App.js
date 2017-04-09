import React, { Component } from 'react'
import App1 from './App1'
import Clock from './Clock'
import Toggle from './Toggle'
import Warning from './Warning'
import Practice from './Practice'
import NameForm from './NameForm'
import Essay from './Essay'
import FlavorForm from './FlavorForm'
import Reservation from './Reservation'
import Calculator from './Calculator'
import Calculator1 from './Calculator1'
import SignUpDialog from './SignUpDialog'
import App2 from './App2.js'
import FilterableProductTable from './FilterableProductTable'
import { Image, Jumbotron } from 'react-bootstrap'

class App extends Component {
  render () {
    return <div>
      <Jumbotron>
        <h1>Responsive Image with Bootstrap</h1>
        <Image className='image1' src='https://s-media-cache-ak0.pinimg.com/736x/ac/6e/2a/ac6e2a153df28eb73cf33921e61ca7a1.jpg' responsive />
      </Jumbotron>
      <div className='border'>
        <App1 />
      </div>
      <br />
      <br />
      <div className='border'>
        <Clock />
      </div>
      <br />
      <br />
      <div className='border'>
        <Toggle />
      </div>
      <br />
      <br />
      <div className='border'>
        <Warning />
      </div>
      <br />
      <div className='border'>
        <Practice />
      </div>
      <br />
      <div className='border'>
        <h1>Type a name and hit submit</h1>
        <NameForm />
      </div>
      <br />
      <div className='border'>
        <Essay />
      </div>
      <br />
      <br />
      <div className='border'>
        <FlavorForm />
      </div>
      <br />
      <br />
      <div className='border'>
        <Reservation />
      </div>
      <br />
      <br />
      <div className='border'>
        <Calculator />
      </div>
      <br />
      <br />
      <div className='border'>
        <Calculator1 />
      </div>
      <br />
      <br />
      <div className='border'>
        <SignUpDialog />
      </div>
      <br />
      <br />
      <div className='border'>
        <App2 />
      </div>
      <br />
      <br />
      <div className='border'>
        <FilterableProductTable products={PRODUCTS} />
      </div>
    </div>
  }
}

var PRODUCTS = [
  {category: 'Shoes', price: '$49.99', stocked: true, name: 'Nike'},
  {category: 'Shoes', price: '$39.99', stocked: true, name: 'Addidas'},
  {category: 'Shoes', price: '$59.99', stocked: false, name: 'Fila'},
  {category: 'Electronics', price: '$399.99', stocked: true, name: 'Ipad'},
  {category: 'Electronics', price: '$199.99', stocked: false, name: 'Ipad Mini'},
  {category: 'Electronics', price: '$599.99', stocked: true, name: 'Iphone 6'}
]

export default App
