import { action } from "./LetterAction";
import { ADD_GREEN, ADD_GREY, ADD_YELLOW } from "./LetterTypes";

const initialState = {
  green: "",
  yellow: "",
  gray: "",
};

const letterReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case ADD_GREEN:
      return {
        ...state,
        green: state.green + action.payload,
      };
    case ADD_GREY:
      return {
        ...state,
        gray: state.gray + action.payload,
      };
    case ADD_YELLOW:
      return {
        ...state,
        yellow: state.yellow + action.payload,
      };
    default:
      return state;
  }
};

export default letterReducer;
