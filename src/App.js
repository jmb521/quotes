import React, { Component } from 'react';
import Quotes from './components/quotes.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Quotes />
      </div>
    );
  }
}

export default App;
