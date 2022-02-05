import { ADD_LETTER, CHANGE_WORD, REMOVE_LETTER, RESET_SUGGESTION } from "./wordTypes";

export interface action {
  type: string;
  payload: string;
}

export const newWord = (value: string) => {
  return {
    type: CHANGE_WORD,
    payload: value,
  };
};

export const addLetter = (value: string) => {
    return {
        type: ADD_LETTER,
        payload: value,
    }
}

export const removeLetter = () => {
  return {
    type: REMOVE_LETTER,
    payload: ""
  }
}

export const resetSuggestion = () => {
    return {
        type: RESET_SUGGESTION,
        payload: ""
    }
}
