import React from 'react';

const Player = ({name, score, index}) => {
  return (
    <div className="player grid">
      <div className="player-remove"></div>
      <div className="player-name">
        {name}
       
      </div>
      <div className="player-controls grid">
        <div className="decrement">
          <button className="btn">-</button>
        </div>
  <span className="score">{score}</span>
        <div className="increment">
          <button className="btn">+</button>
        </div>
      </div>
    </div>
  );
};

export default Player;
