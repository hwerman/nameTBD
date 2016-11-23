import React, { Component } from 'react';
import './App.css'

class App extends Component {

  render(){
    return (
      <div>
        <header>
          <h1>Grojj.</h1>
          <button id="showLogin" className="button">Login or Sign Up</button>
          <nav>
            <div className="nButtons">Search</div>
            <div className="nButtons">myStoreFront</div>
            <div className="nButtons">Messages</div>
          </nav>
        </header>
        <main>
          <aside className="leftAside" id="asideThree">
            <h2 id="garageSaleAside">Garage Sale</h2>
            <p className="username">Username of seller</p>
            <address>100 Broadway, New York, NY 10003</address>
            <button id="messageButton">Message this Seller</button>
          </aside>
        </main>
        <footer>
          <div>copyright nonsense, about us</div>
        </footer>
      </div>
    );
  }
}

export default App;
