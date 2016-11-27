import React, { Component } from 'react';
import './AsideSMyStore.css';

class AsideSMyStore extends Component {

  render(){
    return (
      <div>
        <aside className="leftAside" id="asideSellerMyStore">
          <h1 className="asideSub">Welcome, {this.props.currentUser}!</h1>
          <h2 id="sellerMyStore">Your Storefront:</h2>
          <div>address: {this.props.currentStorefront.address}</div>
          <div>date: {this.props.currentStorefront.sale_date}</div>
          <div>start time: {this.props.currentStorefront.startTime}</div>
          <div>end time: {this.props.currentStorefront.endTime}</div>
          <button>edit</button>
          <button>delete</button>
        </aside>
      </div>
    );
  }
}

export default AsideSMyStore;
