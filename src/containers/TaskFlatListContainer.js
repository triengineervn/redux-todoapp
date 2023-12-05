import React, { Component } from "react";
import TaskFlatList from "../components/TaskFlatList";
import { connect } from "react-redux";
import finishTask, { deleteTask } from "../actions/TaskFlatListActions";
class TaskFlatListContainer extends Component {
  render() {
    const { data } = this.props.listData;
    const { onFinishedItem, onDeleteItem } = this.props;
    return <TaskFlatList dataList={data} {...this.props} />;
  }
}

export default connect(
  (state) => {
    return { listData: state.taskList };
  },
  (dispatch) => {
    return {
      onFinishedItem: (index) => dispatch(finishTask(index)),
      onDeleteItem: (index) => dispatch(deleteTask(index)),
    };
  }
)(TaskFlatListContainer);
