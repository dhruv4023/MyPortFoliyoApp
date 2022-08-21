import { combineReducers } from "redux";
import contactReducer from "./contact";
import chatDataReducer from "./chatData";
import currentUserReducer from "./currentUser.js";
import projectReducer from "./project";

export default combineReducers({
  contactReducer,
  chatDataReducer,
  currentUserReducer,
  projectReducer,
});
