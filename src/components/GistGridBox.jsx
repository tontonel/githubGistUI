import React from "react";
import GistGridRow from "./GistGridRow";

const GistGridBox = (props) => {
    return (
        <div className="gist-grid-container">
            <div className="grid-header">
                <div className="header-item">Filename</div>
                <div className="header-item">Forks</div>
                <div className="header-item">Tag</div>
            </div>
            {props.files !== undefined && Object.keys(props.files).map((key, index) => (
                <GistGridRow
                    key={index}
                    file={props.files[`${key}`].filename}
                    forks={props.forks_avatars_url}
                    tag={props.files[`${key}`].type.split('/')[1]} 
                    handleRowClick={props.handleRowClick}
                />
            ))}
       </div>
    );
}

export default GistGridBox;