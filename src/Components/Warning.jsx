import "tailwindcss";
import React from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";
import warningLogo from "../assets/images/WarningPixelart.png";
import _default from "tailwindcss/colors";

export default function Warning({ warnOpen, warnOnClose }) {
  return (
    <div
      className={`transition-all duration-200 ${
        warnOpen
          ? "lg:scale-0 lg:opacity-0 scale-100 opacity-100"
          : "scale-0 opacity-0"
      }`}
    >
      <div className="absolute shrink bg-windowBox dark:bg-darkModeWindow mt75 ml-20 w-120 h-70 lg:w-205 lg:h-130 dark:drop-shadow-white drop-shadow-2xl/20 rounded-sm self-center justify-self-center outline-2 dark:outline-white outline-black z-100">
        {/*Change color to whatever works*/}
        <div className="flex w-full items-center bg-yellow-500 h-12 lg:h-15 rounded-t-sm justify-between drop-shadow-lg/25 outline-2 dark:bg-darkModeOrange dark:outline-white">
          <img
            src={warningLogo}
            className="h-14 w-15 dark:invert-100 transition-all duration-300 ease-in-out"
          />
          <button
            onClick={warnOnClose}
            className="mr-3 mt-3 max-w-15 max-h-10 justify-items-center text-center hover:bg-black/20"
          >
            <h1 className="cursor-pointer pl-4 group-hover:select-none text-3xl font-dotoBold text-white self-center justify-self-center mb-1 mr-3">
              &#91;X&#93;
            </h1>
          </button>
        </div>
        <div className="justify-items-center text-black dark:text-white text-shadow-md dark:text-shadow-white/30 font-outfit">
          <h1 className="mt-5 text-3xl font-outfitMedium">Heads Up!</h1>
          <h1 className="mt-5 ml-3 mr-3 text-xl text-center">
            This site is much better expereinced on a device with a fuller
            resolution. Some features may not work as well on smaller devices.
            Please opt for a larger resolution to get the best experience!
            :&#41;
          </h1>
        </div>
      </div>
    </div>
  );
}
