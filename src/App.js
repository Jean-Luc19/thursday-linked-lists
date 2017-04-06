import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LinkedList from './components/linked-list';

const list = new LinkedList()

class App extends Component {
  render() {
    for (let i = 0; i<10; i++){
        list.insert(i, Math.floor(Math.random() * 100));
    }
    list.display();
    let size = <em>{list.size()}</em>

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
         This size of the list is: {size}
        </p>


      </div>
    );
  }
}

export default App;
