import React, { Component } from 'react';
import Greetings from './Greetings'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="text-center">Homeless Help</h1>
        <div className="Greetings">
          <Greetings />
        </div>
      </div>
    );
  }
}

export default App;
