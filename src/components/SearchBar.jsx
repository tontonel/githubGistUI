import React from 'react';

const SearchBar = (props) => {

  return (
    <div className='search-bar'>
      <input
        type="text"
        placeholder="Search for a user..."
        onChange={props.debouncedSearch}
      />
      <ul>
            {props.userGists !== undefined && props.userGists.map((option) => (
                <li key={option.id}>{option.id}</li>))}
      </ul>
    </div>
  );
};

export default SearchBar;