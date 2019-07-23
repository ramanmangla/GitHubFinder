import React from 'react';
import PropTypes from 'prop-types';

// Functional component vs class component
// Traditionally, classes had states and functions didn't
// With Hooks, even functions can have states

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  // Simplifying props with destructuring in function parameter
  // const { login, avatar_url, html_url } = props.user;

  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <a href={html_url} className='btn btn-dark btn-sm my1'>
          More
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
