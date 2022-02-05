import { ADD_GREEN, ADD_GREY, ADD_YELLOW } from "./LetterTypes"


export interface action {
    type: string;
    payload: string;
}
  
export const addGreyLetter = (value: string) => {
    return {
        type: ADD_GREY,
        payload: value,
    }
}
export const addGreenLetter = (value: string) => {
    return {
        type: ADD_GREEN,
        payload: value,
    }
}
export const addYellowLetter = (value: string) => {
    return {
        type: ADD_YELLOW,
        payload: value,
    }
}
