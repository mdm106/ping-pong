import { connect } from "react-redux";

import History from "./History";

import { deleteGame } from "../../data/actions/api";
// mapStateToProps: maps the current state (from the store)
// to the props that get passed into the wrapped component
// needs to return an object literal which gets merged in
// to any other props being passed in
 const mapStateToProps = ({ gameHistory }) => {
  return {
    gameHistory: gameHistory,
    };
};

const mapDispatchToProps = dispatch => {
  return {
    handleDelete: (id) => dispatch(deleteGame(id)),
  };
};


// use the connect function to connect mapStateToProps
// to the React component we want to wrap
// returns a new React component
export default connect(mapStateToProps, mapDispatchToProps)(History);