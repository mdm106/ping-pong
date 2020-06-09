import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, compose } from "redux";
import persistState from "redux-localstorage";


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
  }]  
};

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

const gameHistory = state => {
  return {...initial, 
    gameHistory: [{
      player_1: {
        score: state.player1,
        won: state.winner === "1"
      },
      player_2: {
        score: state.player2,
        won: state.winner === "2"
      }
    }]
  }
}
  
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_P1": return winning(server(player1(state)));
    case "INCREMENT_P2": return winning(server(player2(state)));
    case "RESET": return gameHistory(state);
    default: return state;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initial,
  composeEnhancers(persistState()),
);

// we update subscribe to call the ReactDOM.render // method whenever the state changes
const render = () => {
  let { player1, player2, serving, winner, gameHistory } = store.getState();
  // pass in state.value as a value prop
  ReactDOM.render(
    <React.StrictMode>
      <App
        player1={player1}
        player2={player2}
        serving={serving}
        winner={winner}
        gameHistory={gameHistory}
        handleIncrementP1={ () => store.dispatch({ type: "INCREMENT_P1" }) } 
        handleIncrementP2={ () => store.dispatch({ type: "INCREMENT_P2" }) }
        handleReset={ () => store.dispatch({ type: "RESET" }) }
      />
    </React.StrictMode>,
    document.getElementById("root") 
    );
  };

  store.subscribe(render); // render when state changes render(); // render when page loads using initial state

  render(); // render when page loads using initial state
