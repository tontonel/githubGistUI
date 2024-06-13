import React, { useRef } from 'react';

const SearchBar = (props) => {

    const inputRef = useRef(null);

    const handleOptionClick = (option) => {
        inputRef.current.value = '';
        props.handleOptionClick(option);
    }

    return (
    <div className='search-bar'>
        <input
            ref={inputRef}
            type="text"
            placeholder="Search for a user..."
            onChange={props.debouncedSearch}
        />
        <ul>
            {props.userGists !== undefined &&
            props.userGists.length !== 0 ?
                props.userGists.map((option) => (
                <li key={option.id} onClick={() => handleOptionClick(option)}>gist:{option.id}</li>))
            : <li>No results to show</li>}
        </ul>
    </div>
    );
};

export default SearchBar;