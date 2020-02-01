import './scoreboard.css';
import React from 'react';
import Scoreboard from './components/Scoreboard';
import Context from './Context';


function App() {
  return (
    <Context>
    <div className="App">
      <Scoreboard />
    </div>
    </Context>
  );
}

export default App;
