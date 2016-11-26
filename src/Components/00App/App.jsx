import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LoginSignup from '../01LoginSignup/LoginSignup.jsx';
import TestLogin from '../TestLogin/TestLogin.jsx';
import Logout from '../01Logout/Logout.jsx';
import CreateStore from '../02CreateStore/CreateStore.jsx';
import StorefrontDD from '../01StorefrontDD/StorefrontDD.jsx';
import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      address: 'time square address',
      loggedIn: false,
      loginFormUsername: '',
      loginFormPassword: '',
      signupFormUsername: '',
      signupFormPassword: '',
      currentToken: '',
      createStorefront: {
        name: '',
        address: '',
        borough: '',
        zip: '',
        directions: '',
        sale_date: '',
        startTime: '',
        endTime: '',
      }
    };
  }

  showLogin() {
    let showLogin = document.querySelector('#loginSignup');
    showLogin.style.display = 'block';
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
  };

  trackSignupUsername(e) {
    this.setState({
      signupFormUsername: e.target.value
    })
  };

  trackSignupPassword(e) {
    this.setState({
      signupFormPassword: e.target.value
    })
  };

  postSignup() {
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
    });
  }

  postLogin() {
    return fetch('/user/login', {
      headers: {
        'Content-Type': 'application/JSON'
      },
      method: 'POST',
      body: JSON.stringify({
        'username': this.state.loginFormUsername,
        'password': this.state.loginFormPassword
      })
    })
    .then(r => r.json())
    .then((data) => {
      this.setState({
        currentToken: data
      })
    })
    .then( () => {
      this.setState({
        loggedIn: true,
      })
    })
    .then( () => {
      console.log('logged in')
    })
    .catch(error => console.log(error))
  }

  logout() {
    console.log('logging out')
    this.setState({
      loggedIn: false,
      currentToken: '',
    })
    console.log('logged out')
  };

  testLogin() {
    return fetch('/api/items', {
      headers: {
        'Content-Type': 'application/JSON',
        'Authorization': 'Bearer ' + this.state.currentToken
      },
    })
    .then(r=> r.json())
    .then((data) => {
      console.log(data)
    })
    .then(() => {
      console.log(this.state.loggedIn)
    })
    .catch(error => console.log(error))
  };

  trackCSName(e) {
    this.setState({
      createStorefront: {
        name: e.target.value,
      }
    })
  };

  trackCSAddress(e) {
    this.setState({
      createStorefront: {
        address: e.target.value,
      }
    })
  };

  trackCSBorough(e) {
    this.setState({
      createStorefront: {
        borough: e.target.value,
      }
    })
  }

  trackCSZip(e) {
    if(Number(e.target.value) && e.target.value.length <= 5 && Number(e.target.value) > 0) {
      this.setState({
        createStorefront: {
          zip: e.target.value,
        }
      })
    }
  }

  trackCSDirections(e) {
    this.setState({
      createStorefront: {
        directions: e.target.value,
      }
    })
  }

  trackCSDate(e) {
    e.persist();
    this.setState({
      createStorefront: {
        sale_date: e.target.value,
      }
    }, () => {
      console.log(this.state.createStorefront.sale_date, typeof this.state.createStorefront.sale_date)
    })

  };

  trackCSStartTime(e) {
    this.setState({
      createStorefront: {
        startTime: e.target.value
      }
    })
  };

  trackCSEndTime(e) {
    this.setState({
      createStorefront: {
        endTime: e.target.value
      }
    }, () => {
      console.log(this.state.createStorefront.endTime, typeof this.state.createStorefront.endTime)
    })
  };

  postNewStorefront() {
    console.log('clicked!');
  }

  render(){
    const location = {
      lat: 40.7575285,
      lng: -73.9884469
    }

    const markers = [
      {
        location:{
          lat: 40.7575285,
          lng: -73.9884469
        }
      }
    ]
    return (
      <div>
        <header>
          <h1>Grojj.</h1>
          <button onClick={this.showLogin}>Login or Sign Up</button>
          <Logout
            logout={this.logout.bind(this)}
          />
          <nav>
            <div className="nButton">Search</div>
            <StorefrontDD />
            <div className="nButton">Messages</div>
              <LoginSignup
                showLogin={this.showLogin}
                hideLogin={this.hideLogin}
                trackLoginUsername={this.trackLoginUsername.bind(this)}
                trackLoginPassword={this.trackLoginPassword.bind(this)}
                trackSignupUsername={this.trackSignupUsername.bind(this)}
                trackSignupPassword={this.trackSignupPassword.bind(this)}
                postLogin={this.postLogin.bind(this)}
                postSignup={this.postSignup.bind(this)}
              />
          </nav>
        </header>
        <main>
          <TestLogin
            testLogin={this.testLogin.bind(this)}
          />
          <CreateStore
            trackCSName={this.trackCSName.bind(this)}
            trackCSAddress={this.trackCSAddress.bind(this)}
            trackCSBorough={this.trackCSBorough.bind(this)}
            trackCSZip={this.trackCSZip.bind(this)}
            trackCSDirections={this.trackCSDirections.bind(this)}
            trackCSDate={this.trackCSDate.bind(this)}
            trackCSStartTime={this.trackCSStartTime.bind(this)}
            trackCSEndTime={this.trackCSEndTime.bind(this)}
            postNewStorefront={this.postNewStorefront.bind(this)}
          />
        </main>
        <footer>
          <div>copyright nonsense, about us</div>
        </footer>
      </div>
    )
  }
}
