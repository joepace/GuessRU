import React, { Component } from 'react';
import './App.css';
import './style.css';
import StreetView from './components/StreetView';

class App extends Component {
  render() {
    return (
      <div className="App">   
        <div className="container">
          <h1>Hello, HackRU!</h1>
          
            <StreetView/>
        </div>
      </div>
    );
  }
}

export default App;
