import React from "react";

import './App.css';
import AlbumFeature from './features/Album';
import ColorBox from "./components/ColorBox";

function App() {
  return (
    <div className="App">
      <ColorBox color="yellow"></ColorBox>
      <ColorBox color="black"></ColorBox>
    </div>
  );
}

export default App;
