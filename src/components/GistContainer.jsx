import React from 'react';
import GistGridBox from './GistGridBox';

const GistsContainer = (props) => {
    
    return (
        <div className='gist-container'>
            <h2>Gist number</h2>
            <GistGridBox files={props.gist.files} />
        </div>
    );
}

export default GistsContainer;