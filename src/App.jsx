import "tailwindcss";
import Shortcuts from "./Components/desktopShortcuts";
import Ground from "./Components/bottomGround";
import AboutWindow from "./Components/aboutWindow";
import React from "react";
import Draggable from "react-draggable";

function App() {
  return (
    <div className="select-none z-100">
      <div className="flex absolute items-end justify-start w-screen h-screen">
        <Ground />
      </div>
      <Shortcuts />
    </div>
  );
}

export default App;
