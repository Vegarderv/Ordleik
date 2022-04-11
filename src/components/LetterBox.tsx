import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addGreenLetter,
  addGreyLetter,
  addYellowLetter,
} from "../redux/letters/LetterAction";
import { RootState } from "../redux/rootReducer";
import "../style/guess.css";

type LetterBoxProps = {
  col: number;
  row: number;
  letter: string;
  color: string;
};

const LetterBox = (props: LetterBoxProps) => {

  const dispatch = useDispatch();
  const [finished, setFinished] = useState("");
  const lttr = useSelector((state: RootState) => state.line.suggestion[props.row]);
  const state_colon = useSelector((state: RootState) => state.line.col);
  const state_row = useSelector((state: RootState) => state.line.row);
  const right_word = useSelector((state: RootState) => state.line.word);

  useEffect(() => {
    if (state_row > props.row && finished === "" && props.color !== "") {
      if (props.color === "green") {
        setFinished("green");
        dispatch(addGreenLetter(props.letter));
      } else if (props.color === "yellow") {
        setFinished("yellow");
        dispatch(addYellowLetter(props.letter));
      } else {
        setFinished("gray");
        dispatch(addGreyLetter(props.letter));
      }
    }
  }, [state_colon, props.col, props.row, state_row, finished, props.letter, lttr, right_word, dispatch]);

  return (
    <>
      <div className={"letter-box " + finished}>
        <h3>{props.letter}</h3>
      </div>
    </>
  );
};

export default LetterBox;
