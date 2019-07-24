import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Users = ({ users, loading }) => {
  // Props can be used with this.props or destructered parameters
  if (loading) {
    return <Spinner />;
  }

  return (
    <div style={userStyle}>
      {users.map(user => (
        // Each div in list must have a unique ID
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

Users.propTypes = {
  loading: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Users;
