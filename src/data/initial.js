const initial = {
    player1: 0,
    player2: 0,
    serving: true,
    winner: "",
    gameHistory: [
      {
        player_1: { 
          score: 0,
          won: false
      },
        player_2: { 
          score: 0,
          won: false
      }
    }] ,
    player1Name: "Player 1",
    player2Name: "Player 2",
    winningScore: 21,
    alternate: 5 
};

export default initial;

