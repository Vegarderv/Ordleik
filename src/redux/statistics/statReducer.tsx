import {
  SET_HIDDEN
} from "./statTypes";
import { action } from "./statAction";

const initialState = {
  hidden: "hidden",
};

const statReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case SET_HIDDEN:
      return {
        hidden: action.payload,
      }
    default:
      return state;
  }
};

export default statReducer;
