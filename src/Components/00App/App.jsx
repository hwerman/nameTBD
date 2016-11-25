// import the libs we need
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Map from './Maps.jsx';
// import './normalize.css';
// import style from './App.css';


// class App extends Component {
//   render(){
//     return (
//       <div>
//         This is the App!!


//       </div>
//       )
//   }
// }

class App extends Component {
//Below is only if you are using superagent
  componentDidtMount() {
    console.log('componentDidtMount')
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
mcndskjncsdjknc
        <div style={{width:300, height:600, background: 'red'}}>

          <Map center={location} markers={markers} />
          </div>
        </div>

      )
  }
}


export default App;
