import React, { Component } from 'react';
import './AsideBStorefront.css';

class AsideBStorefront extends Component {

  render(){
    return (
      <div>
        <aside className="leftAside" id="asideThree">
          <h2 className="asideSub">Details:</h2>
            <p className="sellerUsername">
              {this.props.sellerUsername}'s Garage Sale</p>
            <address className="sellerUserAddress">
              Located at {this.props.sellerUserAddress}</address>
            <button id="messagesButton" onClick={}>
              MESSAGE THIS SELLER</button>
        </aside>
      </div>
    );
  }
}

export default AsideBStorefront;
