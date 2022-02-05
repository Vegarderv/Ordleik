import React from "react";
import { useState } from "react";
import "../style/keyboard.css";

type letterProps = {
  letter: string;
};

const Letter = (props: letterProps) => {
  const writeLetter = () => {
    return props.letter;
  };
  const [theme, setTheme] = useState("light");


  const special = (props.letter === "⌫" || props.letter === "Enter") ? " special" : "";

  return (
    <>
      <div
        className={"letter letter-" + theme +special}
        onClick={() => writeLetter()}
        onMouseDown={() => setTheme("dark")}
        onTouchStart={() => setTheme("dark")}
        onMouseUp={() => setTheme("light")}
        onTouchEnd={() => setTheme("light")}
      >
        <h3>{props.letter}</h3>
      </div>
    </>
  );
};

export default Letter;
