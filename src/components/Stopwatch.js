import React from 'react';

class Stopwatch extends React.Component {
state ={
  elapsedTime: 0,
  previousTime: 0,
  intervalId: null,
  isRunning: false,

};

componentDidMount(){
  this.setState({
    intervalId: setInterval (() => this.tick(), 100),
     //console.log('OK');
   
  });
}


componentWillUnmount() {
  clearInterval(this.state.intervalId);
}

tick = () => {
  if(this.state.isRunning) {
    console.log('start');
    const now = Date.now();
    const time = this.state.elapsedTime;

    this.setState({
      elapsedTime: time + (now - this.state.previousTime),
      previousTime: now,
    });
  }
}


toogleHandler = () => {
  const status = this.state.isRunning;
this.setState({
  isRunning: !status,
  previousTime: Date.now(),
});
}

  render () {
  return (
    <div className="stopwatch">
      <h2 className="title">Stopwatch</h2>
      <span className="stopwatch-time">0</span>
      <div className="stopwatch-controls">
        <button className="btn handler" onClick={this.toogleHandler}>Start</button>
        <button className="btn">Reset</button>
      </div>
    </div>
  );
}
};

export default Stopwatch;