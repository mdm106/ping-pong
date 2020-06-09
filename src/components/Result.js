import React from "react";

const Result = ({ winner }) => (
    <h2 className="alert alert-success"
        style={{display: winner === "" ? "none" : "block"}}>
        Player {winner} wins!
    </h2>
);

export default Result;