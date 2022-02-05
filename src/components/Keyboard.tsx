import React from 'react';
import KeyboardRow from './KeyboardRow';
import '../style/keyboard.css'

const Keyboard = () => {
    return (
        <>
            <div className='keyboard'>
                <KeyboardRow letters={["Q", "W", "R", "T", "Y", "U", "I", "O", "P", "Å"]}></KeyboardRow>
                <KeyboardRow letters={["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ø", "Æ"]}></KeyboardRow>
                <KeyboardRow letters={["Enter", "Z", "X", "C", "V", "B", "N", "M", "⌫"]}></KeyboardRow>
            </div>
        </>
    );
};

export default Keyboard;