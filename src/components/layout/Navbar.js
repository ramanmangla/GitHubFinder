import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Navbar extends Component {
  // Default properties
  static defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
  };

  // Prop type checking
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon} /> {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
