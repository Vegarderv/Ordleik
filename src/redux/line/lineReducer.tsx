import {
  INCREMENT_ROW,
  INCREMENT_COL,
  DECREMENT_COL,
  RESET_COL,
  RESET_ROW,
} from "./lineTypes";
import { action } from "./lineAction";

const initialState = {
  row: 0,
  col: 0,
};

const lineReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case INCREMENT_ROW:
      if (state.row < 6) {
        return {
          ...state,
          row: state.row + 1,
        };
      } else {
        return state;
      }

    case INCREMENT_COL:
      if (state.col < 5) {
        return {
          ...state,
          col: state.col + 1,
        };
      } else {
        return state;
      }

    case DECREMENT_COL:
      if (state.col > 0) {
        return {
          ...state,
          col: state.col - 1,
        };
      } else {
        return state;
      }

    case RESET_ROW:
      return {
        ...state,
        row: 0,
      };
    case RESET_COL:
      return {
        ...state,
        col: 0,
      };
    default:
      return state;
  }
};

export default lineReducer;
