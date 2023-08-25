import React from 'react';
import { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSubmit }) {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
    console.log(onSubmit);
  };

  return (
    <div className='search-bar'>
      <form onSubmit={handleFormSubmit}>
        <label>Enter keyword to search for</label>
        <input type='text' value={input} onChange={handleChange} placeholder='Search...' />
      </form>
    </div>
  );
}

export default SearchBar;
