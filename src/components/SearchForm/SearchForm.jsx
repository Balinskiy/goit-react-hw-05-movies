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
      <input
        type="text"
        onChange={handleChange}
        value={query}
        className="border-2 mx-5"
      />
      <button
        type="submit"
        className="bg-red-100 px-5 hover:bg-red-400 hover:text-white"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
