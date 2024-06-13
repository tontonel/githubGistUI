import React, { useEffect, useState } from "react";
import { fetchUserGists } from "../api/gistsApi/fetchUserGists";
import { fetchGistForks } from "../api/gistsApi/fetchGistForks";
import SearchBar from "../components/SearchBar";
import GistContainer from "../components/GistContainer";
import ContentModal from "../components/ContentModal";
import debounce from "lodash.debounce";


const HomePage = () => {

    const [userGists, setUserGists] = useState([]);
    const [selectedGist, setSelectedGist] = useState({});
    const [file, setFile] = useState("");

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

    const handleRowClick = (file) => {
        console.log(file);
        setFile(file);
    }

    useEffect(() => {
        console.log(userGists);
    }, [userGists]);

    useEffect(() => {
        console.log(selectedGist);
        console.log("selected gist");
        setUserGists([]);
    }, [selectedGist]);

    const iframeUrl = `https://gist.github.com/${selectedGist.id}.js?file=${file}`;


    return (
        <>
            <header className="app-header">
                <h1>GitHub Gists UI</h1>
                <SearchBar userGists={userGists} 
                    debouncedSearch={debouncedSearch} 
                    handleOptionClick={handleOptionClick}
                />
            </header>  
            <GistContainer
                gist={selectedGist} 
                handleRowClick={handleRowClick}
            />
            <ContentModal show={file !== ""} onClose={() => setFile("")}>
                <iframe
                    title={`gist-${selectedGist.id}`}
                    srcDoc={`<script src="${iframeUrl}"></script>`}
                    width="100%"
                    height="500px"
                ></iframe>
            </ContentModal>
        </>
    );
}

export default HomePage;