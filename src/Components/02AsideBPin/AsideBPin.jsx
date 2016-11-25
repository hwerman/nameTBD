import React, { Component } from 'react';
import './AsideBPin.css';

class AsideBPin extends Component {

  render(){
    return (
      <div>
        <aside className="leftAside" id="asideTwo">
          <h2 className="asideSub">Details:</h2>
            <p className="sellerUsername">
              {this.props.sellerUsername}'s Garage Sale</p>
            <address className="sellerUserAddress">
              Located at {this.props.sellerUserAddress}</address>
            <img></img>
            <button id="garageSaleButton" onClick={}>
              See what's being sold at this garage sale</button>
        </aside>
      </div>
    );
  }
}

export default AsideBPin;
