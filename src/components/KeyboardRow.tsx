import React from "react";
import Letter from "./Letter";
import "../style/keyboard.css";

interface KeyboardRowProps {
  letters: string[];
}

const KeyboardRow = (props: KeyboardRowProps) => {
  return (
    <>
      <div className="keyboard-row">
        {props.letters.map((letter: string) => {
          return <Letter letter={letter} key={letter}></Letter>;
        })}
      </div>
    </>
  );
};

export default KeyboardRow;
