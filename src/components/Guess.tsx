import React from 'react';
import GuessRow from './GuessRow';

const Guess = () => {
    return (
        <>
            <div className='guess'>
                <GuessRow rowNum={0}></GuessRow>
                <GuessRow rowNum={1}></GuessRow>
                <GuessRow rowNum={2}></GuessRow>
                <GuessRow rowNum={3}></GuessRow>
                <GuessRow rowNum={4}></GuessRow>
                <GuessRow rowNum={5}></GuessRow>
            </div>
        </>
    );
};

export default Guess;
