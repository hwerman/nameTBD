import React, { Component } from 'react';
import './App.css';
import MyItemList from '../02MyItemList/MyItemList.jsx';

class App extends Component {

  constructor() {
    super();

    this.state = {
      searchForm: '',
      items: ''
    };
  }

  revealer(e) {
    console.log('revealing')
    e.currentTarget.nextSibling.style.display = 'block';
  }

  hider(e) {
    e.currentTarget.nextSibling.style.display = 'none';
  }

  findMyItems(){
    fetch(`/api/items/`)
    .then(r => r.json())
    .then((data) => {
      this.setState({
        items: data
      })
    })
    .catch(error => console.log('Error'));
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

        <MyItemList
          items={this.state.items}
        />

      </div>
    );
  }
}

export default App;
