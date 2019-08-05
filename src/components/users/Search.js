import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

// Refactoring class component into a functional component
// Props is an argument
const Search = () => {
  // useContext hook to access global context
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  // Using useState Hook to simplify state management
  const [text, setText] = useState("");

  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    if (text === "") {
      alertContext.setAlert("Please enter something", "light");
    } else {
      e.preventDefault();
      githubContext.searchUsers(text);
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

      {githubContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
