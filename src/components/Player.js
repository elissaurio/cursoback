import React from 'react';
import { AppContext } from '../Context';

const Player = ({name, score, index}) => {
  const context = React.useContext(AppContext);
  
  return (
    <div className="player grid">
      <div className="player-remove"></div>
      <div className="player-name">
        {name}
       
      </div>
      <div className="player-controls grid">
        <div className="increment">
          <button 
          className="btn" 
          onClick= {() => context.decrement(index)}
          disable={!context.state.isRunning}>-</button>
        </div>
  <span className="score">{score}</span>
        <div className="decrement">
          <button
           className="btn"
           onClick= { () => context.increment(index)}
           disable={!context.state.isRunning}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Player;
