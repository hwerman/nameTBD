import React, { Component } from 'react';
import './StorefrontDD.css';

export default class StorefrontDD extends Component {

  showCreateStoreDiv() {
    let createStore = document.querySelector('#createStoreDiv');
    createStore.style.display = 'block';
  }

  showMyStoreDiv() {
    let myStoreDiv = document.querySelector('#asideSellerMyStore')
    myStoreDiv.style.display = 'block';
    let rightDiv = document.querySelector('#rightDiv')
    rightDiv.style.display = 'block';
  }

  renderStorefrontNavButton() {
    let storefrontNavButton = document.querySelector('#testID');
    if (this.props.loggedIn && this.props.hasStorefront) {
      return(
        <div onClick={this.showMyStoreDiv}>Edit My Storefront</div>
      )
    } else if (this.props.loggedIn) {
      return(
        <div onClick={this.showCreateStoreDiv}>Create My Storefront</div>
      )
    } else {
      return(
        <div onClick={this.props.showLogin}>Create My Storefront</div>
      )
    }
  }

  render() {
    return(
      <div>
        <div className="nButton" id="testID">
          {this.renderStorefrontNavButton()}
        </div>
      </div>
    )
  }
}
