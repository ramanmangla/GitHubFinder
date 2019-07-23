import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';

class App extends Component {
  foo = () => 'Bars';

  render() {
    return (
      // React Fragment over div to use a ghost container
      // Fragment isn't visible in DOM
      <div className='App'>
        <Navbar />
      </div>
    );
  }
}

export default App;
