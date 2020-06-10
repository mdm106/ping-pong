import React from "react";
import history from "../history";
import { Router, 
         Switch,
         Route } from "react-router-dom";

import Game from "./Game";
import Settings from "./Settings";

const App = () => {
  return (
    <Router history={ history }>
      <Switch>
        <Route exact path="/">
            <Settings />
        </Route>
        <Route exact path="/game">
            <Game />
        </Route>
      </Switch>
    </Router>
  )
};

export default App;