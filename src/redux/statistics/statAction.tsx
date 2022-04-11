import {
  SET_HIDDEN
} from "./statTypes";

export interface action {
  type: string;
  payload: string;
}

export const setHidden = (payload: string) => {
  return {
    type: SET_HIDDEN,
    payload: payload,
  };
};
