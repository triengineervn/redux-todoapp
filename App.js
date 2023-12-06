import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { Provider } from "react-redux";
import CounterContainer from "./src/containers/CounterContainer";
import TaskFlatListContainer from "./src/containers/TaskFlatListContainer";
import AddViewContainer from "./src/containers/AddViewContainer";
import store from "./src/stores/store";

export default class Todo extends Component {
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
