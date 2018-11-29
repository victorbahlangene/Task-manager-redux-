//evaluates any actions commited

import { INPUT_VALUE } from "../Actions/listActions";

/*
const initialState = {
  toDoArr: []
};
*/

// clean up
//the meat of the toDoReducer
export default (state = [], action) => {
  switch (action.type) {
    case INPUT_VALUE:
      return [...state, action.message];
    default:
      return state;
  }
};
