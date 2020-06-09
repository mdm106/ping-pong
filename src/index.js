import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import initial from '../src/data/initial';
import reducer from '../src/data/reducer';
import { createStore, compose } from "redux";
import persistState from "redux-localstorage";

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
