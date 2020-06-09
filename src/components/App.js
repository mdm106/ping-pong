import React from "react";
import Player from "./Player/Player";
import Result from "./Result";
import Button from "./Reset";
import History from "./History";

const App = ({ player1, player2, serving, winner, gameHistory, handleIncrementP1, handleIncrementP2, handleReset }) => (
    <React.Fragment>
        {/* header */}
        <header className="jumbotron mt-4 mb-0">
            <h1>PongPing</h1>
        </header>

        <Player 
          player="Player 1"
          score={player1}
          serving={serving}
          handleIncrement={handleIncrementP1}
          winner={winner}
        />
        <Player 
          player="Player 2"
          score={player2}
          serving={!serving}
          handleIncrement={handleIncrementP2}
          winner={winner}
        />

        { /* winner message */}
        <Result 
          winner={winner}
        />
        <hr />

        { /* reset button */}
        <Button 
          handleReset={handleReset}
        />

        <History
          gameHistory={gameHistory}
        />
        
    </React.Fragment>
);

export default App;