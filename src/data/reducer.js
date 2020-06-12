import initial from './initial';
import { loaded } from './actions/state';

// ///helper function to update the history and called in reset
// const updateHistory = (player1, player2, winner) => {
//   return {
//     player_1: {
//       score: player1,
//       won: winner === "1"
//     },
//     player_2: {
//       score: player2,
//       won: winner === "2"
//     }
//   };
// };

const reset = (state) => {
  return {
    ...state,      
    player1: initial.player1,
    player2: initial.player2,
    serving: initial.serving,
    winner: initial.winner,
    id: initial.id,
  }
}

const startGame = (state, {player1Name, player2Name, winningScore, alternate, id}) => {
  return {
    ...state,
    player1Name,
    player2Name,
    winningScore,
    alternate,
    id,
  }
}

const scoreP1 = (state, {player1, serving, winner}) => {
  return {
    ...state,
    player1,
    serving,
    winner,
  }
}

const scoreP2 = (state, {player2, serving, winner}) => {
  return {
    ...state,
    player2,
    serving,
    winner,
  }
}

const load = (state, {gameHistory}) => {
  return {
    ...state,
    loaded: true,
    gameHistory,
  }
}

  
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_P1": return scoreP1(state, action);
    case "INCREMENT_P2": return scoreP2(state, action);
    case "SAVE_SETTINGS": return startGame(state, action);
    case "LOADED": return load(state, action);
    case "RESET": return reset(state);
    default: return state;
  }
}

export default reducer;