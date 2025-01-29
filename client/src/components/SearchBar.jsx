import React from 'react';

function SearchBar({ searchQuery, setSearchQuery, onSearch }) {
  return (
    <div className="flex space-x-4 mb-4">
      <input
        type="text"
        placeholder="Search for products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
      />
      <button
        className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
        onClick={() => onSearch(searchQuery)}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;