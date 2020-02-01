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

increment = (playerIndex)=> {
    const players = this.state.players;
    players[playerIndex].points += 1;
this.setState({
    players: [...players],
});
}


decrement = (playerIndex)=> {
    const players = this.state.players;
    if(players[playerIndex].points > 0) {
    players[playerIndex].points -= 1;
this.setState({
    players: [...players],
});
}
}

    render () {
    const context = {
state: this.state,
statusGame: this.statusGame,
addPlayer: this.addPlayer,
increment: this.increment,
decrement: this.decrement,
    };


    return <AppContext.Provider value={context}>

        {this.props.children}
        </AppContext.Provider>

}

};

export default Context;
