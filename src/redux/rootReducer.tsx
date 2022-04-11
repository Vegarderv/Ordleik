import { combineReducers } from "redux";
import lineReducer from "./line/lineReducer";
import letterReducer from "./letters/LetterReducer";
import statReducer from "./statistics/statReducer";

/**
 * Combination of all reducers
 */
const rootReducer = combineReducers({
  line: lineReducer,
  letter: letterReducer,
  stat: statReducer,
});

export interface RootState {
  letter: {
    green: string,
    yellow: string,
    gray: string,
  },
  line: {
    row: number,
    col: number,
    word: string,
    suggestion: string[],
    correct: boolean,
  },
  stat: {
    hidden: string;
  }
}

export default rootReducer;
