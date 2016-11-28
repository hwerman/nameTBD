// import React, { Component} from 'react'
// import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'

// class Map extends Component {
//   render() {
//     const mapContainer = <div style={{height: '100%', width:'100%'}}></div>

// //We are accessing a property called markers from the parent component then iterating throup map function, and for every element in the array we are creating a marker variable with a position key so google maps knows where to put the marker. then returning marker component from react google maps
//     const markers = this.props.markers.map((venue, i) => {

//       const marker = {
//         position: {
//           lat: venue.location.lat,
//           lng: venue.location.lng
//         }
//       }
//       return <Marker key={i} {...marker} />
//     })

//     return (
// //This is the map component taken from GoogleMapLoader @ 1:12 mins
//   <GoogleMapLoader
//     containerElement = { mapContainer }
//     googleMapElement = {
//         <GoogleMap
//             ref = { (map) => {
//               if (this.state.map != null)
//                 return

//               this.setState({
//                 map: map
//               })
//             }}

//           defaultZoom={7}
//           defaultCenter={this.props.center}
//           // onDragend={this.mapMoved.bind(this)}
//           options={{streetViewControl: false, mapTypeControl: false}}>
//           { markers }
//         </GoogleMap>
//       } />
//       )
//   }
// }

// export default Map;

// //import in app.js with <Map />
// //import Map from './components/Map'
// //cd to root level in directory then npm i -S react-google-maps
// //copy and past inside head tag to html
// //<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384 BVYiiSIFeK1dGmJRAkycuHAHRg320mUcww7on3RYdg4Va-+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
// //next copy and paste access key script tag into index.html head tag
// //also add <div id="app"></div>
// //and <script type="text/javascript" src="build/bundle.js"></script> to body of index.html
// //at top of Map component import googleMapLoader, googlemap, and marker (which is the pins) from the npm google maps we installed

// //for api call video tutorial uses superagent, for that we need npm install -S superagent

           <div style={{width:500, height:400, background: 'red'}}>
          <Map center={location} markers={markers} />
        </div>

