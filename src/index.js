import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import store from '../src/data/store';

import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App
        handleIncrementP1={ () => store.dispatch({ type: "INCREMENT_P1" }) } 
        handleIncrementP2={ () => store.dispatch({ type: "INCREMENT_P2" }) }
        handleReset={ () => store.dispatch({ type: "RESET" }) }
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root") 
  );

