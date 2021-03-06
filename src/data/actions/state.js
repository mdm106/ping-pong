export const incrementP1 = ({player_1, complete}) => {
    return {
        type: "INCREMENT_P1",
        player1: player_1.score,
        serving: player_1.serving,
        winner: complete && !player_1.won ? "2" : complete ? "1" : "",
    };
};

export const incrementP2 = ({player_2, complete}) => {
    return {
        type: "INCREMENT_P2",
        player2: player_2.score,
        serving: !player_2.serving,
        winner: complete && !player_2.won ? "1" : complete ? "2" : "",
    };
};

// a reset action creator
// doesn't need any additional data, so no parameters
export const reset = () => {
    return {
      type: "RESET",
    }; 
};

export const startGame = ({ id, player_1, player_2, winning_score, change_serve }) => {
    return {
        type: "SAVE_SETTINGS",
        player1Name: player_1.name,
        player2Name: player_2.name,
        winningScore: +winning_score,
        alternate: +change_serve,
        id: id,
    };
};

export const loaded = (data) => {
    return {
        type: "LOADED",
        gameHistory: data,
    }
}

export const deleted = (id) => {
    return {
        type: "DELETE_GAME",
        id,
    }
}