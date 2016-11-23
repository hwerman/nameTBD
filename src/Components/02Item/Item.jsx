import React, { Component } from 'react';
import './Item.css';
import '.../layout.content.css';

class Item extends Component {

  render(){

    return (
      <div className="saleItem" id="itemOne">
            <p className="itemBox itemTitle">
            Sofa
            </p>
            <img className="itemImage" src="http://bachenterprises.net/wp-content/uploads/2016/02/couch-800.png"></img>
            <p className="itemBox itemPrice">
            Price: $$
            </p>
            <p className="itemBox itemCondition">
            Condition: ||
            </p>
            <p className="itemBox itemDescription">
            Description: This is an incredibly cozy blue couch. You know you want it.
            </p>
        </div>
    );
  }

}

export default Item;
