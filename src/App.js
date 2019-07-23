import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

class App extends Component {
  // A Lifecycle method
  // Runs as soon as the component is mounted
  componentDidMount() {
    axios.get('https://api.github.com/users').then(res => console.log(res));
  }

  // Required Lifecycle method
  render() {
    return (
      // React Fragment over div to use a ghost container
      // Fragment isn't visible in DOM
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
