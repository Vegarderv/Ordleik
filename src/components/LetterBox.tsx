import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addGreenLetter, addGreyLetter, addYellowLetter } from '../redux/letters/LetterAction';
import { RootState } from '../redux/rootReducer';
import "../style/guess.css"

type LetterBoxProps = {
    col: number;
    row: number;
}


const LetterBox = (props: LetterBoxProps) => {

    const dispatch = useDispatch();
    const [finished, setFinished] = useState("");
    const [letter, setLetter] = useState("");
    const lttr = useSelector((state: RootState) => state.word.suggestion)
    const state_colon = useSelector((state: RootState) => state.line.col)
    const state_row = useSelector((state: RootState) => state.line.row)
    const right_word = useSelector((state: RootState) => state.word.word)

    if (state_colon-1 === props.col && state_row === props.row){
        if (letter === "") {
            setLetter(lttr.charAt(props.col));
        }
    } else if (state_colon === props.col && state_row === props.row){
        if (letter !== "") {
            setLetter("");
        }
    } else if (state_row > props.row && finished === "") {
        if (right_word.charAt(props.col) === letter.toUpperCase()){
            setFinished("green");
            dispatch(addGreenLetter(letter))
        }
        else if (right_word.includes(letter.toUpperCase())) {
            setFinished("yellow")
            dispatch(addYellowLetter(letter))
        }
        else{ 
            setFinished("gray")
            dispatch(addGreyLetter(letter))
        }
    }

    return (
        <>
        <div className={"letter-box " + finished}>
            <h3>{letter}</h3>
        </div>
        </>
    );
};

export default LetterBox;