// import React, { Component } from 'react'
// import googleMapsLoader from 'react-google-maps-loader'

// const GOOGLE_MAPS_API_KEY = 'AIzaSyDu1zOGCMJEMn2Ja45WRuyWFN_Rv7ZSh3c' // Change your api key

//   @googleMapsLoader({ key: GOOGLE_MAPS_API_KEY, libraries: ['places','geometry'] })

//   export default class MyComponent extends Component {
//       constructor() {
//           super()
//           this.state = {
//               map: null,
//               markers: new Map(),
//           }
//       }

//       componentDidMount() {
//           const {googleMaps} = this.props
//           const map = new googleMaps.Map(this.ref_map)

//           this.setState({map})
//       }

//       method() {
//           const {googleMaps} = this.props

//           return (
//             <div ref={ref => this.ref_map = ref} />
//           )
//       }
//   }

//   export default placesLoader(MyComponent, {
//     libraries: ["places", "geometry"],
//     key: GOOGLE_MAPS_API_KEY,
//   })
