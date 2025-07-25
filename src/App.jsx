import "tailwindcss";
import Shortcuts from "./Components/desktopShortcuts";
import Ground from "./Components/bottomGround";
import AboutWindow from "./Components/aboutWindow";
import React from "react";

function App() {
  return (
    <div class="select-none">
      <Shortcuts/>
      <div class="flex absolute items-end justify-start w-screen h-screen">
        <Ground/>
      </div>
    </div>
  )
}

export default App
