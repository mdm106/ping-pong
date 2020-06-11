import { connect } from "react-redux";

import Settings from "./Settings";
import { postGame } from "../../data/actions/api";
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
            dispatch(postGame(data));

            history.push("/game");
        },
    }; 
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);