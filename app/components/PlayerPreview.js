import React from 'react';

function PlayerPreview({ avatar, username, children }) {
  return (
    <div>
      <div className="column">
        <img className="avatar" src={avatar} alt={`Avatar for ${username}`} />
        <h2 className="username">@{username}</h2>
      </div>
      {children}
    </div>
  );
}

export default PlayerPreview;
