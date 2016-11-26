import React, { Component } from 'react';
import './CreateStore.css';

class CreateStore extends Component {

  hideStoreButton() {
    let createStoreDiv = document.querySelector('#createStoreDiv');
    createStoreDiv.style.display = 'none';
  }

  render(){
    return(
      <div id="createStoreDiv">
        <h2 id="createStoreHeading">Create a storefront!</h2>
          <input onChange={this.props.trackCS} className="name" type="text" placeholder="What would you like to call your storefront?" required></input>
          <input onChange={this.props.trackCS} className="address" type="text" placeholder="Enter your street address." required></input>
        <div className="smallLocations">
          <select onChange={this.props.trackCS} name="borough" className="borough">
            <option value="" disabled>Select Borough</option>
            <option value="Brooklyn">Brooklyn</option>
            <option value="Queens">Queens</option>
            <option value="Bronx">Bronx</option>
            <option value="Manhattan">Manhattan</option>
            <option value="Staten Island">Staten Island</option>
          </select>
          <input onChange={this.props.trackCS} className="zip" type="text" placeholder="ZIP" required></input>
        </div>
          <input onChange={this.props.trackCS} id="directions" type="text" placeholder="Directions (optional)"></input>
          <input onChange={this.props.trackCS} id="date" type="date" min="2016-11-25"></input>
        <div id="startEnd">
          <input onChange={this.props.trackCS} id="startTime" type="time"></input>
          <input onChange={this.props.trackCS} id="endTime" type="time"></input>
        </div>
        <div className="createOrCancel">
          <button onClick={this.props.postNewStorefront} id="createStoreButton">Create Store!</button>
          <button onClick={this.hideStoreButton} id="cancelStoreButton">Cancel!</button>
        </div>
    </div>
    )
  }
}

export default CreateStore;
