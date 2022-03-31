import React from "react";
import { Keyboard } from "react-bootstrap-icons";
import Guess from "./Guess";
import TopBar from "./TopBar";

const GameContainer = () => {
    
  return (
    <>
      <TopBar></TopBar>
      <Guess></Guess>
      <Keyboard></Keyboard>
    </>
  );
};

export default GameContainer;
