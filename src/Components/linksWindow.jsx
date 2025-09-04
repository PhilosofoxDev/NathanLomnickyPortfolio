import "tailwindcss";
import React from "react";
import Draggable from "react-draggable";
import KissingDuckPFP from "../assets/images/KissingDuckPFPSquare.webp";
import PhilosofoxPFP from "../assets/images/Philosofox.webp";
import InstaLogo from "../assets/images/instagramLogo.webp";
import LinkedinLogo from "../assets/images/LinkedinLogo.webp";
import HandshakeLogo from "../assets/images/HandshakeLogo.webp";
import ItchLogo from "../assets/images/itchioLogo.webp";
import GithubLogo from "../assets/images/githubLogo.webp";

export default function LinksWindow({ linksOpen, linksOnClose }) {
  return (
    <div
      className={`transition-all select-none duration-200 ${
        linksOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
    >
      <div className="absolute bg-windowBox w-205 h-130 drop-shadow-2xl/20 dark:drop-shadow-white rounded-sm self-center justify-self-center outline-2 outline-black z-0 dark:bg-darkModeWindow dark:outline-white">
        {/*Change color to whatever works*/}
        <div className="flex w-full bg-siteGreen h-15 rounded-t-sm justify-between drop-shadow-lg/25 outline-2 dark:bg-darkModeGreen dark:outline-white">
          <h1 className="text-3xl font-dotoBold text-white ml-4 self-center">
            &lt;links&gt;
          </h1>
          <button
            onClick={linksOnClose}
            className="mr-3 mt-3 max-w-15 max-h-10 justify-items-center text-center hover:bg-black/20"
          >
            <h1 className="cursor-pointer pl-4 group-hover:select-none text-3xl font-dotoBold text-white self-center justify-self-center mb-1 mr-3">
              &#91;X&#93;
            </h1>
          </button>
        </div>
        <div className="flex flex-col justify-center max-w-full max-h-115 text-wrap overflow-y-auto wrap-anywhere">
          <div className={`self-center`}>
            <h1
              className={`font-outfit text-[3.5rem] dark:text-white dark:text-shadow-white/30 text-shadow-md`}
            >
              Connect with Me!
            </h1>
          </div>
          <hr className="stroke-black opacity-20" />
          <div
            className={`flex flex-col overflow-y-auto font-outfit text-2xl pt-3`}
          >
            <div className="grid grid-cols-4 justify-items-center pt-5 pr-15 pl-15 dark:text-shadow-white/30 text-shadow-md">
              <div className="flex flex-col items-center">
                <img
                  src={KissingDuckPFP}
                  loading="lazy"
                  className="rounded-full size-25 outline-green-700 outline-6 dark:outline-green-500"
                />
                <a href="" target="blank_">
                  <h1 className="pt-4 text-[1.35rem] text-green-800 dark:text-green-500 underline hover:text-green-950 dark:hover:text-green-700 font-outfitMedium">
                    My Portfolio
                  </h1>
                </a>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={LinkedinLogo}
                  loading="lazy"
                  className="rounded-full size-25 outline-blue-600 dark:outline-blue-400 outline-6"
                />
                <a
                  href="https://www.linkedin.com/in/nathan-lomnicky-7964242b4/"
                  target="blank_"
                >
                  <h1 className="pt-4 text-[1.3rem] text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-600 font-outfitMedium">
                    Linkedin
                  </h1>
                </a>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={HandshakeLogo}
                  loading="lazy"
                  className="rounded-full size-25 outline-green-600 dark:outline-green-500 outline-6"
                />

                <a
                  href="https://miamioh.joinhandshake.com/profiles/5uwhz9"
                  target="blank_"
                >
                  <h1 className="pt-4 text-[1.3rem] text-green-600 dark:text-green-400 underline hover:text-green-800 dark:hover:text-green-600 font-outfitMedium">
                    Handshake
                  </h1>
                </a>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={InstaLogo}
                  loading="lazy"
                  className="rounded-full size-25 outline-rose-700 dark:outline-rose-500 outline-5"
                />
                <a
                  href="https://www.instagram.com/drumsareveryheavy/"
                  target="blank_"
                >
                  <h1 className="pt-4 text-[1.35rem] text-rose-600 dark:text-rose-500 underline hover:text-rose-700 font-outfitMedium">
                    Instagram
                  </h1>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-3 justify-items-center pt-8 pr-15 pl-15 dark:text-shadow-white/30 text-shadow-md">
              <div className="flex flex-col items-center">
                <img
                  src={ItchLogo}
                  loading="lazy"
                  className="rounded-full size-25 outline-red-700 dark:outline-red-600 outline-6"
                />

                <a href="https://philosofox.itch.io/" target="blank_">
                  <h1 className="pt-4 text-[1.3rem] text-red-600 dark:text-red-500 underline hover:text-red-800 dark:hover:text-red-700 font-outfitMedium">
                    Itch.io
                  </h1>
                </a>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={GithubLogo}
                  loading="lazy"
                  className="rounded-full size-25 outline-purple-700 dark:outline-purple-400 outline-5"
                />
                <a href="https://github.com/PhilosofoxDev" target="blank_">
                  <h1 className="pt-4 text-[1.3rem] text-purple-600 dark:text-purple-400 underline hover:text-purple-800 dark:hover:text-purple-600 font-outfitMedium">
                    Github
                  </h1>
                </a>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={PhilosofoxPFP}
                  loading="lazy"
                  className="rounded-full size-25 outline-orange-600 dark:outline-orange-500 outline-6"
                />

                <a href="https://philosofoxdev.carrd.co/" target="blank_">
                  <h1 className="pt-4 text-[1.3rem] text-orange-600 dark:text-orange-500 underline hover:text-orange-700 dark:hover:text-orange-600 font-outfitMedium">
                    Philosofox
                  </h1>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
