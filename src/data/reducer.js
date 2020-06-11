import initial from './initial';

const player1 = state => ({ ...state, player1: state.player1 + 1 });
const player2 = state => ({ ...state, player2: state.player2 + 1 });
const server = state => {
  let change = state.alternate;
  let deuce = state.winningScore - 1

  let { player1, player2, serving } = state;

  if(player1 >= deuce && player2 >= deuce){
    change = 2;
  }
  return {...state, 
          serving: (player1 + player2) % change === 0 ? !serving : serving}
}

const winning = state => {
  let win = "";
  let { winningScore, player1, player2 } = state;
  if(player1 >= winningScore && player2 <= (player1 - 2)) {
    win="1"
  } else if (player2 >= winningScore && player1 <= (player2 - 2)){
    win="2"
  }
  return {...state, winner: win}
}

///helper function to update the history and called in reset
const updateHistory = (player1, player2, winner) => {
  return {
    player_1: {
      score: player1,
      won: winner === "1"
    },
    player_2: {
      score: player2,
      won: winner === "2"
    }
  };
};

const reset = state => {
  let { gameHistory, winner, player1, player2 } = state;
  return {
    ...state,
    gameHistory: winner === "" ? gameHistory :
    (gameHistory[0].player_1.won || gameHistory[0].player_2.won) ?
      [...gameHistory,
        updateHistory(player1, player2, winner),
      ] :
      [updateHistory(player1, player2, winner)],
     player1: initial.player1,
     player2: initial.player2,
     serving: initial.serving,
     winner: initial.winner,
  }
}

const startGame = (state, {player1Name, player2Name, winningScore, alternate}) => {
  return {
    ...state,
    player1Name,
    player2Name,
    winningScore,
    alternate,
  }
}
  
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_P1": return winning(server(player1(state)));
    case "INCREMENT_P2": return winning(server(player2(state)));
    case "SAVE_SETTINGS": return startGame(state, action);
    case "RESET": return reset(state);
    default: return state;
  }
}

export default reducer;