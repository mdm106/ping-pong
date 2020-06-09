import initial from './initial';

const player1 = state => ({ ...state, player1: state.player1 + 1 });
const player2 = state => ({ ...state, player2: state.player2 + 1 });
const server = state => {
  let change = 5;
  if(state.player1 >= 20 && state.player2 >= 20){
    change = 2;
  }
  return {...state, 
          serving: (state.player1 + state.player2) % change === 0 ? !state.serving : state.serving}
}

const winning = state => {
  let win = "";
  if(state.player1 >= 21 && state.player2 <= (state.player1 - 2)) {
    win="1"
  } else if (state.player2 >= 21 && state.player1 <= (state.player2 - 2)){
    win="2"
  }
  return {...state, winner: win}
}

const updateHistory = state => {
    if(state.winner === "") {
        return {
            ...initial,
            gameHistory: state.gameHistory,
        }
    } else {
        return {
            ...initial,
            gameHistory: [...state.gameHistory,
                {
                    player_1: {
                      score: state.player1,
                      won: state.winner === "1"
                    },
                    player_2: {
                      score: state.player2,
                      won: state.winner === "2"
                    }
                }
            ]
        }
    }
}
  
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_P1": return winning(server(player1(state)));
    case "INCREMENT_P2": return winning(server(player2(state)));
    case "RESET": return updateHistory(state);
    default: return state;
  }
}

export default reducer;