import { ADD_LETTER, CHANGE_WORD, REMOVE_LETTER, RESET_SUGGESTION } from "./wordTypes";
import { action } from "./wordAction";

const initialState = {
  word: "kaffi",
  suggestion: "",
};

const wordReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case CHANGE_WORD:
      return {
        ...state,
        word: action.payload,
      };
    case ADD_LETTER:
      if (state.suggestion.length < 5) {
        return {
          ...state,
          suggestion: state.suggestion + action.payload
        };
      } return state;
    case REMOVE_LETTER:
      return{
        ...state,
        suggestion: state.suggestion.slice(0, state.suggestion.length - 1)
      }
    case RESET_SUGGESTION:
      return {
        ...state,
        suggestion: ""
      };
    default:
      return state;
  }
};

export default wordReducer;
