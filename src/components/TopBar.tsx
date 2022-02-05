import React from "react";
import { useDispatch } from "react-redux";
import { newWord } from "../redux/word/wordAction"; 
import getRandomLine from "../utils/wordchooser";

const TopBar = () => {
  const dispatch = useDispatch();

  dispatch(newWord(getRandomLine()))
  return (
    <>
      <div className="top-bar">
        <h2>ORDLEIK</h2>
      </div>
    </>
  );
};

export default TopBar;
