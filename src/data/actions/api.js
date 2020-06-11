import axios from "../../axios";

import { startGame } from "./state";

export const postGame = ({ player1Name, player2Name, winningScore, alternate }) => {
    return (dispatch) => {
        axios.post("/", {
            player_1: player1Name,
            player_2: player2Name,
            winning_score: winningScore,
            change_serve: alternate,
        }).then(({ data }) => {
            dispatch(startGame(data.data));
        })
    };
}
