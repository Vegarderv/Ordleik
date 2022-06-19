import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getRandomLine from "../utils/wordchooser";
import * as Icon from "react-bootstrap-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import { setHidden } from "../redux/statistics/statAction";
import { incrementCol, incrementRow, newWord, setFinished, setSuggestions } from "../redux/line/lineAction";
import { getUserData } from "../utils/helpFunctions";
import { RootState } from "../redux/rootReducer";

const TopBar = () => {
  const dispatch = useDispatch();

  const word = getRandomLine();
  dispatch(newWord(word));

  const lastGame = getUserData().games.pop();
  console.log(getUserData());
  if (lastGame?.date.toDateString() === new Date().toDateString()) {
    if (lastGame.guesses.includes(word.toUpperCase())) {
      console.log(word, lastGame)
      dispatch(setHidden(""));
      dispatch(setFinished("true"));
    }
    dispatch(setSuggestions(lastGame?.guesses));
    
    lastGame?.guesses.forEach(element => {
      if (element !== "") {
        setTimeout(() => {
          dispatch(incrementRow());
        }, 10);
      }
    });
    
  }
  return (
    <>
      <div className="top-bar">
        <div></div>
        <div>
          <h2>ORDLEIK</h2>
        </div>
        <div>
          <Icon.BarChart className="stats" color="whiteSmoke" onClick={() => {dispatch(setHidden(""))}}></Icon.BarChart>
        </div>
      </div>
    </>
  );
};

export default TopBar;
