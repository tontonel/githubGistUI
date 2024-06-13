import React, { useRef, useState, useEffect } from 'react';

const SearchBar = (props) => {

    const inputRef = useRef(null);

    const optionRef = useRef(null);

    const [showOptions, setShowOptions] = useState(false);

    const handleOptionClick = (option) => {
        inputRef.current.value = '';
        props.handleOptionClick(option);
    }
    
    const handleClickOutside = (event) => {
        if (inputRef.current && !inputRef.current.contains(event.target)
            && optionRef.current && !optionRef.current.contains(event.target)) {
            setShowOptions(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
    <div className='search-bar'>
        <input
            ref={inputRef}
            type="text"
            placeholder="Search for a user..."
            onChange={props.debouncedSearch}
            onFocus={() => setShowOptions(true)}

        />
        { showOptions && 
            <ul
                ref={optionRef}
                className='search-options'
            >
                {props.userGists !== undefined &&
                props.userGists.length !== 0 ?
                    props.userGists.map((option) => (
                    <li key={option.id} onClick={() => handleOptionClick(option)}>gist:{option.id}</li>))
                : <li>No results to show</li>}
            </ul>}
    </div>
    );
};

export default SearchBar;