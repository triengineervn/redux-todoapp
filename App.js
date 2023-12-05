import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { combineReducers, createStore } from "@reduxjs/toolkit";

import { Provider } from "react-redux";
import CounterContainer from "./src/containers/CounterContainer";
import TaskFlatListContainer from "./src/containers/TaskFlatListContainer";
import AddViewContainer from "./src/containers/AddViewContainer";
import numberReducer from "./src/reducers/NumberReducer";
import taskListReducer from "./src/reducers/TaskListReducer";

// Store

const rootReducer = combineReducers({
  number: numberReducer,
  taskList: taskListReducer,
});
const store = createStore(rootReducer);

// Test

export default class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { title: "Go to the office", isFinished: true },
        { title: "Prepare tasks for today", isFinished: false },
        { title: "Team meeting", isFinished: false },
        { title: "Commit tasks changed", isFinished: false },
      ],
    };
  }

  onAddNewTask = (taskName) => {
    const newTask = { title: taskName, isFinished: false };
    const newTaskList = [...this.state.data, newTask];

    this.setState({ data: newTaskList });
  };

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AddViewContainer />
          <CounterContainer />
          <TaskFlatListContainer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E1F5FE",
  },
});
