import React from "react";

const History = ({ gameHistory }) => {
    let { player_1, player_2 } = gameHistory[0];

    return (
        <>
        { !(player_1.won || player_2.won) ? 
                <h2 className="alert alert-secondary mt-2">No previous results to display</h2> 
            :
            <div className="mt-2">
                <h2 className="alert alert-secondary">Previous game results:</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Player</th>
                            <th>Score</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Player 1</td>
                            <td>{player_1.score}</td>
                            <td>{player_1.won ? "Won" : "Lost"}</td>
                        </tr> 
                        <tr>
                            <td>Player 2</td>
                            <td>{player_2.score}</td>
                            <td>{player_2.won ? "Won" : "Lost"}</td>
                        </tr> 
            
                    </tbody>
                </table>
            </div>
        }
        </>
    );
};

export default History;