import React, { Component } from 'react';

import Item from '../02Item/Item.jsx';

class ItemList extends Component {

displayItems(collection){
    return collection.map((item, index) =>
        <article
            key={index}
            className={saleItem}
            onClick={}>
            <Item item={item} />
        </article>
    )
}

  render(){
    return (
      <div className="rightDiv">
            {this.displayItems(this.props.collection)}
        </div>
    );
  }
}

export default ItemList;
