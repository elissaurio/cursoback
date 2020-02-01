import React from 'react';


export const AppContext = React.createContext();

class Context extends React.Component {
    state= {
        isRunning: false,
        players: [],
    };

    statusGame = (status) => {
        this.setState ({ isRunning: status });

    }
addPlayer = (name) => {
    const player = {
        name,
        points: 0,
    };
    this.setState({
        players: [...this.state.players, player],
    });
}
    render () {
    const context = {
state: this.state,
statusGame: this.statusGame,
addPlayer: this.addPlayer,
    };


    return <AppContext.Provider value={context}>

        {this.props.children}
        </AppContext.Provider>

}

};

export default Context;
