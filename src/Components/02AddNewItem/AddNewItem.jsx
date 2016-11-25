import React, { Component } from 'react';
import './AddNewItem.css';

//functions needed to capture inputs for each new storefront

class AddNewItem extends Component {
  render(){
    return(
      <div id="addItemDiv">
        <h2 id="addItemHeading">Add an item!</h2>
          <input class="name" type="text" placeholder="What is the name of your item?" required></input>
          <input class="itemU" type="text" placeholder="Enter a link to an image of your item." required></input>
        <div class="smallLocations">
          <select name="condi" class="condi">
            <option value="" selected disabled>Select Condition</option>
            <option value="Used">Used</option>
            <option value="BarelyUsed">Barely Used</option>
            <option value="New">New</option>
          </select>
          <select name="price" id="price">
            <option value="" selected disabled>Select Price Bracket</option>
            <option value="One">$</option>
            <option value="Two">$$</option>
            <option value="Three">$$$</option>
          </select>
        </div>
        <input id="desc" type="text" placeholder="Description of Item" required></input>
        <div class="createOrCancel">
          <button id="createItemButton">Add Item</button>
          <button id="cancelItemButton">Cancel</button>
        </div>
      </div>
    )
  }
}

export default AddNewItem;
