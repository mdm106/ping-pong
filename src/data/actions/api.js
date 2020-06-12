import axios from "../../axios";

import { startGame, incrementP1, incrementP2, reset, loaded } from "./state";

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

export const patchScoreP1 = () => {
    return (dispatch, getState) => {
        axios.patch(`/${getState().id}/score`, {
            player: 1,
        }).then(({ data }) => {
            dispatch(incrementP1(data.data));
        })
    };
}

export const patchScoreP2 = () => {
    return (dispatch, getState) => {
        axios.patch(`/${getState().id}/score`, {
            player: 2,
        }).then(({ data }) => {
            dispatch(incrementP2(data.data));
        })
    };
}

export const getGameReset = () => {
    return (dispatch, getState) => {
        axios.get("/").then(({ data }) => {
            dispatch(reset(data.data));
        })
    };
}

export const getGames = () => {
    return (dispatch) => {
        axios.get("/").then(({ data }) => {
            dispatch(loaded(data.data));
        })
    };
}
