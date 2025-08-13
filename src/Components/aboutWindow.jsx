import "tailwindcss";
import DuckPFP from "../assets/images/KissingDuckPFPSquare.jpg";
import React from "react";
import Draggable from "react-draggable";

export default function AboutWindow({ aboutOpen, aboutOnClose }) {
  return (
    <div
      className={`transition-all select-none ${
        aboutOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
    >
      <div className="absolute bg-windowBox mb-15 w-205 h-130 drop-shadow-2xl/20 rounded-sm self-center justify-self-center outline-2 outline-black z-0">
        {/*Change color to whatever works*/}
        <div className="flex w-full bg-siteGreen h-15 rounded-t-sm justify-between drop-shadow-lg/25 outline-2">
          <h1 className="text-3xl font-dotoBold text-white ml-4 self-center">
            &lt;about&gt;
          </h1>
          <button
            onClick={aboutOnClose}
            className="mr-3 mt-3 max-w-15 max-h-10 justify-items-center text-center hover:bg-black/20"
          >
            <h1 className="pl-4 group-hover:select-none text-3xl font-dotoBold text-white self-center justify-self-center mb-5 mr-3">
              &#91;X&#93;
            </h1>
          </button>
        </div>
        {/*Introduction of About Window*/}
        <div className="justify-center h-115 max-w-full max-h-115 text-wrap wrap-anywhere overflow-y-auto">
          <div className="flex font-outfit pt-10 pl-13 text-black">
            <img
              src={DuckPFP}
              alt="Photo of me!!!1!"
              className="justify-self-center self-center w-40 rounded-full"
            />
            <div className="flex flex-col ml-10">
              <h1 className="text-[3.9rem] leading-tight text-green-700">
                Nathan Lomnicky
              </h1>
              <h2 className="text-[1.5rem] font-outfitMedium">
                Independant Game and Web Developer
              </h2>
              <h2 className="text-[1.5rem] font-outfitMedium">
                Student at <a href="https://miamioh.edu/">Miami University</a>
              </h2>
            </div>
          </div>
          <hr className="mt-7 stroke-black opacity-20" />
          {/*Body of About Window*/}
          <div className="text-[1.44rem] flex-col justify-between font-outfit ml-16 mr-10 mt-6 mb-15">
            <h1>
              Hey! I'm
              <span className="text-green-700 font-outfitMedium"> Nathan</span>,
              a Developer currently studying Game Design and Computer Science
              at&nbsp;
              <a href="https://miamioh.edu/" target="_blank">
                <span className="font-outfitMedium text-red-500 underline hover:text-red-700">
                  Miami University
                </span>
              </a>
              .
            </h1>
            <h1 className="mt-9 font-outfit">Outside of class, I like to...</h1>
            <ul className="list-disc ml-6 mt-5 font-outfitLight">
              <li className="mt-4">
                Create&nbsp;
                <a href="https://philosofox.itch.io/" target="_blank">
                  <span className="text-green-700 font-outfit underline hover:text-green-900">
                    Video Games
                  </span>
                </a>
                &nbsp;on my own/with others
              </li>
              <li className="mt-1">
                Develop Web Projects to assist myself creatively
              </li>
              <li className="mt-1">
                <a
                  href="https://www.youtube.com/@PhilosofoxDev"
                  target="_blank"
                >
                  <span className="text-green-700 font-outfit underline hover:text-green-900">
                    Stream and Create content
                  </span>
                </a>
                &nbsp;around Games and Computer Science
              </li>
              <li className="mt-1">
                Learn new development concepts online and through self-study
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
