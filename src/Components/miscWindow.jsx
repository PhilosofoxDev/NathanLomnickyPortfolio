import "tailwindcss";
import React from "react";
import Draggable from "react-draggable";
import PhilosofoxPFP from "../assets/images/Philosofox.webp";
import NikcPic from "../assets/images/Nikc.webp";
import MountainGoat from "../assets/images/MountainGoatImage.webp";

export default function MiscWindow({ miscOpen, miscOnClose }) {
  return (
    <div
      className={`transition-all select-none duration-200 ${
        miscOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
    >
      <div className="absolute shrink bg-windowBox dark:bg-darkModeWindow not-lg:mb-45 lg:mt-15 w-145 h-110 lg:w-205 lg:h-130 dark:drop-shadow-white drop-shadow-2xl/20 rounded-sm self-center justify-self-center outline-2 dark:outline-white outline-black z-100">
        {/*Change color to whatever works*/}
        <div className="flex w-full items-center bg-siteGreen h-12 lg:h-15 rounded-t-sm justify-between drop-shadow-lg/25 outline-2 dark:bg-darkModeGreen dark:outline-white">
          <h1 className="text-3xl font-dotoBold text-white ml-4 mb-0.5">
            &lt;misc&gt;
          </h1>
          <button
            onClick={miscOnClose}
            className="mr-2 mt-1 max-w-15 max-h-10 justify-items-center text-center hover:bg-black/20"
          >
            <h1 className="cursor-pointer pl-4 group-hover:select-none text-3xl font-dotoBold text-white self-center justify-self-center mb-1 mr-3">
              &#91;X&#93;
            </h1>
          </button>
        </div>
        <div className="flex flex-col justify-center max-w-full h-98 lg:h-115 max-h-115 text-wrap overflow-y-auto wrap-anywhere dark:text-white dark:text-shadow-white/30 text-shadow-md">
          <div className={`text-center`}>
            <h1 className={`font-outfit text-[2.47rem] lg:text-[3.5rem]`}>
              Fun stuff! :D
            </h1>
            <h1 className="font-outfit text-[1rem] lg:text-[1.2rem] lg:mb-4">
              Fun facts, cool things, and whatever else I find interesting.
              :&#41;
            </h1>
          </div>
          <hr className="stroke-black opacity-20 dark:stroke-white dark:opacity-80" />
          <div
            className={`grid grid-cols-3 lg:ml-10 lg:mr-10 text-center justify-items-center overflow-y-auto font-outfit text-3xl`}
          >
            <div className="border-b-1 border-r-1 lg:mt-5">
              <h1 className="font-outfitMedium text-orange-600 dark:text-orange-500 lg:text-4xl">
                Foxes!
              </h1>
              <h1 className="text-[1rem] lg:text-[1.1rem] ml-4 mr-4">
                I think foxes are facinating animals, which is why they appear a
                lot on my pages.
              </h1>
              <div className="mt-3 grid grid-cols-2 justify-items-center mb-5">
                <img
                  src={PhilosofoxPFP}
                  className="rounded-full border-3 size-20 lg:size-25 border-black dark:border-white"
                />
                <img
                  src={NikcPic}
                  className="rounded-full border-3 size-20 lg:size-25"
                />
              </div>
            </div>
            <div className="border-b-1 border-r-1 lg:mt-5">
              <h1 className="font-outfitMedium text-blue-800 dark:text-blue-400 lg:text-4xl">
                Games I make!
              </h1>
              <h1 className="text-[1rem] lg:text-[1.1rem] mt-1 ml-4 mr-4">
                I like games that can drastically shift in tone, and am
                currently working on one!
              </h1>
              <div className="mt-3 grid grid-cols-1 justify-items-center mb-5">
                <a
                  href="https://philosofox.itch.io/mountain-goat-simulator"
                  target="_blank"
                  className="rounded-full"
                >
                  <img
                    src={MountainGoat}
                    className="rounded-full border-3 border-black dark:border-white size-20 lg:size-25 hover:brightness-75 transition-all"
                  />
                </a>
                <h1 className="mt-2 text-[.8rem] lg:text-[1.2rem]">
                  ^^ Check it out! ^^
                </h1>
              </div>
            </div>
            <div className="border-b-1 lg:mt-5">
              <h1 className="font-outfitMedium text-black dark:text-white lg:text-4xl ml-5">
                More to come!
              </h1>
              <h1 className="text-[.9rem] lg:text-[1.1rem] ml-6 mr-4 mt-4">
                Always making new stuff and thinking new things!
              </h1>
              <div className="mt-3 grid grid-cols-2 justify-items-center mb-5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
