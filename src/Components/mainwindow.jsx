import "tailwindcss";
import React from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";
import _default from "tailwindcss/colors";

export default function Window({ homeOpen, homeOnClose }) {
  return (
    <div
      className={`transition-all ${
        homeOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
    >
      <div className="absolute shrink bg-windowBox mb-15 lg:w-205 lg:h-130 drop-shadow-2xl/20 rounded-sm self-center justify-self-center outline-2 outline-black z-100">
        {/*Change color to whatever works*/}
        <div className="flex w-full items-center bg-siteGreen h-15 rounded-t-sm justify-between drop-shadow-lg/25 outline-2">
          <h1 className="text-3xl font-dotoBold text-white ml-4 mb-0.5">
            &lt;home&gt;
          </h1>
          <button
            onClick={homeOnClose}
            className="mr-2 max-w-15 max-h-10 justify-items-center text-center hover:bg-black/20"
          >
            <h1 className="cursor-pointer pl-4 group-hover:select-none text-3xl font-dotoBold text-white self-center justify-self-center mb-1 mr-3">
              &#91;X&#93;
            </h1>
          </button>
        </div>
        <div className="flex flex-col justify-center h-115 max-w-full max-h-115 text-wrap overflow-y-auto wrap-anywhere">
          <div className="align-middle font-outfit text-black">
            <h1 className="text-[4.1rem] mb-5 justify-self-center">
              Hey! I'm <span className="text-green-700">Nathan</span> :&#41;
            </h1>
          </div>
          <h2 className="text-3xl mb-20 font-outfit self-center">
            Game Designer, Developer, Creator
          </h2>
          <div className="text-center">
            <h2 className="text-2xl font-outfit mr-5 ml-5">
              <span className="font-outfitBold">Welcome</span> to my site!{" "}
              <span className="font-outfitBold">Double Click</span> on the
              different <span className="font-outfitBold">Desktop Icons</span>{" "}
              to navigate.
            </h2>
            <h2 className="mt-4 font-outfitMedium text-[1.2rem]">
              &#40;You can also click an icon to bring an already-opened window
              to the front&#41;
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
