import React from "react";
import LetterBox from "./LetterBox";
import "../style/guess.css";

interface GuessRowProps {
  rowNum: number;
}

const GuessRow = (props: GuessRowProps) => {
  return (
    <>
      <div className="guess-row">
        <LetterBox col={0} row={props.rowNum}></LetterBox>
        <LetterBox col={1} row={props.rowNum}></LetterBox>
        <LetterBox col={2} row={props.rowNum}></LetterBox>
        <LetterBox col={3} row={props.rowNum}></LetterBox>
        <LetterBox col={4} row={props.rowNum}></LetterBox>
      </div>
    </>
  );
};

export default GuessRow;
