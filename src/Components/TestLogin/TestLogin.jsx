import React, { Component } from 'react';
import './TestLogin.css';

export default class TestLogin extends Component {
  render() {
    return(
      <div>
        <button id="testLogin" onClick={this.props.testLogin}>Testing!</button>
      </div>
    )
  }
}
