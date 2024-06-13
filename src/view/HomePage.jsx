import React, { useEffect, useState } from "react";
import { fetchUserGists } from "../api/gistsApi/fetchUserGists";
import { fetchGistForks } from "../api/gistsApi/fetchGistForks";
import SearchBar from "../components/SearchBar";
import GistContainer from "../components/GistContainer";
import debounce from "lodash.debounce";

const HomePage = () => {

    const [userGists, setUserGists] = useState([]);
    const [selectedGist, setSelectedGist] = useState({});

    const debouncedSearch = debounce((event) => handleSearch(event), 500);

    const handleSearch = (event) => {
        const value = event.target.value;
        fetchUserGists(value)
        .then((gists) => setUserGists(gists))
        .catch((error) => console.error(error));
    }

    const handleOptionClick = async (option) => {
        try {
            const response = await fetchGistForks(option.id);
            option.forks_avatars_url = response.map((fork) => fork.owner.avatar_url);
            setSelectedGist(option);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        console.log(userGists);
    }, [userGists]);

    useEffect(() => {
        console.log(selectedGist);
        console.log("selected gist");
        setUserGists([]);
    }, [selectedGist]);

    return (
        <>
            <header className="app-header">
                <h1>GitHub Gists UI</h1>
                <SearchBar userGists={userGists} 
                    debouncedSearch={debouncedSearch} 
                    handleOptionClick={handleOptionClick}
                />
            </header>  
            <GistContainer gist={selectedGist} />
        </>
    );
}

export default HomePage;