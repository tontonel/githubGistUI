import React, { useEffect, useState } from "react";
import { fetchUserGists } from "../api/gistsApi/fetchUserGists";
import SearchBar from "../components/SearchBar";
import GistContainer from "../components/GistContainer";
import debounce from "lodash.debounce";

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

    const [userGists, setUserGists] = useState([]);

    const debouncedSearch = debounce((event) => handleSearch(event), 500);

    const handleSearch = (event) => {
        const value = event.target.value;
        fetchUserGists(value)
        .then((gists) => setUserGists(gists))
        .catch((error) => console.error(error));
    }

    useEffect(() => {
        console.log(userGists);
    }, [userGists]);

    return (
        <>
            <header className="app-header">
                <h1>GitHub Gists UI</h1>
                <SearchBar userGists={userGists} debouncedSearch={debouncedSearch} />
            </header>  
            <GistContainer gist={gist} />
        </>
    );
}

export default HomePage;