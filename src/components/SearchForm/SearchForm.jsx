import React, { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={query} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
