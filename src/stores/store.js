// Store
import { combineReducers, createStore } from "redux";
import numberReducer from "../reducers/NumberReducer";
import taskListReducer from "../reducers/TaskListReducer";

const rootReducer = combineReducers({
  number: numberReducer,
  taskList: taskListReducer,
});
const store = createStore(rootReducer);
export default store;
