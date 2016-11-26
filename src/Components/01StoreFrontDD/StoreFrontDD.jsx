import React, { Component } from 'react';
import './StorefrontDD.css';
import '../00App/App.css';

export default class StorefrontDD extends Component {

  show() {
    let createStore = document.querySelector('#createStoreDiv');
    createStore.style.display = 'block';
  }

  render() {
    return(
      <div onClick={this.show}>Create Storefront</div>
      <div className="nButton" id="sfButton" onClick={this.test}>Create Storefront</div>
    )
  }
}
