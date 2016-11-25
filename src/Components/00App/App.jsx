import React, { Component } from 'react';
import LoginSignup from '../01LoginSignup/LoginSignup.jsx';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      loginFormUsername: '',
      loginFormPassword: '',
      signupFormUsername: '',
      signupFormPassword: '',
    };
  }

  showLogin() {
    let showLogin = document.querySelector('#loginSignup');
    showLogin.style.display = 'block';
    console.log(showLogin);
  }

  hideLogin() {
    let showLogin = document.querySelector('#loginSignup');
    showLogin.style.display = 'none';
  }

  trackLoginUsername(e) {
    this.setState({
      loginFormUsername: e.target.value
    })
  }

  trackLoginPassword(e) {
    this.setState({
      loginFormPassword: e.target.value
    })
  }

  trackSignupUsername(e) {
    this.setState({
      signupFormUsername: e.target.value
    })
    console.log(e.target.value)
  }

  trackSignupPassword(e) {
    this.setState({
      signupFormPassword: e.target.value
    })
    console.log(e.target.value)
  }

  postLogin() {
    console.log('logged in!')
  }

  postSignup(e) {
    console.log(this.state.signupFormUsername, this.state.signupFormPassword)
    return fetch('/user/signup', {
      headers: {
        'Content-Type': 'application/JSON'
      },
      method: 'POST',
      body: JSON.stringify({
        'username': this.state.signupFormUsername,
        'password': this.state.signupFormPassword
      })
    })
    .then(() => {
      console.log('signedup')
    })

  }

  render(){
    return (
      <div>
        <header>
          <h1>Grojj.</h1>
          <button onClick={this.showLogin}>Login or Sign Up</button>
          <nav>
            <div className="nButton">Search
              <input type="text" placeholder="search"/>
              <button>Go!</button>
            </div>
            <div className="nButton">myStoreFront</div>
            <div className="nButton">Messages</div>
              <LoginSignup
                hideLogin={this.hideLogin}
                trackLoginUsername={this.trackLoginUsername.bind(this)}
                trackLoginPassword={this.trackLoginPassword.bind(this)}
                trackSignupUsername={this.trackSignupUsername.bind(this)}
                trackSignupPassword={this.trackSignupPassword.bind(this)}
                postLogin={this.postLogin}
                postSignup={this.postSignup.bind(this)}
              />
          </nav>
        </header>
        <main>
        </main>
        <footer>
          <div>copyright nonsense, about us</div>
        </footer>
      </div>
    );
  }
}

export default App;
