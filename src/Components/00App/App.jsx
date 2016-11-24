import React, { Component } from 'react';
import './App.css'

class App extends Component {

  render(){
    return (
      <div>
        <header>
          <h1>Grojj.</h1>
          <button>Login or Sign Up</button>
          <nav>
            <div className="nButtons">Search</div>
            <div className="nButtons">myStoreFront</div>
            <div className="nButtons">Messages</div>
          </nav>
        </header>
        <main>
        </main>
        <footer>
          <div>copyright nonsense, about us</div>
        </footer>
      </div>
    );
  }
}

export default App;
