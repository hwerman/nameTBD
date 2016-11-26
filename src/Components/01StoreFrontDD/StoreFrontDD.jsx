import React, { Component } from 'react';
import './StorefrontDD.css';

export default class StorefrontDD extends Component {

  show() {
    let createStore = document.querySelector('#createStoreDiv');
    createStore.style.display = 'block';
  }

  render() {
    return(
      <div className="nButton" id="sfButton" onClick={this.show}>Create Storefront</div>
    )
  }
}
