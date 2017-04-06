import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LinkedList from './components/linked-list';

const list = new LinkedList()

class App extends Component {
  render() {
    for (let i = 0; i<6; i++){
        list.insert(i, i);
    }
    console.log(list.findMiddle())
    console.log(list.size())
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
