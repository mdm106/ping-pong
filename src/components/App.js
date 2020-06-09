import React from "react";
import Player1 from "./Player/Player1";
import Player2 from "./Player/Player2";
import Result from "./Result/index";
import Button from "./Reset";
import History from "./History/index";

const App = ({ handleIncrementP1, handleIncrementP2, handleReset }) => (
    <React.Fragment>
        {/* header */}
        <header className="jumbotron mt-4 mb-0">
            <h1>PongPing</h1>
        </header>

        <Player1 
          player="Player 1"
          handleIncrement={handleIncrementP1}
        />
        <Player2
          player="Player 2"
          handleIncrement={handleIncrementP2}
        />

        { /* winner message */}
        <Result />
        <hr />

        { /* reset button */}
        <Button 
          handleReset={handleReset}
        />

        <History />
        
    </React.Fragment>
);

export default App;