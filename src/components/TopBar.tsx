import React, { useState } from "react";
import { useDispatch } from "react-redux";
import getRandomLine from "../utils/wordchooser";
import * as Icon from "react-bootstrap-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import { setHidden } from "../redux/statistics/statAction";
import { newWord } from "../redux/line/lineAction";

const TopBar = () => {
  const dispatch = useDispatch();

  dispatch(newWord(getRandomLine()));
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
