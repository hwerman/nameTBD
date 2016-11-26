import React, { Component } from 'react';
import './StorefrontDD.css';
import '../00App/App.css';

export default class StorefrontDD extends Component {

  test() {
    let createStore = document.querySelector('#createStoreDiv');
    createStore.style.display = 'block';
  }

  render() {
    return(
      <div className="nButton" onClick={this.test}>Create Storefront</div>
    )
  }
}
