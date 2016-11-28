import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LoginSignup from '../01LoginSignup/LoginSignup.jsx';
import Logout from '../01Logout/Logout.jsx';
import CreateStore from '../02CreateStore/CreateStore.jsx';
import StorefrontDD from '../01StorefrontDD/StorefrontDD.jsx';
import SearchDD from '../01SearchDD/SearchDD.jsx';
import AsideSMyStore from '../02AsideSmyStore/AsideSMyStore.jsx';
import MyItemList from '../02MyItemList/MyItemList.jsx';
import AddNewItem from '../02AddNewItem/AddNewItem.jsx';

// import Map from './Maps.jsx';
import './App.css';

import EditStore from '../02EditStore/EditStore.jsx';
import './MattApp.css';
// import './App.css';


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      searchZip: '',
      loggedIn: false,
      currentUser: '',
      hasStorefront: false,
      currentToken: '',
      loginForm: {
        username: '',
        password: ''
      },
      signupForm: {
        username: '',
        password: ''
      },
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
      editStorefront: {
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
      storefrontItems: []
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

  hideEditForm() {
    let editStoreDiv = document.querySelector('#editStoreDiv');
    editStoreDiv.style.display = 'none';
  }

  showSearchInput() {
    let searchInput = document.querySelector('#searchInput');
    console.log(searchInput)
    searchInput.style.display = 'block';
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
      this.setState({
        hasStorefront: true,
        currentStorefront: {
          name: data[0].name,
          sale_date: data[0].sale_date,
          address: data[0].address,
          borough: data[0].borough,
          directions: data[0].directions,
          endTime: data[0].endtime,
          startTime: data[0].starttime,
          zip: data[0].zip,
        }
      })
    })
  }

  getStorefrontItems() {
    return fetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON',
        'Authorization': 'Bearer ' + this.state.currentToken
      },
      body: JSON.stringify({
        currentStorefront: this.state.currentStorefront.name
      })
    })
    .then(r=>r.json())
    .then( (data) => {
      this.setState({
        storefrontItems: data
      })
    })
  }

  removeOneStorefront() {
    return fetch('/api/storefronts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON',
        'Authorization': 'Bearer ' + this.state.currentToken
      },
      body: JSON.stringify({
        currentUser: this.state.currentUser
      })
    })
    .then(() => {
      this.setState({
        hasStorefront: false,
        storefrontItems: [],
        currentStorefront: {
          name: '',
          address: '',
          borough: '',
          directions: '',
          endTime: '',
          startTime: '',
          zip: ''
        }
      })
    })
  }

  trackLoginForm(e) {
    let fieldsArr = e.target.parentElement;
    this.setState({
      loginForm: {
        username: fieldsArr.childNodes[1].value,
        password: fieldsArr.childNodes[3].value
      }
    })
  }

  trackSignupForm(e) {
    let fieldsArr = e.target.parentElement;
    this.setState({
      signupForm: {
        username: fieldsArr.childNodes[1].value,
        password: fieldsArr.childNodes[3].value
      }
    })
  }

  postSignup() {
    return fetch('/user/signup', {
      headers: {
        'Content-Type': 'application/JSON'
      },
      method: 'POST',
      body: JSON.stringify({
        'username': this.state.signupForm.username,
        'password': this.state.signupForm.password
      })
    })
    .then(() => {
      this.setState({
        signupForm: {
          'username': '',
          'password': ''
        }
      })
    })
    .catch(error => hadasErrorHandlingFunction(error))
  }

  postLogin() {
    return fetch('/user/login', {
      headers: {
        'Content-Type': 'application/JSON'
      },
      method: 'POST',
      body: JSON.stringify({
        'username': this.state.loginForm.username,
        'password': this.state.loginForm.password
      })
    })
    .then(r => r.json())
    .then((data) => {
      this.setState({
        currentToken: data,
        loggedIn: true,
        currentUser: this.state.loginForm.username,
        loginForm: {
          'username': '',
          'password': ''
        }
      })
    })
    .then( () => {
      this.getOneStorefront();
    })
    .catch(error => {
      console.log(error);
      this.setState({
        userErrorMessage: true
      })
    })
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
      },
      storefrontItems: []
    })
  };

  trackSearchInput(e) {
    this.setState({
      searchZip: e.target.value
    });
  }

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

  trackEditStore(e) {
    let fieldsArr = e.target.parentElement.parentElement.childNodes;
    this.setState({
      editStorefront: {
        name: fieldsArr[1].value,
        address: fieldsArr[2].value,
        borough: fieldsArr[3].children[0].value,
        zip: fieldsArr[3].children[1].value,
        directions: fieldsArr[4].value,
        sale_date: fieldsArr[5].value,
        startTime: fieldsArr[6].children[0].value,
        endTime: fieldsArr[6].children[1].value,
      },
    })
  }

  postSearchZip() {
    console.log('search posted')
    return fetch('/search/zip', {
      headers: {
        'Content-Type': 'application/JSON'
      },
      method: 'POST',
      body: JSON.stringify({
        'searchZip': this.state.searchZip
      })
    })
    .then(r => r.json())
    .then(searchResults => {
      console.log(searchResults)
    })
  }

  postNewStorefront() {
    let userItemList = document.querySelector('#rightDiv')
    userItemList.style.display = 'flex';
    let createStorefront = document.querySelector('#createStoreDiv');
    createStorefront.style.display = 'none';
    let reveal = document.querySelector('#asideSellerMyStore');
    reveal.style.display = 'block';

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
        currentStorefront: this.state.currentStorefront.name
      }),
    })
    .then(() => {
      this.getStorefrontItems();
    })
  };

  putEditStorefront() {
    return fetch('/api/storefronts', {
      headers: {
        'Content-Type': 'application/JSON'
      },
      method: 'PUT',
      body: JSON.stringify({
        name: this.state.editStorefront.name,
        address: this.state.editStorefront.address,
        borough: this.state.editStorefront.borough,
        zip: this.state.editStorefront.zip,
        directions: this.state.editStorefront.directions,
        sale_date: this.state.editStorefront.sale_date,
        startTime: this.state.editStorefront.startTime,
        endTime: this.state.editStorefront.endTime,
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
    .then( () => {
      this.getOneStorefront();
      this.getStorefrontItems();
      this.hideEditForm();
    })
  };


   // componentWillMount() {
   //   const body = document.getElementsByTagName('body')[0];
   //   const script = document.createElement("script");

   //    script.type = 'text/javascript';
   //    script.className = 'container';

   //    script.src = "http://maps.google.com/maps/api/js?key=AIzaSyDu1zOGCMJEMn2Ja45WRuyWFN_Rv7ZSh3c";
   //    script.async= true;
   //    script.defer= true;

   //    body.appendChild(script);
   //    // script.onload = () => {
   //    //     console.log(document.querySelector('.container'));
   //    //     ReactDOM.render( <script />,
   //    //       document.querySelector('.container')
   //    //     );
   //    // };

   //  // console.log(script)
   //  }

  render(){

  // const location = {
  //   lat: 40.7575285,
  //   lng: -73.9884469
  // }

  //   const markers = [
  //     {
  //       location:{
  //         lat: 40.7575285,
  //         lng: -73.9884469
  //       }
  //     }
  //   ]


  // const script = document.querySelector('.container');

  //   script.onload = () => {
  //         console.log(document.querySelector('.container'));
  //         ReactDOM.render( <script />,
  //           document.querySelector('.container')
  //         );
  //     };


    return (
      <div>



        <header>
          <h1>Grojj.</h1>
          <button onClick={this.showLogin}>Login or Sign Up</button>
          <Logout
            logout={this.logout.bind(this)}
          />
          <nav>
            <SearchDD
              showSearchInput={this.showSearchInput}
              trackSearchInput={this.trackSearchInput.bind(this)}
              postSearchZip={this.postSearchZip.bind(this)}
            />
            <StorefrontDD
              loggedIn={this.state.loggedIn}
              currentUser={this.state.currentUser}
              hasStorefront={this.state.hasStorefront}
            />
            <div className="nButton">Messages</div>
              <LoginSignup
                showLogin={this.showLogin}
                hideLogin={this.hideLogin}
                trackLoginForm={this.trackLoginForm.bind(this)}
                trackSignupForm={this.trackSignupForm.bind(this)}
                postLogin={this.postLogin.bind(this)}
                postSignup={this.postSignup.bind(this)}
              />
          </nav>
        </header>
        <main>
          <CreateStore
            postNewStorefront={this.postNewStorefront.bind(this)}
            trackCreateStore={this.trackCreateStore.bind(this)}
          />
          <EditStore
            currentStorefront={this.state.currentStorefront}
            putEditStorefront={this.putEditStorefront.bind(this)}
            trackEditStore={this.trackEditStore.bind(this)}
            hideEditForm={this.hideEditForm.bind(this)}
          />
          <AsideSMyStore
            currentStorefront={this.state.currentStorefront}
            currentUser={this.state.currentUser}
            removeOneStorefront={this.removeOneStorefront.bind(this)}
          />
          <MyItemList
            storefrontItems={this.state.storefrontItems}
          />
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
