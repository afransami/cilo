import React, { useState } from 'react';

const SearchBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchIconClick = () => {
    setShowSearch(!showSearch);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement your search logic here using the `searchValue` state
    console.log('Search submitted:', searchValue);
  };

  return (
    <div>
      <div className="flex items-center">
        {/* Search Icon */}
        <button
          onClick={handleSearchIconClick}
          className="mr-2"
        >
          <i className="fa fa-search text-gray-500"></i>
        </button>

        {/* Conditional Rendering */}
        {showSearch && (
          <form onSubmit={handleSearchSubmit} className="flex items-center">
            <input
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              className="border border-gray-300 px-2 py-1 rounded"
              placeholder="Search..."
            />
            <button
              type="submit"
              className="ml-2 px-3 py-1 bg-blue-500 text-white rounded"
            >
              Search
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
