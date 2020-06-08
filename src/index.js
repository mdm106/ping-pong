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
      <App scores={state}/>
    </React.StrictMode>,
    document.getElementById("root") 
    );
  };

  store.subscribe(render); // render when state changes render(); // render when page loads using initial state

  render(); // render when page loads using initial state
