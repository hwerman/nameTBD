import React, { Component } from 'react';
import './StorefrontDD.css'

export default class StorefrontDD extends Component {

  test() {
    console.log('test')
  }

  render() {
    return(
      <button onClick={this.test}>test</button>
    )
  }
}
