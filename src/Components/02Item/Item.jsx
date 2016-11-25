import React { Component } from 'react'
import './Item.css'

//props needed:
// name
// url
// price
// condition
// description
// likes
// id

//functions needed:
// like button for each item

class Item extends Component {
  render() {
    return (
      <div className="rightDiv">
        <div className="saleItem">
          <p className="itemBox" className="itemTitle">
            {this.props.name}
          </p>
          <img className="itemBox" className="itemImage"
            src={this.props.url}>
          </img>
          <p className="itemBox" className="itemPrice">
            {this.props.price}
          </p>
          <p className="itemBox" className="itemCondition">
            {this.props.condition}
          </p>
          <p className="itemBox" className="itemDescription">
            {this.props.description}
          </p>
          <p className="itemBox" className="itemLikes">
            {this.props.likes}
          </p>
          <button onClick={() => this.props.likeFunc(this.props.id)}>Like This Item</button>
        </div>
      </div>
    );
  }
}

export default Item;
