import React, { Component } from 'react';
import MyItem from '../02MyItem/MyItem.jsx';

class MyItemList extends Component {

displayItems(collection){
    return collection.map((item, index) =>
        <article
            key={index}
            className={saleItem}
            onClick={}>
            <MyItem item={item} />
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

export default MyItemList;
