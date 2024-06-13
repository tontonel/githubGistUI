import React from "react";
import GistGridRow from "./GistGridRow";

const GistGridBox = (props) => {
    return (
        <div className="gist-grid-container">
            {props.files !== undefined && Object.keys(props.files).map((key, index) => (
                <GistGridRow
                    key={index}
                    file={props.files[`${key}`].filename.split('.')[0]}
                    forks={props.forks_avatars_url}
                    tag={props.files[`${key}`].filename.split('.')[1]} 
                />
            ))}
       </div>
    );
}

export default GistGridBox;