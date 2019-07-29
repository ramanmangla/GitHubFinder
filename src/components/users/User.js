import React, { Component } from 'react';

// Class component without state because
// we require lifecylce method componentDidMount
export class User extends Component {
  componentDidMount() {
    // From path login parameter, gets login
    // This function sets the user state in App.js
    // and the state change is passed to Uer component
    this.props.getUser(this.props.match.params.login);
  }
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user;

    const { loading } = this.props;

    return <div>{name}</div>;
  }
}

export default User;
