import "tailwindcss";
import React, { useState } from "react";
import Chevron from "react-chevron";
import BedmimeImage from "../assets/images/BedmimeTitle.png";
import StormchaserImage from "../assets/images/StormchaserCover.png";

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
          <hr className="stroke-black opacity-20" />

          <div
            className={`overflow-y-auto font-outfit text-2xl pl-10 pr-10 pt-5 pb-20`}
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
                  <Chevron direction={`${gamesOpen ? "up" : "down"}`} />
                </div>
              </button>
              <h1
                className={`transition-all duration-300 ease-in-out ${
                  gamesOpen
                    ? "text-[1.2rem] opacity-100 mt-5 mb-2"
                    : "text-[0rem] opacity-0 mt-0 mb-0"
                }`}
              >
                All of my game projects can be found&nbsp;
                <a href="https://philosofox.itch.io/" target="blank_">
                  <span className="font-outfitMedium text-green-700 underline hover:text-green-900">
                    here
                  </span>
                </a>
                , but these are my favorites.
              </h1>
              <div
                className={`grid grid-cols-1 transition-all duration-300 ease-in-out ${
                  gamesOpen
                    ? "opacity-100 gap-y-10"
                    : "opacity-0 text-[0rem] mt-0 gap-y-0"
                }`}
              >
                {/*Work Tile*/}
                <div
                  className={`transition-all duration-300 ease-in-out bg-workTileBg ${
                    gamesOpen ? "w-180 h-64" : "w-0 h-0"
                  }`}
                >
                  <div className={`flex align-middle self-center m-4`}>
                    <img
                      src={BedmimeImage}
                      alt="BedmimeThumbnail"
                      className={`self-center w-9/16 outline-5 outline-siteGreen transition-all duration-300 ease-in-out ${
                        gamesOpen ? "w-9/16" : "w-0"
                      }`}
                    />
                    <h1
                      className={`ml-5 text-[1.3rem] ${
                        gamesOpen
                          ? "text-[1.3rem] opacity-100"
                          : "text-[0rem] opacity-0"
                      }`}
                    >
                      <i>Bedmime</i> was the first game I ever made. A smaller
                      project meant to learn the basics of Unity, Bedmime has
                      you holding back a silent beast with only a flashlight.
                    </h1>
                  </div>
                </div>
                <div
                  className={`transition-all duration-300 ease-in-out bg-workTileBg ${
                    gamesOpen ? "w-180 h-64" : "w-0 h-0"
                  }`}
                >
                  <div className={`flex align-middle self-center m-4`}>
                    <img
                      src={StormchaserImage}
                      alt="StormchaserThumbnail"
                      className={`self-center outline-5 outline-siteGreen transition-all duration-300 ease-in-out ${
                        gamesOpen ? "w-7/16" : "w-0"
                      }`}
                    />
                    <h1
                      className={`ml-5 text-[1.3rem] ${
                        gamesOpen
                          ? "text-[1.3rem] opacity-100"
                          : "text-[0rem] opacity-0"
                      }`}
                    >
                      <i>The Stormchaser</i> was a game made for the 2025 Phil
                      Alexander Game Jam at Miami University. It was the first
                      collaborative project I have participated in, and helped
                      me learn a lot about working with others.
                    </h1>
                  </div>
                </div>
              </div>
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
                  <Chevron direction={`${projectsOpen ? "up" : "down"}`} />
                </div>
              </button>
              <div
                className={`grid grid-cols-2 justify-items-center transition-all duration-300 ease-in-out ${
                  projectsOpen
                    ? "opacity-100 mt-8 gap-y-10"
                    : "opacity-0 text-[0rem] mt-0 gap-y-0"
                }`}
              >
                <div
                  className={`transition-all duration-300 ease-in-out bg-workTileBg ${
                    projectsOpen ? "w-70 h-75" : "w-0 h-0"
                  }`}
                >
                  <div className={`flex align-middle self-center m-4`}></div>
                </div>
                <div
                  className={`transition-all duration-300 ease-in-out bg-workTileBg ${
                    projectsOpen ? "w-70 h-75" : "w-0 h-0"
                  }`}
                ></div>
              </div>
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
                  <Chevron direction={`${otherOpen ? "up" : "down"}`} />
                </div>
              </button>
              <div
                className={`grid grid-cols-3 justify-items-center transition-all duration-300 ease-in-out ${
                  otherOpen
                    ? "opacity-100 mt-8 gap-y-10"
                    : "opacity-0 text-[0rem] mt-0 gap-y-0"
                }`}
              >
                <h1>ge</h1>
                <h1>gh</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
