import React from "react";
import GistGridRow from "./GistGridRow";

const GistGridBox = (props) => {
    return (
        <div className="gist-grid-container">
            {props.files.map((item, index) => (
                <GistGridRow
                    key={index}
                    file={item.file}
                    forks={item.forks}
                    tag={item.tag} 
                />
            ))}
       </div>
    );
}

export default GistGridBox;