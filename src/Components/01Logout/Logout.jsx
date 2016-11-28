import React, { Component } from 'react';
// import './Logout.css';
import './MattLogout.css';

export default class Logout extends Component {
  render() {
    return(
      <div>
        <button id="logoutButton" onClick={this.props.logout}>Logout</button>
      </div>
    )
  }
}
