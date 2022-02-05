import React from 'react';
import logo from './logo.svg';
import './App.css';
import Keyboard from './components/Keyboard';
import Guess from './components/Guess';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar></TopBar>
      <Guess></Guess>
      <Keyboard></Keyboard>
      
    </div>
  );
}

export default App;
