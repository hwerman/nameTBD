import React, { Component } from 'react';
import './MyItemList.css'
import MyItem from '../02MyItem/MyItem.jsx';

//functions needed:
// function that selects specific item by index
// function that will allow user to edit details of an item (need to pass down)
// function that will allow user to delete an item (need to pass down)

class MyItemList extends Component{
  renderItems(){
    return this.props.items.map((item, index) =>
      <MyItem
        editFunc={this.props.editFunc}
        deleteFunc={this.props.deleteFunc}
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

componentWillMount(){
  this.props.getAllItems();
}

render(){
  return(
    <div className="rightDiv">
      {this.renderItems()}
    </div>
  )
}


export default MyItemList;

