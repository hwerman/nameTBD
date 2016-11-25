import React, { Component } from 'react';
import './CreateStore.css';

//functions needed to capture inputs for each new storefront

class CreateStore extends Component {

  render(){
    return(
      <div id="createStoreDiv">
        <h2 id="createStoreHeading">Create a storefront!</h2>
          <input className="uname" type="text" placeholder="Enter your grojj username." required></input>
          <input className="name" type="text" placeholder="What would you like to call your storefront?" required></input>
          <input className="address" type="text" placeholder="Enter your street address." required></input>
        <div className="smallLocations">
          <select name="borough" className="borough">
            <option value="" selected disabled>Select Borough</option>
            <option value="Brooklyn">Brooklyn</option>
            <option value="Queens">Queens</option>
            <option value="Bronx">Bronx</option>
            <option value="Manhattan">Manhattan</option>
            <option value="Staten Island">Staten Island</option>
          </select>
          <input className="zip" type="text" placeholder="ZIP" required></input>
        </div>
          <input id="directions" type="text" placeholder="Directions (optional)"></input>
          <input id="date" type="date"></input>
        <div id="startEnd">
          <input id="startTime" type="time" value="02:00 PM"></input>
          <input id="endTime" type="time"></input>
        </div>
        <div className="createOrCancel">
          <button id="createStoreButton">Create Store!</button>
          <button id="cancelStoreButton">Cancel!</button>
        </div>
    </div>
    )
  }
}

export default CreateStore;
