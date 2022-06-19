import React from "react";
import LetterBox from "./LetterBox";
import "../style/guess.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { setFinished } from "../redux/line/lineAction";
import { setHidden } from "../redux/statistics/statAction";
import { arraysEqual, getUserData, userData } from "../utils/helpFunctions";

interface GuessRowProps {
  rowNum: number;
}

const GuessRow = (props: GuessRowProps) => {
  const dispatch = useDispatch();
  const right_word = useSelector((state: RootState) => state.line.word);
  const word = useSelector(
    (state: RootState) => state.line.suggestion[props.rowNum]
  );
  const suggestions = useSelector((state: RootState) => state.line.suggestion)
  const row = useSelector((state: RootState) => state.line.row);
  const col = useSelector((state: RootState) => state.line.col);
  const letters = ["", "", "", "", ""];
  const colors = ["", "", "", "", ""];

  const newLetter = () => {
    if (row === props.rowNum) {
      for (let i = 0; i < col; i++) {
        letters[i] = word.charAt(i);
      }
    } else if (row > props.rowNum) {
      for (let i = 0; i < 5; i++) {
        letters[i] = word.charAt(i);
      }
    }
  };

  const setColors = () => {
    if (row - 1 === props.rowNum && col === 0) {
      let check_word = right_word.toUpperCase().split("");
      for (let i = 0; i < 5; i++) {
        if (check_word.includes(letters[i])) {
          if (check_word[i] === letters[i]) {
            colors[i] = "green";
          } else {
            colors[i] = "yellow";
          }
          check_word.splice(
            check_word.findIndex((a) => a === letters[i]),
            1,
            "?"
          );
        } else if (word != "") {
          colors[i] = "gray";
        }
      }
    }
  };

  const saveNewData = (rows: number) => {
    let data = localStorage.getItem("data");
    const userData = getUserData();
    const myObj = {
      numberOfRows: rows.toString(),
      date: new Date().toISOString(),
      guesses: suggestions,
    };
    if (data === null) {
      data = JSON.stringify({
        games: [myObj],
      });
    }
    if (userData.games.length > 0) {
      if (userData.games.pop()?.date.toDateString() !== new Date().toDateString()) {
        const parsed = JSON.parse(data);
        parsed.games.push(myObj);
        data = JSON.stringify(parsed);
      }
    }
    localStorage.setItem("data", data);
  };

  newLetter();
  setColors();

  if (arraysEqual(colors, ["green", "green", "green", "green", "green"])) {
    dispatch(setHidden(""));
    dispatch(setFinished("true"));
    saveNewData(row);
  } else if (col > 5) {
    saveNewData(row);
  }

  return (
    <>
      <div className="guess-row">
        <LetterBox
          col={0}
          row={props.rowNum}
          letter={letters[0]}
          color={colors[0]}
        ></LetterBox>
        <LetterBox
          col={1}
          row={props.rowNum}
          letter={letters[1]}
          color={colors[1]}
        ></LetterBox>
        <LetterBox
          col={2}
          row={props.rowNum}
          letter={letters[2]}
          color={colors[2]}
        ></LetterBox>
        <LetterBox
          col={3}
          row={props.rowNum}
          letter={letters[3]}
          color={colors[3]}
        ></LetterBox>
        <LetterBox
          col={4}
          row={props.rowNum}
          letter={letters[4]}
          color={colors[4]}
        ></LetterBox>
      </div>
    </>
  );
};

export default GuessRow;
