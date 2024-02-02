import React, { useState } from 'react';

const MovieSearchForm = ({ onSearch }) => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleInputChange = event => {
    setSearchKeyword(event.target.value);
  };

  const handleSearch = event => {
    event.preventDefault();
    onSearch(searchKeyword);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search movies by title..."
        name="searchInput"
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default MovieSearchForm;
