// pages/search.tsx

import React, { useState } from 'react';

const SearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]); // Example: Array of search result strings

  const handleSearch = () => {
    // Simulate search results for demonstration purposes
    const results = [
      "Result 1",
      "Result 2",
      "Result 3"
    ];
    setSearchResults(results);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <h1>Search Page</h1>
      <div className="flex">
        <input
          type="text"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Enter search query"
          className="mr-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Search
        </button>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Search Results</h2>
        <ul className="list-disc pl-8">
          {searchResults.map((result, index) => (
            <li key={index} className="mt-2">{result}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchPage;
