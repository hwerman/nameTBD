import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LoginSignup from '../01LoginSignup/LoginSignup.jsx';
import TestLogin from '../TestLogin/TestLogin.jsx';
import Logout from '../01Logout/Logout.jsx';
import CreateStore from '../02CreateStore/CreateStore.jsx';
import StorefrontDD from '../01StorefrontDD/StorefrontDD.jsx';
import AsideSMyStore from '../02AsideSmyStore/AsideSMyStore.jsx';
import MyItemList from '../02MyItemList/MyItemList.jsx';
import AddNewItem from '../02AddNewItem/AddNewItem.jsx';
import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      searchForm: '',
      items: '',
      address: 'time square address',
      loggedIn: false,
      loginFormUsername: '',
      loginFormPassword: '',
      signupFormUsername: '',
      signupFormPassword: '',
      currentToken: '',
      currentUser: '',
      hasStorefront: false,
      currentStorefront: {
        name: '',
        address: '',
        borough: '',
        directions: '',
        endTime: '',
        startTime: '',
        zip: ''
      },
      createStorefront: {
        name: '',
        address: '',
        borough: '',
        zip: '',
        directions: '',
        sale_date: '',
        startTime: '',
        endTime: '',
      },
      createItem: {
        name: '',
        image_url: '',
        condition: '',
        price: '',
        description: '',
      },
      storefronts: []
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

  getOneStorefront() {
    return fetch('/api/myStorefront', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON',
        'Authorization': 'Bearer ' + this.state.currentToken
      },
      body: JSON.stringify({
        currentUser: this.state.currentUser
      })
    })
    .then(r=> r.json())
    .then((data) => {
      console.log(data[0])
      this.setState({
        hasStorefront: true,
        currentStorefront: {
          name: data[0].name,
          address: data[0].address,
          borough: data[0].borough,
          directions: data[0].directions,
          endTime: data[0].endtime,
          startTime: data[0].starttime,
          zip: data[0].zip,
        }
      })
    })
    .then( () => {
      console.log(this.state)
    })
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
      console.log(this.state)
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
        currentToken: data,
        loggedIn: true,
        currentUser: this.state.loginFormUsername
      })
    })
    .then( () => {
      console.log(this.state)
    })
    .then( () => {
      this.getOneStorefront();
    })
    .catch(error => console.log(error))
  }

  logout() {
    this.setState({
      loggedIn: false,
      currentToken: '',
      currentUser: '',
      hasStorefront: false,
      currentStorefront: {
        name: '',
        address: '',
        borough: '',
        directions: '',
        endTime: '',
        startTime: '',
        zip: ''
      }
    }, () => {
      console.log(this.state)
    })
  };

  testLogin() {
    return fetch('/api/items', {
      headers: {
        'Content-Type': 'application/JSON',
        'Authorization': 'Bearer ' + this.state.currentToken
      },
    })
    .then(r=> r.json())
    .then(() => {
      console.log(this.state)
    })
    .catch(error => console.log(error))
  };

  trackCreateStore(e) {
    let fieldsArr = e.target.parentElement.parentElement.childNodes;
    this.setState({
      createStorefront: {
        name: fieldsArr[1].value,
        address: fieldsArr[2].value,
        borough: fieldsArr[3].children[0].value,
        zip: fieldsArr[3].children[1].value,
        directions: fieldsArr[4].value,
        sale_date: fieldsArr[5].value,
        startTime: fieldsArr[6].children[0].value,
        endTime: fieldsArr[6].children[1].value,
      },
    }, () => {
      console.log(this.state)
    })
  }

  trackCreateItem(e) {
    let fieldsArr = e.target.parentElement.childNodes;
    this.setState({
      createItem: {
        name: fieldsArr[1].value,
        image_url: fieldsArr[2].value,
        condition: fieldsArr[3].children[0].value,
        price: fieldsArr[3].children[1].value,
        description: fieldsArr[4].value
      },
    })
  }

  postNewStorefront() {
    let userItemList = document.querySelector('#rightDiv')
    userItemList.style.display = 'flex';
    let createStorefront = document.querySelector('#createStoreDiv');
    createStorefront.style.display = 'none';
    let reveal = document.querySelector('#asideSellerMyStore');
    reveal.style.display = 'block';

    console.log('posting')
    return fetch('/api/storefront', {
      headers: {
        'Content-Type': 'application/JSON'
      },
      method: 'POST',
      body: JSON.stringify({
        name: this.state.createStorefront.name,
        address: this.state.createStorefront.address,
        borough: this.state.createStorefront.borough,
        zip: this.state.createStorefront.zip,
        directions: this.state.createStorefront.directions,
        sale_date: this.state.createStorefront.sale_date,
        startTime: this.state.createStorefront.startTime,
        endTime: this.state.createStorefront.endTime,
        unitedState: 'NY',
        currentUser: this.state.currentUser
      })
    })
    .then(() => {
      this.setState({
        currentStorefront: {
          name: this.state.createStorefront.name,
          address: this.state.createStorefront.address,
          borough: this.state.createStorefront.borough,
          zip: this.state.createStorefront.zip,
          directions: this.state.createStorefront.directions,
          sale_date: this.state.createStorefront.sale_date,
          startTime: this.state.createStorefront.startTime,
          endTime: this.state.createStorefront.endTime,
        }
      })
    })
    .then(() => {
      console.log(this.state)
    })
  };

  postNewItem() {
    return fetch('/api/item', {
      headers: {
        'Content-Type': 'application/JSON',
        'Authorization': 'Bearer ' + this.state.currentToken
      },
      method: 'POST',
      body: JSON.stringify({
        name: this.state.createItem.name,
        image_url: this.state.createItem.image_url,
        condition: this.state.createItem.condition,
        price: this.state.createItem.price,
        description: this.state.createItem.description,
        likes: 0,
        currentUser: this.state.currentUser,
        currentStorefront: {
          name: this.state.currentStorefront.name
        }
      }),
    })
  };

  render(){
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
            <StorefrontDD
              loggedIn={this.state.loggedIn}
              currentUser={this.state.currentUser}
              hasStorefront={this.state.hasStorefront}
            />
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
            postNewStorefront={this.postNewStorefront.bind(this)}
            trackCreateStore={this.trackCreateStore.bind(this)}
          />
          <AsideSMyStore
            currentStorefront={this.state.currentStorefront}
            currentUser={this.state.currentUser}
          />
          <MyItemList />
          <AddNewItem
            postNewItem={this.postNewItem.bind(this)}
            trackCreateItem={this.trackCreateItem.bind(this)}
          />
        </main>
        <footer>
          <div></div>
        </footer>
      </div>
    )
  }
}
