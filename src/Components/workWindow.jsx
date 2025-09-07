import "tailwindcss";
import React, { useState } from "react";
import Chevron from "react-chevron";
import BedmimeImage from "../assets/images/BedmimeTitle.webp";
import StormchaserImage from "../assets/images/StormchaserCover.webp";
import WebsiteImage from "../assets/images/WebsiteImage.webp";
import BlenderImage from "../assets/images/BlenderCollectionForWebsite.webp";
import ChannelsImage from "../assets/images/WebsiteImage.webp";
import WorkTile from "./workTile";

export default function WorkWindow({ workOpen, workOnClose }) {
  const [gamesOpen, setGamesOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [otherOpen, setOtherOpen] = useState(false);

  return (
    <div
      className={`transition-all duration-200 ${
        workOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
    >
      <div className="absolute shrink bg-windowBox dark:bg-darkModeWindow mb-15 w-120 h-90 lg:w-205 lg:h-130 dark:drop-shadow-white drop-shadow-2xl/20 rounded-sm self-center justify-self-center outline-2 dark:outline-white outline-black z-100">
        {/*Change color to whatever works*/}
        <div className="flex w-full items-center bg-siteGreen h-12 lg:h-15 rounded-t-sm justify-between drop-shadow-lg/25 outline-2 dark:bg-darkModeGreen dark:outline-white">
          <h1 className="text-3xl font-dotoBold text-white ml-4 mb-0.5">
            &lt;work&gt;
          </h1>
          <button
            onClick={workOnClose}
            className="mr-3 lg:mt-3 max-w-15 max-h-10 justify-items-center text-center hover:bg-black/20"
          >
            <h1 className="cursor-pointer pl-4 group-hover:select-none text-3xl font-dotoBold text-white self-center justify-self-center mb-1 mr-3">
              &#91;X&#93;
            </h1>
          </button>
        </div>
        <div className="text-black dark:text-white flex flex-col justify-start h-78 lg:h-115 max-w-full max-h-115 text-wrap overflow-y-auto wrap-anywhere">
          <div className={`self-center mt-2`}>
            <h1
              className={`font-outfit text-[2.1rem] lg:text-[3.5rem] dark:text-shadow-white/30 text-shadow-md`}
            >
              Things I've made!
            </h1>
          </div>
          <hr className="stroke-black opacity-20" />

          <div
            className={`overflow-y-auto font-outfit text-2xl pl-10 pr-10 pb-20 pt-5`}
          >
            {/*Body of Work Window*/}
            <div>
              {/*Games Section*/}
              <button
                className={`bg-siteGreen dark:bg-darkModeGreen text-white pt-2 pb-2 pl-10 pr-10 rounded-2xl cursor-pointer`}
                onClick={() => {
                  setGamesOpen(!gamesOpen);
                }}
              >
                <div className="flex gap-1 text-[1rem] lg:text-[1.5rem] items-center dark:text-shadow-white/30 text-shadow-md">
                  Games
                  <Chevron direction={`${gamesOpen ? "up" : "down"}`} />
                </div>
              </button>
              <WorkTile isOpen={gamesOpen}>
                <h1
                  className={`transition-all duration-300 ease-in-out dark:text-shadow-white/20 text-shadow-md ${
                    gamesOpen
                      ? "text-[1.2rem] opacity-100 mt-2 mb-2"
                      : "text-[0rem] opacity-0"
                  }`}
                >
                  All of my game projects can be found&nbsp;
                  <a href="https://philosofox.itch.io/" target="blank_">
                    <span className="font-outfitMedium text-green-700 dark:text-green-500 underline hover:text-green-900 dark:hover:text-green-700">
                      here
                    </span>
                  </a>
                  , but these are my favorites.
                </h1>
                <div
                  className={`grid grid-cols-1 transition-all duration-300 ease-in-out gap-y-10`}
                >
                  <div
                    className={`transition-all duration-300 ease-in-out bg-workTileBg dark:bg-darkModeTile ${
                      gamesOpen ? "max-w-180 max-h-64" : "max-w-0 max-h-0"
                    }`}
                  >
                    <div className={`flex align-middle self-center m-4`}>
                      <img
                        src={BedmimeImage}
                        alt="BedmimeThumbnail"
                        className={`self-center outline-5 outline-siteGreen dark:outline-darkModeGreen transition-all duration-300 ease-in-out ${
                          gamesOpen ? "max-w-9/16" : "max-w-0"
                        }`}
                      />
                      <h1
                        className={`ml-5 dark:text-shadow-white/20 text-shadow-md ${
                          gamesOpen
                            ? "text-[1rem] lg:text-[1.3rem] opacity-100"
                            : "hidden"
                        }`}
                      >
                        <i>Bedmime</i> was the first game I ever made. A smaller
                        project meant to learn the basics of Unity, Bedmime has
                        you holding back a silent beast with only a flashlight.
                      </h1>
                    </div>
                  </div>
                  <div
                    className={`transition-all duration-300 ease-in-out bg-workTileBg dark:bg-darkModeTile ${
                      gamesOpen ? "max-w-180 max-h-64" : "max-w-0 max-h-0"
                    }`}
                  >
                    <div className={`flex align-middle self-center m-4`}>
                      <img
                        src={StormchaserImage}
                        alt="StormchaserThumbnail"
                        className={`self-center outline-5 outline-siteGreen dark:outline-darkModeGreen transition-all duration-300 ease-in-out ${
                          gamesOpen ? "max-w-7/16" : "max-w-0"
                        }`}
                      />
                      <h1
                        className={`ml-5 dark:text-shadow-white/20 text-shadow-md ${
                          gamesOpen
                            ? "text-[1rem] lg:text-[1.3rem] opacity-100"
                            : "hidden"
                        }`}
                      >
                        <i>The Stormchaser</i> was a game made for the 2025 Phil
                        Alexander Game Jam at Miami University. It was the first
                        collaborative project I'd participated in, and taught me
                        a lot about working with others.
                      </h1>
                    </div>
                  </div>
                </div>
              </WorkTile>
              <div className="mt-10">
                {/*Dev Projects Section*/}
                <button
                  className={`bg-siteGreen dark:bg-darkModeGreen text-white pt-2 pb-2 pl-10 pr-10 rounded-2xl cursor-pointer`}
                  onClick={() => {
                    setProjectsOpen(!projectsOpen);
                  }}
                >
                  <div className="flex gap-1 text-[1rem] lg:text-[1.5rem] items-center dark:text-shadow-white/30 text-shadow-md">
                    Dev Projects
                    <Chevron direction={`${projectsOpen ? "up" : "down"}`} />
                  </div>
                </button>
                <WorkTile isOpen={projectsOpen}>
                  <div
                    className={`grid grid-cols-1 justify-items-center transition-all duration-300 ease-in-out ${
                      projectsOpen
                        ? "opacity-100 mt-5 gap-y-10"
                        : "opacity-0 text-[0rem] mt-0 gap-y-0"
                    }`}
                  >
                    <div
                      className={`transition-all duration-300 ease-in-out bg-workTileBg dark:bg-darkModeTile ${
                        projectsOpen ? "max-w-180 max-h-64" : "max-w-0 max-h-0"
                      }`}
                    >
                      <div className={`flex align-middle self-center m-4`}>
                        <img
                          src={WebsiteImage}
                          alt="Image of this Website /(o-o)\"
                          className={`self-center outline-5 outline-siteGreen dark:outline-darkModeGreen transition-all duration-300 ease-in-out ${
                            projectsOpen ? "max-w-31/64" : "max-w-0"
                          }`}
                        />
                        <h1
                          className={`ml-5 dark:text-shadow-white/20 text-shadow-md ${
                            projectsOpen
                              ? "text-[1rem] lg:text-[1.3rem] opacity-100"
                              : "hidden"
                          }`}
                        >
                          Currently, This website is the only non-game based
                          project I have fully developed. I have a few more
                          projects cooking up in the background focused on
                          assisting me academically, as well as some "for-fun"
                          devlopments.
                        </h1>
                      </div>
                    </div>
                  </div>
                </WorkTile>
              </div>
              <div className="mt-10">
                {/*Other Stuff Section*/}
                <button
                  className={`bg-siteGreen dark:bg-darkModeGreen text-white pt-2 pb-2 pl-10 pr-10 rounded-2xl cursor-pointer`}
                  onClick={() => {
                    setOtherOpen(!otherOpen);
                  }}
                >
                  <div className="flex gap-1 text-[1rem] lg:text-[1.5rem] items-center dark:text-shadow-white/30 text-shadow-md">
                    Other Stuff
                    <Chevron direction={`${otherOpen ? "up" : "down"}`} />
                  </div>
                </button>
                <WorkTile isOpen={otherOpen}>
                  <div
                    style={{
                      willChange: "transform",
                    }}
                    className={`grid grid-cols-1 justify-items-center transition-all duration-300 ease-in-out ${
                      otherOpen
                        ? "opacity-100 mt-5 gap-y-10"
                        : "opacity-0 text-[0rem] mt-0 gap-y-0"
                    }`}
                  >
                    <div
                      className={`transition-all duration-300 ease-in-out bg-workTileBg dark:bg-darkModeTile ${
                        otherOpen ? "max-w-180 max-h-58" : "max-w-0 max-h-0"
                      }`}
                    >
                      <div className={`flex align-middle self-center m-4`}>
                        <img
                          src={BlenderImage}
                          alt="Blender Project Images"
                          loading="lazy"
                          className={`self-center outline-5 max-w-31/64 outline-siteGreen dark:outline-darkModeGreen`}
                        />
                        <h1
                          className={`ml-5 transition-all duration-300 ease-in-out dark:text-shadow-white/20 text-shadow-md ${
                            otherOpen
                              ? "text-[1rem] lg:text-[1.3rem] opacity-100"
                              : "text-0 hidden"
                          }`}
                        >
                          Though I focus more on the programming side of
                          development, I love the artsy side of things as well.
                          3D modeling with programs like blender is not only a
                          hobby of mine, but a skill I find necessary to
                          improve.
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      willChange: "transform",
                    }}
                    className={`grid grid-cols-1 justify-items-center transition-all duration-300 ease-in-out dark:text-shadow-white/30 text-shadow-md ${
                      otherOpen
                        ? "opacity-100 mt-5 gap-y-10"
                        : "opacity-0 text-[0rem] mt-0 gap-y-0"
                    }`}
                  >
                    <div
                      className={`mt-5 transition-all duration-300 ease-in-out bg-workTileBg dark:bg-darkModeTile ${
                        otherOpen ? "max-w-180 max-h-58" : "max-w-0 max-h-0"
                      }`}
                    >
                      <div className={`flex align-middle self-center m-4`}>
                        <img
                          src={BlenderImage}
                          alt="Blender Project Images"
                          loading="lazy"
                          className={`self-center outline-5 max-w-31/64 outline-siteGreen dark:outline-darkModeGreen`}
                        />
                        <h1
                          className={`ml-5 transition-all duration-300 ease-in-out dark:text-shadow-white/20 text-shadow-md ${
                            otherOpen
                              ? "text-[1rem] lg:text-[1.3rem] opacity-100"
                              : "text-0 hidden"
                          }`}
                        >
                          My Channels! Like I mentioned in the "About" window, I
                          love creating videos and sharing them online. I
                          previously made gaming content, but am shifting my
                          focus to development logs and streams.
                        </h1>
                      </div>
                    </div>
                  </div>
                </WorkTile>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
