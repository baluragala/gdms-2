import { combineReducers } from "redux";
import { counterReducer } from "./counter";
import { timeReducer } from "./time";
import { githubReducer } from "./github";

const rootReducer = combineReducers({
  counterState: counterReducer,
  timeState: timeReducer,
  githubState: githubReducer
});

export default rootReducer;
