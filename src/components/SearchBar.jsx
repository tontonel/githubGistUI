import React  from 'react';

const SearchBar = (props) => {
  return (
    <div className='search-bar'>
      <input
        type="text"
        placeholder="Search for a user..."
        // onChange={handleSearch}
      />
      <ul>
        {props.options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
    </div>
  );
  };

export default SearchBar;