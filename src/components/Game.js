import React from "react";

import Player1 from "./Player/Player1";
import Player2 from "./Player/Player2";
import Result from "./Result";
import Reset from "./Reset";
import History from "./History";

const Game = () => (
    <React.Fragment>
        {/* header */}
        <header className="jumbotron mt-4 mb-0">
            <h1>PongPing</h1>
        </header>

        <Player1 
          player="Player 1"
        />
        <Player2
          player="Player 2"
        />

        { /* winner message */}
        <Result />
        <hr />

        { /* reset button */}
        <Reset />

        <History />
        
    </React.Fragment>
);

export default Game;