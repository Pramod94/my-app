import React, { Component } from 'react';
import Fetching from './Components/Fetching';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Hey It's Working !!</h3>
        <Fetching />
      </div>
    );
  }
}

export default App;
