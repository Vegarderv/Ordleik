import { combineReducers } from "redux";
import wordReducer from "./word/wordReducer";
import lineReducer from "./line/lineReducer";
import letterReducer from "./letters/LetterReducer";

/**
 * Combination of all reducers
 */
const rootReducer = combineReducers({
  word: wordReducer,
  line: lineReducer,
  letter: letterReducer,
});

export interface RootState {
  letter: {
    green: string,
    yellow: string,
    gray: string,
  },
  word: {
    word: string;
    suggestion: string;
  },
  line: {
    row: number;
    col: number;
  };
}

export default rootReducer;
