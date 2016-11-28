import React, { Component } from 'react';
import './SearchDD.css'

export default class SearchDD extends Component {

  render() {
    return(
      <div>
        <div className="nButton" onClick={this.props.showSearchInput}>
          Search
        </div>
        <div id="searchInput">
          <input onChange={this.props.trackSearchInput} type="text" placeholder="search" />
          <button onClick={this.props.postSearchZip}>Search</button>
        </div>
      </div>
    )
  }
}
