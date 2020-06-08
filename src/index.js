import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from "redux";


const initial = {
  player1: 0,
  player2: 0,
};


const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_P1": return {...state, player1: state.player1 + 1};
    case "INCREMENT_P2": return {...state, player2: state.player2 + 1};
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
  let state = store.getState();
  // pass in state.value as a value prop
  ReactDOM.render(
    <React.StrictMode>
      <App scores={state}
           handleIncrementP1={ () => store.dispatch({ type: "INCREMENT_P1" }) } 
           handleIncrementP2={ () => store.dispatch({ type: "INCREMENT_P2" }) }
           handleReset={ () => store.dispatch({ type: "RESET" }) }/>
    </React.StrictMode>,
    document.getElementById("root") 
    );
  };

  store.subscribe(render); // render when state changes render(); // render when page loads using initial state

  render(); // render when page loads using initial state
