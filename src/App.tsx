import React from "react";
import "./App.css";
import Keyboard from "./components/Keyboard";
import Guess from "./components/Guess";
import TopBar from "./components/TopBar";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <TopBar></TopBar>
        <Guess></Guess>
        <Keyboard></Keyboard>
      </Provider>
    </div>
  );
}

export default App;
