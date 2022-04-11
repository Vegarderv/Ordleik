import {
  INCREMENT_ROW,
  INCREMENT_COL,
  DECREMENT_COL,
  RESET_COL,
  RESET_ROW,
  ADD_LETTER,
  SET_FINISHED,
  NEW_WORD,
  REMOVE_LETTER
} from "./lineTypes";
import { action } from "./lineAction";

const initialState = {
  row: 0,
  col: 0,
  word: "kaffi",
  suggestion: ["", "", "", "","", ""],
  correct: false,
};

const lineReducer = (state = initialState, action: action) => {
  console.log(state.suggestion, state.correct)
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
    case NEW_WORD:
      return {
        ...initialState,
        word: action.payload,
      };
    case ADD_LETTER:
      switch (state.row) {
        case 0:
          return {
            ...state,
            suggestion: [state.suggestion[0] + action.payload, ...state.suggestion.slice(1)],
          };
        case 1:
          return {
            ...state,
            suggestion: [...state.suggestion.slice(0,1), state.suggestion[1] + action.payload, ...state.suggestion.slice(2)],
          };
        case 2:
          return {
            ...state,
            suggestion: [...state.suggestion.slice(0,2), state.suggestion[2] + action.payload, ...state.suggestion.slice(3)],
          };
        case 3:
          return {
            ...state,
            suggestion: [...state.suggestion.slice(0,3), state.suggestion[3] + action.payload, ...state.suggestion.slice(4)],
          };
        case 4:
          return {
            ...state,
            suggestion: [...state.suggestion.slice(0,4), state.suggestion[4] + action.payload, ...state.suggestion.slice(5)],
          };
        case 5:
          return {
            ...state,
            suggestion: [...state.suggestion.slice(0,5), state.suggestion[5] + action.payload],
          };
        default:
          return state;
        
      }
      case REMOVE_LETTER:
      switch (state.row) {
        case 0:
          return {
            ...state,
            suggestion: [state.suggestion[0].slice(0, -1), ...state.suggestion.slice(1)],
          };
        case 1:
          return {
            ...state,
            suggestion: [...state.suggestion.slice(0,1), state.suggestion[1].slice(0, -1), ...state.suggestion.slice(2)],
          }
        case 3:
          return {
            ...state,
            suggestion: [...state.suggestion.slice(0,2), state.suggestion[2].slice(0, -1), ...state.suggestion.slice(3)],
          };
        case 3:
          return {
            ...state,
            suggestion: [...state.suggestion.slice(0,3), state.suggestion[3].slice(0, -1), ...state.suggestion.slice(4)],
          };
        case 4:
          return {
            ...state,
            suggestion: [...state.suggestion.slice(0,4), state.suggestion[4].slice(0, -1), ...state.suggestion.slice(5)],
          };
        case 5:
          return {
            ...state,
            suggestion: [...state.suggestion.slice(0,5), state.suggestion[5].slice(0, -1)],
          };
        default:
          return state;
      }
    case SET_FINISHED:
      console.log(action.payload)
      return {
          ...state,
          correct: action.payload === "true",
        }
      
    default:
      return state;
  }
};

export default lineReducer;
