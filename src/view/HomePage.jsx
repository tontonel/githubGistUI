import React from "react";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
    return (
        <header className="app-header">
            <h1>GitHub Gists UI</h1>
            <SearchBar options={['apple', 'pear', 'bananna']} />
        </header>  
    );
}

export default HomePage;