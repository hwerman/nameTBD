import React, { Component } from 'react';
import './AsideSMyStore.css';

class AsideSMyStore extends Component {

  render(){
    return (
      <div>
        <aside class="leftAside" id="asideSellerMyStore">
            <h1 className="asideSub">
              Welcome, {this.props.sellerUsername}!
            </h1>
            <img
              className="userProfPic"
              src={this.props.userProfPicURL}>
            </img>
            <h2 id="sellerMyStore">Your Storefront:</h2>
            <address className="sellerUserAddress">
              {this.props.sellerUserAddress}</address>
            <button id="addItemButton" onClick={}>
              ADD AN ITEM
            </button>
        </aside>
      </div>
    );
  }
}

export default AsideSMyStore;
