import Shortcuts from "./Components/desktopShortcuts";
import Ground from "./Components/bottomGround";
import Background from "./Components/background";
import React, { useState } from "react";
import { HashRouter as Router } from "react-router-dom";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <Router>
      <div className={`${isDark ? "dark" : ""}`}>
        <div className="select-none z-100">
          <div className="flex absolute items-end justify-start w-screen h-screen">
            <Ground Mode={isDark ? true : false} />
          </div>
          <div>
            <Shortcuts Mode={isDark} setMode={setIsDark} />
          </div>
        </div>
        <Background Mode={isDark} />
      </div>
    </Router>
  );
}

export default App;
