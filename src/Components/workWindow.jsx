import "tailwindcss";
import React, { useState } from "react";
import Draggable from "react-draggable";
import Chevron from "react-chevron";

export default function WorkWindow({ workOpen, workOnClose }) {
  const [gamesOpen, setGamesOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [otherOpen, setOtherOpen] = useState(false);

  return (
    <div
      className={`transition-all ${
        workOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
    >
      <div className="absolute bg-windowBox mb-15 w-205 h-130 drop-shadow-2xl/20 rounded-sm self-center justify-self-center outline-2 outline-black z-20">
        {/*Change color to whatever works*/}
        <div className="flex w-full bg-siteGreen h-15 rounded-t-sm justify-between drop-shadow-lg/25 outline-2">
          <h1 className="text-3xl font-dotoBold text-white ml-4 m-2 mt-2.5">
            &lt;work&gt;
          </h1>
          <button
            onClick={workOnClose}
            className="mr-3 mt-3 max-w-15 max-h-10 justify-items-center text-center hover:bg-black/20"
          >
            <h1 className="cursor-pointer pl-4 group-hover:select-none text-3xl font-dotoBold text-white self-center justify-self-center mb-1 mr-3">
              &#91;X&#93;
            </h1>
          </button>
        </div>
        <div className="flex flex-col justify-start h-115 max-w-full max-h-115 text-wrap overflow-y-auto wrap-anywhere">
          <div className={`self-center mt-2`}>
            <h1 className={`font-outfit text-[3.5rem]`}>Things I've made!</h1>
          </div>
          <hr />

          <div
            className={`overflow-y-auto font-outfit text-2xl pl-10 pr-10 pt-5 `}
          >
            {/*Body of Work Window*/}
            <div>
              {/*Games Section*/}
              <button
                className={`bg-siteGreen text-white pt-2 pb-2 pl-10 pr-10 rounded-2xl cursor-pointer`}
                onClick={() => {
                  setGamesOpen(!gamesOpen);
                }}
              >
                <div className="flex gap-1 items-center">
                  Games
                  <Chevron direction="down" reversed={gamesOpen} />
                </div>
              </button>
            </div>
            <div className="mt-10">
              {/*Dev Projects Section*/}
              <button
                className={`bg-siteGreen text-white pt-2 pb-2 pl-10 pr-10 rounded-2xl cursor-pointer`}
                onClick={() => {
                  setProjectsOpen(!projectsOpen);
                }}
              >
                <div className="flex gap-1 items-center">
                  Projects
                  <Chevron direction="down" reversed={projectsOpen} />
                </div>
              </button>
            </div>
            <div className="mt-10">
              {/*Other Stuff Section*/}
              <button
                className={`bg-siteGreen text-white pt-2 pb-2 pl-10 pr-10 rounded-2xl cursor-pointer`}
                onClick={() => {
                  setOtherOpen(!otherOpen);
                }}
              >
                <div className="flex gap-1 items-center">
                  Other Stuff
                  <Chevron direction="down" reversed={otherOpen} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
