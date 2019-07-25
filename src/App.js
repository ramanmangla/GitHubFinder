import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Users from './components/users/Users';
import Search from './components/users/Search';
// Promise based HTTP client Axios
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    // GitHub users list
    users: [],
    // Loading screen
    loading: false,
    // Alert object
    alert: null
  };

  // A Lifecycle method
  // Runs as soon as the component is mounted
  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/users?client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${
      process.env.REACT_APP_GITHUB_CLIENT_SECRET
    }`);

    this.setState({ users: res.data, loading: false });
  }

  // Search GitHub users
  searchUsers = async text => {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${
      process.env.REACT_APP_GITHUB_CLIENT_SECRET
    }`);

    this.setState({ users: res.data.items, loading: false });
  };

  // Clear users
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  // Set alert
  setAlert = (message, type) => {
    this.setState({ alert: { message: message, type: type } });

    setTimeout(() => {
      this.setState({ alert: null });
    }, 5000);
  };

  // Required Lifecycle method
  render() {
    const { users, loading } = this.state;

    return (
      // React Fragment over div to use a ghost container
      // Fragment isn't visible in DOM
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
