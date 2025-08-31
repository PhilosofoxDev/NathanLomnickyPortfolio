import "tailwindcss";
import Shortcuts from "./Components/desktopShortcuts";
import Ground from "./Components/bottomGround";
import Background from "./Components/background";
import React, { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className={isDark ? "dark" : ""}>
      <div className="select-none z-100">
        <div className="flex absolute items-end justify-start w-screen h-screen">
          <Ground Mode={isDark ? true : false} />
        </div>
        <div className="">
          <Shortcuts Mode={isDark} setMode={setIsDark} />
        </div>
      </div>
      <Background Mode={isDark} />
    </div>
  );
}

export default App;
