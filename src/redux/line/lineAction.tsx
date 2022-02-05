import {
  INCREMENT_ROW,
  INCREMENT_COL,
  DECREMENT_COL,
  RESET_ROW,
  RESET_COL,
} from "./lineTypes";

export interface action {
  type: string;
  payload: string;
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
