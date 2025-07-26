import "tailwindcss";
import Shortcuts from "./Components/desktopShortcuts";
import Ground from "./Components/bottomGround";
import AboutWindow from "./Components/aboutWindow";
import React from "react";
import Draggable from "react-draggable";

function App() {
  return (
    <div className="select-none">
      <Shortcuts/>
      <div className="flex absolute items-end justify-start w-screen h-screen">
        <Ground/>
      </div>
    </div>
  )
}

export default App
