import "tailwindcss";
import React from "react";
import Draggable from "react-draggable";
import PhilosofoxPFP from "../assets/images/Philosofox.webp";
import NikcPic from "../assets/images/Nikc.webp";
import MountainGoat from "../assets/images/MountainGoatImage.webp";

export default function MiscWindow({ miscOpen, miscOnClose }) {
  return (
    <div
      className={`transition-all select-none ${
        miscOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
    >
      <div className="absolute bg-windowBox mb-15 w-205 h-130 drop-shadow-2xl/20 rounded-sm self-center justify-self-center outline-2 outline-black z-20">
        {/*Change color to whatever works*/}
        <div className="flex w-full bg-siteGreen h-15 rounded-t-sm justify-between drop-shadow-lg/25 outline-2">
          <h1 className="text-3xl font-dotoBold text-white ml-4 m-2 mt-2.5">
            &lt;misc&gt;
          </h1>
          <button
            onClick={miscOnClose}
            className="mr-3 mt-3 max-w-15 max-h-10 justify-items-center text-center hover:bg-black/20"
          >
            <h1 className="cursor-pointer pl-4 group-hover:select-none text-3xl font-dotoBold text-white self-center justify-self-center mb-1 mr-3">
              &#91;X&#93;
            </h1>
          </button>
        </div>
        <div className="flex flex-col justify-center max-w-full max-h-115 text-wrap overflow-y-auto wrap-anywhere">
          <div className={`text-center`}>
            <h1 className={`font-outfit text-[3.5rem]`}>Fun stuff! :D</h1>
            <h1 className="font-outfit text-[1.2rem] mb-4">
              Fun facts, cool things, and whatever else I find interesting.
              :&#41;
            </h1>
          </div>
          <hr className="stroke-black opacity-20" />
          <div
            className={`grid grid-cols-3 ml-10 mr-10 text-center justify-items-center overflow-y-auto font-outfit text-2xl`}
          >
            <div className="border-b-1 border-r-1 mt-5">
              <h1 className="font-outfitMedium text-orange-600 text-4xl">
                FOXES!
              </h1>
              <h1 className="text-[1.1rem] ml-4 mr-4">
                I think foxes are facinating animals, which is why they appear a
                lot on my pages.
              </h1>
              <div className="mt-3 grid grid-cols-2 justify-items-center mb-5">
                <img
                  src={PhilosofoxPFP}
                  className="rounded-full border-3 size-25"
                />
                <img src={NikcPic} className="rounded-full border-3 size-25" />
              </div>
            </div>
            <div className="border-b-1 border-r-1 mt-5">
              <h1 className="font-outfitMedium text-blue-800 text-4xl">
                Games I make
              </h1>
              <h1 className="text-[1.1rem] mt-1 ml-4 mr-4">
                I like games that can drastically shift in tone on a dime, and
                am currently working on one!
              </h1>
              <div className="mt-3 grid grid-cols-1 justify-items-center mb-5">
                <a
                  href="https://philosofox.itch.io/mountain-goat-simulator"
                  target="_blank"
                  className="rounded-full"
                >
                  <img
                    src={MountainGoat}
                    className="rounded-full border-3 size-25"
                  />
                </a>
                <h1 className="mt-2 text-[1.2rem]">^^ Check it out! ^^</h1>
              </div>
            </div>
            <div className="border-b-1 mt-5">
              <h1 className="font-outfitMedium text-black text-4xl ml-5">
                More to come!
              </h1>
              <h1 className="text-[1.1rem] ml-6 mr-4 mt-4">
                Always making new stuff and thinking new things!
                <br />
                <span className="text-3xl">^u^</span>
              </h1>
              <div className="mt-3 grid grid-cols-2 justify-items-center mb-5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
