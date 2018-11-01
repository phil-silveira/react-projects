import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import WeatherDetails from './components/WeatherDetails/WeatherDetails'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <WeatherDetails />
        </header>
      </div>
    );
  }
}

export default App;
