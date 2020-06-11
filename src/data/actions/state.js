export const incrementP1 = () => {
    return {
        type: "INCREMENT_P1",
    };
};

export const incrementP2 = () => {
    return {
        type: "INCREMENT_P2",
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