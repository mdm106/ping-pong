import { connect } from "react-redux";

import Settings from "./Settings";
import { startGame } from "../../data/actions";
import history from "../../history";

const mapStateToProps = ({ player1Name, player2Name, winningScore, alternate }) => {
    return {
        player1Name,
        player2Name,
        winningScore,
        alternate,
      };
  };


const mapDispatchToProps = dispatch => {
    return {
        handleStartGame: data => {
            dispatch(startGame(data));

            history.push("/game");
        },
    }; 
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);