import React, { Component } from 'react';
import './ItemList.css';
import Item from '../02Item/Item.jsx';

//props needed:
// function that selects item by index
// function that gets all items
// like function

class ItemList extends Component{
  renderItems(){
    return this.props.items.map((item, index) =>
      <Item
        name={item.name}
        url={item.url}
        description={item.description}
        price={item.price}
        condition={item.condition}
        likes={item.likes}
        id={item.id}
        key={index}
      />
    )
  }
}

render(){
  return(
    <div className="rightDiv">
      {this.renderItems()}
    </div>
  )
}

export default ItemList;

