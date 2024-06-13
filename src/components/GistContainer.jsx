import React from 'react';
import GistGridBox from './GistGridBox';

const GistsContainer = (props) => {
    return (
        props.gist !== undefined && 
        <div className='gist-container'>
            <h2 className='gist-title'>Gist:{props.gist.id}</h2>
            <GistGridBox 
                files={props.gist.files} 
                forks_avatars_url={props.gist.forks_avatars_url}
                gistId={props.gist.id}
                handleRowClick={props.handleRowClick}
            />
        </div>
    );
}

export default GistsContainer;