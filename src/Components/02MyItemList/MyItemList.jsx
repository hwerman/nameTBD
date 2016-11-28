import React, { Component } from 'react';
import './MyItemList.css'

class MyItemList extends Component{
  // renderItems(){
  //   return this.props.items.map((item, index) =>
  //     <MyItem
  //       editFunc={this.props.editFunc}
  //       deleteFunc={this.props.deleteFunc}
  //       name={item.name}
  //       url={item.url}
  //       description={item.description}
  //       price={item.price}
  //       condition={item.condition}
  //       likes={item.likes}
  //       id={item.id}
  //       key={index}
  //     />
  //   )
  // }
// }

revealUploadForm() {
  let uploadForm = document.querySelector('#addItemDiv');
  uploadForm.style.display = 'block';
}

  render(){
    return(
      <div className="rightDiv" id="rightDiv">
        <h3>Click button to sell items!</h3>
        <button id="addItemButton" onClick={this.revealUploadForm}>Add item!</button>
        <button onClick={this.props.getStorefrontItems}>getStorefrontItems</button>
      </div>
    )
  }
}


export default MyItemList;
