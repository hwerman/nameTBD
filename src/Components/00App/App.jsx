// import the libs we need
import React, { Component } from 'react';
import Map from './components/Map';
// import './normalize.css';
// import style from './App.css';

// create a React Component called _App_
class App extends Component {

  render(){
    return (
      <div id="app-container">
        <h1>haaaaaaaaaaaaaaaaaaaaaaaaaaaaay</h1>
      </div>


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

        <div style={{width:300, height:600, background: 'red'}}>

          <Map center={location} markers={markers} />
        </div>

      <Places />
    <div<
      )
  }
}

//   pp.Components.GMap = React.createClass
//   map: null
//   marker: null
//   infoWindow: null

//   render: ->
//     <div className="GMap">
//       <div ref="map_canvas">
//       </div>
//     </div>



//    componentDidMount: ->

//     @map = @createMap()
//     @marker = @createMarker()
//     @infoWindow = @createInfoWindow()

//     google.maps.event.addListener @map, 'zoom_changed', => @handleZoomChange()
//     google.maps.event.addListener @map, 'dragend', => @handleDragEnd()

//     createMap: ->
//     coords = @props.coords
//     mapOptions =
//       minZoom: 9
//       zoom: 10
//       center: new google.maps.LatLng(@props.coords.lat, @props.coords.lon)

//     new google.maps.Map(@refs.map_canvas.getDOMNode(), mapOptions)

//   createMarker: ->
//     marker = new google.maps.Marker
//       position: new google.maps.LatLng(@props.coords.lat, @props.coords.lon)
//       map: @map

//   createInfoWindow: ->
//     contentString = "<div class='InfoWindow'>I'm a Window that contains Info Yay</div>"
//     infoWindow = new google.maps.InfoWindow
//       map: @map
//       anchor: @marker
//       content: contentString

//   handleZoomChange: ->

//   handleDragEnd: ->

//     );
//   }
// }

export default App;
