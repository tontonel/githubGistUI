
import React from 'react';

const GistGridRow = ({ file, forks, tag }) => {
    return (
        <div className="gist-grid-row">
            <div className="grid-cell">
                <h3>{file}</h3>
            </div>
            <div className="grid-cell">
                {forks.map((fork, index) => (
                    <p key={index}>{fork}</p>
                ))}
            </div>
            <div>
                <h3>{tag}</h3>
            </div>
        </div>
    );
}

export default GistGridRow;