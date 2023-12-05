import React, { Component } from "react";
import { connect } from "react-redux";
import AddView from "../components/AddView";
import addTask from "../actions/AddViewActions";
class AddViewContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onAddNewTask } = this.props;
    return <AddView {...this.props} />;
  }
}

export default connect(
  (state) => {},
  (dispatch) => {
    return {
      onAddNewTask: (name) => dispatch(addTask(name)),
    };
  }
)(AddViewContainer);
