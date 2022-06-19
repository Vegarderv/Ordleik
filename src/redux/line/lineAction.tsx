import {
  INCREMENT_ROW,
  INCREMENT_COL,
  DECREMENT_COL,
  RESET_ROW,
  RESET_COL,
  ADD_LETTER,
  SET_FINISHED,
  NEW_WORD,
  REMOVE_LETTER,
  SET_SUGGESTIONS,
} from "./lineTypes";

export interface action {
  type: string;
  payload: string;
  payloadList?: string[];
}

export const incrementRow = () => {
  return {
    type: INCREMENT_ROW,
    payload: "",
  };
};
export const incrementCol = () => {
  return {
    type: INCREMENT_COL,
    payload: "",
  };
};
export const DecrementCol = () => {
  return {
    type: DECREMENT_COL,
    payload: "",
  };
};

export const resetRow = () => {
  return {
    type: RESET_ROW,
    payload: "",
  };
};
export const resetCol = () => {
  return {
    type: RESET_COL,
    payload: "",
  };
};

export const addLetter = (letter: string) => {
  return {
    type: ADD_LETTER,
    payload: letter,
  };
};

export const newWord = (word: string) => {
  return {
    type: NEW_WORD,
    payload: word,
  };
};

export const setFinished = (word: string) => {
  return {
    type: SET_FINISHED,
    payload: word,
  };
};

export const removeLetter = () => {
  return {
    type: REMOVE_LETTER,
    payload: "",
  };
};

export const setSuggestions = (payloadString: string[]) => {
  return {
    type: SET_SUGGESTIONS,
    payload: "",
    payloadList: payloadString,
  };
};
