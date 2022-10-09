import React from "react";

import './App.css';
import ColorBox from "./components/ColorBox";
import CT01Variables from "./components/CT01Variables";

function App() {


  return (
    <div className="App">
      <CT01Variables></CT01Variables>
      <ColorBox color="red"></ColorBox>
      <ColorBox color="yellow" rounded={false}></ColorBox>
    </div>
  );
}

export default App;
