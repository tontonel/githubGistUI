import React from 'react';

const GistGridRow = ({ file, forks, tag }) => {
    return (
        <div className="gist-grid-row">
            <div className="grid-cell">
                <h3>{file}</h3>
            </div>
            <div className="grid-cell">
                {forks.length !== 0 ? forks.map((fork, index) => (
                    <img 
                        className="fork-avatar" 
                        key={index} 
                        src={fork} alt="fork"
                    />
                ))  : <p className='no-forks'>No forks</p> }
            </div>
            <div>
                <h3>#{tag}</h3>
            </div>
        </div>
    );
}

export default GistGridRow;