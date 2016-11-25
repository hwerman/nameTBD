import React, { Component } from 'react';
import './LoginSignup.css';

export default class LoginSignup extends Component {
  render() {
    return(
      <div id="loginSignup">
        <div id="login" className="loginModal">
          <h1>Login:</h1>
            <input onChange={this.props.trackLoginUsername} type="text" placeholder="username" />
            <input onChange={this.props.trackLoginPassword} type="text" placeholder="password" />
              <button onClick={this.props.postLogin} className="modalButton">Login</button>
        </div>
        <div id="dividingLine"></div>
        <div id="signup" className="loginModal">
          <h1>Signup:</h1>
            <input onChange={this.props.trackSignupUsername} type="text" placeholder="username" />
            <input onChange={this.props.trackSignupPassword} type="text" placeholder="signup" />
              <button onClick={this.props.postSignup} className="modalButton">Sign Up</button>
              <button onClick={this.props.hideLogin}>Cancel</button>
        </div>
      </div>
    )
  }
}
