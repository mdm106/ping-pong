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

export const startGame = ({ player1Name, player2Name, winningScore, alternate }) => {
    return {
        type: "SAVE_SETTINGS",
        player1Name,
        player2Name,
        winningScore: +winningScore,
        alternate: +alternate,
    };
};