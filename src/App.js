import React, { Component } from 'react';
import './App.css';
import Navigation from './Nav';
import Intro from './Intro';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Intro />
      </div>
    );
  }
}

export default App;
