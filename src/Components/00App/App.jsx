import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import Map from './Maps.jsx';
// import Places from './Places.jsx';
// import superagent from 'superagent';
// import './normalize.css';
// import style from './App.css';

// class GMap extends React.Component {
//   constructor() {
//     super();

//    this.state = { zoom: 10 };

//   }


//   static propTypes() {
//     initialCenter: React.PropTypes.objectOf(React.PropTypes.number).isRequired
//   }

//   render() {
//     return <div className="GMap">
//       <div className='UpdatedText'>
//         <p>Current Zoom: { this.state.zoom }</p>
//       </div>
//       <div className='GMap-canvas' ref="mapCanvas">
//       </div>
//     </div>
//   }

//   componentDidMount() {
//     // create the map, marker and infoWindow after the component has
//     // been rendered because we need to manipulate the DOM for Google =(
//     this.map = this.createMap()
//     this.marker = this.createMarker()
//     this.infoWindow = this.createInfoWindow()

//     // have to define google maps event listeners here too
//     // because we can't add listeners on the map until its created
//     google.maps.event.addListener(this.map, 'zoom_changed', ()=> this.handleZoomChange())
//   }

//   // clean up event listeners when component unmounts
//   componentDidUnMount() {
//     google.maps.event.clearListeners(map, 'zoom_changed')
//   }

//   createMap() {
//     let mapOptions = {
//       zoom: this.state.zoom,
//       center: this.mapCenter()
//     }
//     return new google.maps.Map(this.refs.mapCanvas, mapOptions)
//   }

//   mapCenter() {
//     return new google.maps.LatLng(
//       this.props.initialCenter.lat,
//       this.props.initialCenter.lng
//     )
//   }

//   createMarker() {
//     return new google.maps.Marker({
//       position: this.mapCenter(),
//       map: this.map
//     })
//   }

//   createInfoWindow() {
//     let contentString = "<div class='InfoWindow'>I'm a Window that contains Info Yay</div>"
//     return new google.maps.InfoWindow({
//       map: this.map,
//       anchor: this.marker,
//       content: contentString
//     })
//   }

//   handleZoomChange() {
//     this.setState({
//       zoom: this.map.getZoom()
//     })
//   }
// }

// var initialCenter = { lng: -90.1056957, lat: 29.9717272 }

// ReactDOM.render(<GMap initialCenter={initialCenter} />, document.getElementById('root-container'));





import LoginSignup from '../01LoginSignup/LoginSignup.jsx';
import TestLogin from '../TestLogin/TestLogin.jsx';
import Logout from '../01Logout/Logout.jsx';
import './App.css';

class App extends Component {


  constructor() {
    super();

    this.state = {

      address: 'time square address'

    };


      loginFormUsername: '',
      loginFormPassword: '',
      signupFormUsername: '',
      signupFormPassword: '',
      currentToken: '',
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
      console.log('wtf', this.state.currentToken)
    })
    .catch(error => console.log(error))
  }

  logout() {
    console.log('logging out')
    this.setState({
      currentToken: '',
    })
    console.log('logged out')
  }

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
    .catch(error => console.log(error))

  }

  render(){
    const location = {
      lat: 40.7575285,
      lng: -73.9884469
    }
//Below is where you create your pins/markers
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


          <div style={{width:300, height:600, background: 'red'}}>

             <Map center={location} markers={markers} />

            <p>Location: { this.state.address }</p>

          </div>





        <header>
          <h1>Grojj.</h1>
          <button onClick={this.showLogin}>Login or Sign Up</button>
          <Logout
            logout={this.logout.bind(this)}
          />
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
                postLogin={this.postLogin.bind(this)}
                postSignup={this.postSignup.bind(this)}
              />
          </nav>
        </header>
        <main>
          <TestLogin
            testLogin={this.testLogin.bind(this)}
          />
        </main>
        <footer>
          <div>copyright nonsense, about us</div>
        </footer>

      </div>

      )
  }
}


export default App;
