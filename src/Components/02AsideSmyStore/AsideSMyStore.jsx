import React, { Component } from 'react';
import './AsideSMyStore.css';

class AsideSMyStore extends Component {

  render(){
    return (
      <div>
        <aside className="leftAside" id="asideSellerMyStore">
            <h1 className="asideSub">Welcome, {this.props.currentUser}!</h1>
            <h2 id="sellerMyStore">Your Storefront:</h2>
        </aside>
      </div>
    );
  }
}

export default AsideSMyStore;
