import React, { useState } from "react";
import PropTypes from "prop-types";

// Refactoring class component into a functional component
// Props is an argument
const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
  // Using useState Hook to simplify state management
  const [text, setText] = useState("");

  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      e.preventDefault();
      searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholders='Search Users...'
          value={text}
          onChange={onChange}
        />
        <input type='submit' value='Seach' className='btn btn-dark btn-block' />
      </form>

      {showClear && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

// Prop types for functional component go outside
Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
