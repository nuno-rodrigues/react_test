import React from 'react';

const UserInformation = props => (
  <div className="App-user">{props.name && 'Login name: ' + props.name}</div>
);

export default UserInformation;
