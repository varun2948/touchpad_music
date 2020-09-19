import React from "react";
import Keyboard from "./components/Keyboard";
import "./App.css";
import Controls from "./components/Controls";

function App() {
  return (
    <div className="main">
      <div className="container">
        <Controls />
        <Keyboard className="keyboard" />
      </div>
    </div>
  );
}

export default App;
