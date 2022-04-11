import React from "react";
import Keyboard from "./Keyboard";
import Guess from "./Guess";
import TopBar from "./TopBar";
import Overlay from "./Overlay";

const GameContainer = () => {
    
  return (
    <>
      <Overlay></Overlay>
      <TopBar></TopBar>
      <Guess></Guess>
      <Keyboard></Keyboard>
      
    </>
  );
};

export default GameContainer;
