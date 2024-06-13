import React from "react";
import SearchBar from "../components/SearchBar";
import GistContainer from "../components/GistContainer";

const gist = {
    files: [
        {
            file: 'file1',
            forks: ['fork1', 'fork2'],
            tag: 'tag1'
        },
        {
            file: 'file2',
            forks: ['fork3', 'fork4'],
            tag: 'tag2'
        },
        {
            file: 'file3',
            forks: ['fork5', 'fork6'],
            tag: 'tag3'
        }
    ]
};

const HomePage = () => {
    return (
        <>
            <header className="app-header">
                <h1>GitHub Gists UI</h1>
                <SearchBar options={['apple', 'pear', 'bananna']} />
            </header>  
            <GistContainer gist={gist} />
        </>
    );
}

export default HomePage;