import "tailwindcss"
import Window from "./Components/mainwindow"
import Shortcuts from "./Components/desktopShortcuts"

function App() {
  return (
    <div class="fixed">
      <div class="absolute mx-auto content-center items-center w-screen h-screen">
        <Window />
      </div>
      <Shortcuts />
    </div>
  )
}

export default App
