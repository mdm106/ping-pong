import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from "redux";


const initial = {
  player1: 0,
  player2: 0,
  serving: true,
};

const player1 = state => ({ ...state, player1: state.player1 + 1 });
const player2 = state => ({ ...state, player2: state.player2 + 1 });
const server = state => ({ ...state, serving: (state.player1 + state.player2) % 5 === 0 ? !state.serving : state.serving })


const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_P1": return server(player1(state));
    case "INCREMENT_P2": return server(player2(state));
    case "RESET": return initial;
    default: return state;
  }
}

const store = createStore(
  reducer,
  initial,
  window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// we update subscribe to call the ReactDOM.render // method whenever the state changes
const render = () => {
  let { player1, player2, serving } = store.getState();
  // pass in state.value as a value prop
  ReactDOM.render(
    <React.StrictMode>
      <App player1={player1}
           player2={player2}
           serving={serving}
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
