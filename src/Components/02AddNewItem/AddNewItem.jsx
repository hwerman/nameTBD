import React, { Component } from 'react';
import './AddNewItem.css';


class AddNewItem extends Component {

  hideNewItem() {
    console.log('clicked')
    let newItem = document.querySelector('#addItemDiv')
    newItem.style.display = 'none';
  }

  render(){
    return(
      <div id="addItemDiv">
        <h2 id="addItemHeading">Let's add an item!</h2>

        <div className="fillOut">
          <input onChange={this.props.trackCreateItem} className="name" type="text" placeholder="What is the name of your item?" required></input>
          <input onChange={this.props.trackCreateItem} className="itemU" type="text" placeholder="Enter a link to an image of your item." required></input>
        <div className="smallLocations">
          <select onChange={this.props.trackCreateItem} name="condi" className="condi">
            <option value="" defaultValue disabled>Select Condition</option>
            <option value="Used">Used</option>
            <option value="BarelyUsed">Barely Used</option>
            <option value="New">New</option>
          </select>
          <select onChange={this.props.trackCreateItem} name="price" id="price">
            <option value="" defaultValue disabled>Select Price Bracket</option>
            <option value="One">$</option>
            <option value="Two">$$</option>
            <option value="Three">$$$</option>
          </select>
        </div>
        <input onChange={this.props.trackCreateItem} id="desc" type="text" placeholder="Description of Item" required></input>
        <div className="createOrCancel">
          <button onClick={this.props.postNewItem} id="createItemButton">Add Item</button>
          <button onClick={this.hideNewItem} id="cancelItemButton">Cancel</button>
        </div>
        </div>
      </div>
    )
  }
}

export default AddNewItem;
