import React from 'react';
import GistGridBox from './GistGridBox';

const GistsContainer = (props) => {
    props.gist !== undefined && console.log(props.gist);
    return (
        props.gist !== undefined && 
        <div className='gist-container'>
            <h2>Gist {props.gist.id}</h2>
            <GistGridBox files={props.gist.files} forks_avatars_url={props.gist.forks_avatars_url}/>
        </div>
    );
}

export default GistsContainer;