import React { Component } from 'react'
import './MyItem.css'


import '.../layout/content.css'


class MyItem extends Component {
  render() {
    return (
        <div className="saleItem" id="itemOne">
          <p className="myItemBox myItemTitle">
          Sofa
          </p>
          <img className="myItemImage" src="http://bachenterprises.net/wp-content/uploads/2016/02/couch-800.png"></img>
          <p className="myItemBox myItemPrice">
          Price: $$
          </p>
          <p className="myItemBox myItemCondition">
          Condition: ||
          </p>
          <p className="myItemBox myItemDescription">
          Description: afdafaga.
          </p>

        </div>
      );
  }
}

export default MyItem;

