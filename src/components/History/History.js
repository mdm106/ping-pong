import React from "react";

const History = ({ gameHistory, handleDelete }) => {
    return (
        <>
        { gameHistory===[] ? 
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
                        {gameHistory.reverse().map((game, i) => (
                        <React.Fragment key= { i }>
                            <tr>
                                <td colSpan="2" style={{fontWeight: "bold"}}>Game {i+1}</td>
                                <td>
                                    <button className="btn btn-primary"
                                            onClick={() => handleDelete(game.id)}>
                                        x
                                    </button>
                                </td>
                            </tr>
                            <tr className={game.player_1.won ? "table-success" : game.complete ? "table-danger" : "table-secondary"}>
                                <td>Player 1</td>
                                <td>{game.player_1.score}</td>
                                <td>{!game.complete ? "Incomplete game" : game.player_1.won ? "Won" : "Lost"}</td>
                            </tr> 
                            <tr className={game.player_2.won ? "table-success" : game.complete ? "table-danger" : "table-secondary"}>
                                <td>Player 2</td>
                                <td>{game.player_2.score}</td>
                                <td>{!game.complete ? "Incomplete game" : game.player_2.won ? "Won" : "Lost"}</td>
                            </tr> 
                        </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        }
        </>
    );
};

export default History;