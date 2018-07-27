import { combineReducers } from "redux";
import { counterReducer } from "./counter";
import { timeReducer } from "./time";

const rootReducer = combineReducers({
  counterState: counterReducer,
  timeState: timeReducer
});

export default rootReducer;
