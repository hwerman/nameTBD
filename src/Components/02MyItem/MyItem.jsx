import React { Component } from 'react'
import './MyItem.css'

//props needed:
// name
// url
// price
// condition
// description
// likes
// id

//functions needed:
// for the edit button
// for the delete button

class MyItem extends Component {
  render() {
    return (
      <div className="rightDiv">
        <div className="saleItem">
          <p className="myStoreMyItems" className="myItemTitle">
            {this.props.name}
          </p>
          <img className="myStoreMyItems" className="myItemImage"
            src={this.props.url}>
          </img>
          <p className="myStoreMyItems" className="myItemPrice">
            {this.props.price}
          </p>
          <p className="myStoreMyItems" className="myItemCondition">
            {this.props.condition}
          </p>
          <p className="myStoreMyItems" className="myItemDescription">
            {this.props.description}
          </p>
          <p className="myStoreMyItems" className="myItemLikes">
            {this.props.likes}
          </p>
          <button onClick={() => this.props.editFunc(this.props.id)}>Edit Item</button>
          <button onClick={() => this.props.deleteFunc(this.props.id)}>Delete Item</button>
        </div>
      </div>
    );
  }
}

export default MyItem;
