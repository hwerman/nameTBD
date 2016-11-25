import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      searchForm: ''
    };
  }

  revealer(e) {
    console.log('revealing')
    e.currentTarget.nextSibling.style.display = 'block';
  }

  hider(e) {
    e.currentTarget.nextSibling.style.display = 'none';
  }

  render(){
    return (
      <div>
        <header>
          <h1>Grojj.</h1>
          <h3 className="test">Test</h3>
          <button>Login or Sign Up</button>
          <nav>
            <div className="nButton" onMouseEnter={this.revealer} onMouseOut={this.hider}>Search
              <input type="text" placeholder="search"/>
              <button>Go!</button>
            </div>
            <div className="nButton">myStoreFront</div>
            <div className="nButton">Messages</div>
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
