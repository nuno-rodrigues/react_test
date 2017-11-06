import React from 'react';

const ReposInformation = props => (
    <div>
        <div>{props.repos.length > 0 && 'Total of repos:' + props.repos.length}</div>
        <div className="App-repos">
            {props.repos.map((repo, index) => (
                <div className="App-repo" key={index}>
                    <p>{'Title: ' + repo.name}</p>
                    <p>{'Description: ' + repo.description}</p>
                </div>
            ))}
        </div>
    </div>
);

export default ReposInformation;
