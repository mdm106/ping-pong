import React from "react";

const History = ({ gameHistory }) => {
    return (
        <>
        { !(gameHistory[0].player_1.won || gameHistory[0].player_2.won) ? 
                <h2 className="alert alert-secondary mt-2">No previous results to display</h2> 
            :
            <div className="mt-2">
                <h2 className="alert alert-secondary">Previous results:</h2>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th>Player</th>
                            <th>Score</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        {gameHistory.map((game, i) => (
                        <>
                            <tr key={ i }>
                                <td colSpan="3" style={{fontWeight: "bold"}}>Game {i+1}</td>
                            </tr>
                            <tr className={game.player_1.won ? "table-success" : "table-danger"}>
                                <td>Player 1</td>
                                <td>{game.player_1.score}</td>
                                <td>{game.player_1.won ? "Won" : "Lost"}</td>
                            </tr> 
                            <tr className={game.player_2.won ? "table-success" : "table-danger"}>
                                <td>Player 2</td>
                                <td>{game.player_2.score}</td>
                                <td>{game.player_2.won ? "Won" : "Lost"}</td>
                            </tr> 
                        </>
                        ))}
                    </tbody>
                </table>
            </div>
        }
        </>
    );
};

export default History;