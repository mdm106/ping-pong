import React, { Component } from "react";

class Settings extends Component {
    constructor(props) {
        super(props);
        
        let { player1Name, player2Name, winningScore, alternate } = props;

        this.state = {
            player1Name,
            player2Name,
            winningScore,
            alternate,
        };

        this.handleP1 = this.handleP1.bind(this);
        this.handleP2 = this.handleP2.bind(this);
        this.handleScore = this.handleScore.bind(this);
        this.handleAlternate = this.handleAlternate.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleP1(e) {
        this.setState({ player1Name: e.currentTarget.value });
    }

    handleP2(e) {
        this.setState({ player2Name: e.currentTarget.value });
    }

    handleScore(e) {
        this.setState({ winningScore: e.currentTarget.value });
    }

    handleAlternate(e) {
        this.setState({ alternate: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleStartGame({ ...this.state })
    }

    render() {
        let { player1Name, player2Name, winningScore, alternate } = this.state;

        return (
            <>
                <h1 className="display-4">PongPing</h1>
                <form onSubmit={ this.handleSubmit }>
                    <div className="form-group"> 
                        <label>Player 1 Name
                        <input
                            className="form-control"
                            onChange={ this.handleP1 }
                            value={ player1Name }
                            type="text"
                        /> 
                        </label>
                    </div>
                    <div className="form-group"> 
                        <label>Player 2 Name
                        <input
                            className="form-control"
                            onChange={ this.handleP2 }
                            value={ player2Name }
                            type="text"
                        /> 
                        </label>
                    </div>
                    <div className="form-group">
                        <label>Winning Score
                        <input
                            className="form-control"
                            onChange={ this.handleScore }
                            value={ winningScore }
                            type="number"
                        /> 
                        </label>
                    </div>
                    <div className="form-group">
                        <label>Alternate Every
                        <input
                            className="form-control"
                            onChange={ this.handleAlternate }
                            value={ alternate }
                            type="number"
                        /> 
                        </label>
                    </div>
                    <button className="btn btn-primary">Start Game</button> 
                </form>
            </>
        );
    }
}

export default Settings;