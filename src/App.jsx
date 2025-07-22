import "tailwindcss"
import Window from "./Components/mainwindow"
import Shortcuts from "./Components/desktopShortcuts"
import Ground from "./Components/bottomGround"

function App() {
  return (
    <div class="">
      <div class="absolute mx-auto content-center items-center w-screen h-screen">
        <Window />
      </div>
      <Shortcuts />
      <div class="flex absolute items-end justify-start w-screen h-screen">
        <Ground/>
      </div>
    </div>
  )
}

export default App
