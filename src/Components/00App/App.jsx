import React, { Component } from 'react';
import './App.css'

class App extends Component {

  constructor() {
    super();

    this.state = {
      searchForm: ''
    };
  }

  revealer(e) {
    let children = e.currentTarget.firstElementChild.parentNode.childNodes
    console.log(children.length)

    for (let key in children) {
      console.log(key)
    }
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
          <button>Login or Sign Up</button>
          <nav>
            <div onMouseEnter={this.revealer} onMouseOut={this.hider}>Search
              <input type="text" placeholder="search"/>
              <button>Go!</button>
            </div>
            <div>myStoreFront</div>
            <div>Messages</div>
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
