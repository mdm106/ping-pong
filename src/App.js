import React from "react";
import Card from "./components/Card";

const App = ({ player1, player2, serving, winner, handleIncrementP1, handleIncrementP2, handleReset }) => (
    <React.Fragment>
        {/* header */}
        <header className="jumbotron mt-4 mb-0">
            <h1>PongPing</h1>
        </header>

        <Card 
          player="Player 1"
          score={player1}
          serving={serving}
          handleIncrement={handleIncrementP1}
          winner={winner}
        />
        <Card 
          player="Player 2"
          score={player2}
          serving={!serving}
          handleIncrement={handleIncrementP2}
          winner={winner}
        />

        { /* winner message */}
        { winner === "" ? "" : <h2 className="alert alert-success">Player {winner} wins!</h2>}
        <hr />

        { /* reset button */}
        <button className="btn btn-danger" onClick={ handleReset }>Reset</button>
    </React.Fragment>
);

export default App;