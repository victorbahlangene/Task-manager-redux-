/* ROOT REDUCER */

import { combineReducers } from "redux";
import toDoReducer from "./toDoReducer";
//add toDoReducer

export default combineReducers({
  //reducer name:
  list: toDoReducer
});
