import React, { Component } from 'react'

const numbers = [1, 2, 3, 4, 5]
const listitems = numbers.map((number) =>
  <li>{number}</li>
)
export default class Practice extends Component {
  render () {
    return <div>
      <ul className='list1'>{listitems}</ul>
    </div>
  }
}
