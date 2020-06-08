import React from "react";

const Card = ({ player, score, serving, handleIncrement }) => (
    <div className="row mb-4">
        <div className="col-md-6 mt-4">
            <div className={"card text-center" + (serving ? " bg-dark text-white" : "")}>
                <h5 className="card-header">{player}</h5>
                <div className="card-body">
                    <p className="card-text display-1">{score}</p>
                </div>
                <div className="card-footer">
                    <button className="form-control btn btn-success" onClick={ handleIncrement }>+</button>
                </div>
            </div>
        </div>
    </div>
);

export default Card;