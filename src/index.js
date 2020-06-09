import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import initial from '../src/data/initial';
import reducer from '../src/data/reducer';
import store from '../src/data/store';

import { Provider } from 'react-redux';

// we update subscribe to call the ReactDOM.render // method whenever the state changes
const render = () => {
  let { player1, player2, serving, winner, gameHistory } = store.getState();
  // pass in state.value as a value prop
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={ store }>
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
      </Provider>
    </React.StrictMode>,
    document.getElementById("root") 
    );
  };

  store.subscribe(render); // render when state changes render(); // render when page loads using initial state

  render(); // render when page loads using initial state
