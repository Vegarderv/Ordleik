import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addLetter,
  DecrementCol,
  incrementCol,
  incrementRow,
  removeLetter,
  resetCol,
} from "../redux/line/lineAction";
import { RootState } from "../redux/rootReducer";
import "../style/keyboard.css";
import wordList from "../utils/resources/5_bokstaver.json";

type letterProps = {
  letter: string;
};

const Letter = (props: letterProps) => {
  const dispatch = useDispatch();
  const col = useSelector((state: RootState) => state.line.col);
  const row = useSelector((state: RootState) => state.line.row);
  const hidden = useSelector((state: RootState) => state.stat.hidden);
  const suggested = useSelector(
    (state: RootState) => state.line.suggestion[row]
  );
  const greenLetters = useSelector((state: RootState) => state.letter.green);
  const yellowLetters = useSelector((state: RootState) => state.letter.yellow);
  const grayLetters = useSelector((state: RootState) => state.letter.gray);

  const correct = useSelector((state: RootState) => state.line.correct);

  const [theme, setTheme] = useState("light");
  const [tooltip, setTooltip] = useState(false);
  let finished = "";
  if (greenLetters.includes(props.letter)) finished = " green";
  else if (yellowLetters.includes(props.letter)) finished = " yellow";
  else if (grayLetters.includes(props.letter)) finished = " black";

  const special =
    props.letter === "⌫" || props.letter === "Enter" ? " special" : "";

  const writeLetter = () => {
    if (!correct) {
      if (special === "") {
        dispatch(addLetter(props.letter));
        dispatch(incrementCol());
      } else if (props.letter === "⌫") {
        dispatch(removeLetter());
        dispatch(DecrementCol());
      } else if (props.letter === "Enter" && col === 5) {
        if (wordList.includes(suggested.toUpperCase())) {
          setTimeout(() => {
            // Delay this action by one second
            dispatch(resetCol());
          }, 0);
          dispatch(incrementRow());
        } else {
          setTooltip(true);
        }
      }
    }
  };

  const handleKeyboardInput = (event: any) => {
    if (
      event.key === props.letter ||
      event.key === props.letter.toLowerCase() ||
      (event.key === "Backspace" && props.letter === "⌫")
    ) {
      writeLetter();
    }
  };

  if (props.letter === "Enter" && col < 5) {
    if (tooltip) {
      setTooltip(false);
    }
  }

  useEffect(() => {
    if (hidden === "hidden" && !correct) {
      document.addEventListener("keyup", handleKeyboardInput, false);

      return () => {
        document.removeEventListener("keyup", handleKeyboardInput, false);
      };
    }
  });

  if (!tooltip) {
    return (
      <>
        <div
          className={"letter letter-" + theme + special + finished}
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
  } else {
    return (
      <OverlayTrigger
        key={"top"}
        placement={"top"}
        overlay={<Tooltip id={`tooltip-${"top"}`}>Ikke et ord.</Tooltip>}
      >
        <div
          className={"letter letter-" + theme + special}
          onClick={() => writeLetter()}
          onMouseDown={() => setTheme("dark")}
          onTouchStart={() => setTheme("dark")}
          onMouseUp={() => setTheme("light")}
          onTouchEnd={() => setTheme("light")}
        >
          <h3>{props.letter}</h3>
        </div>
      </OverlayTrigger>
    );
  }
};

export default Letter;
