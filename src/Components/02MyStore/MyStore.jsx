import React, { Component } from 'react';
import './MyStore.css';
import AsideSMyStore from '../02AsideSMyStore/AsideSMyStore.jsx'
import MyItemList from '../02MyItemList/MyItemList.jsx'

class MyStore extends Component {

  render(){
    return(
      <div>
        <AsideSMyStore />
        <MyItemList />
      </div>
    )
  }
}

export default MyStore;
