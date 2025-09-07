import "tailwindcss";
import React, { useState } from "react";
import Draggable from "react-draggable";
import { Tooltip } from "react-tooltip";

export default function ContactWindow({ contactOpen, contactOnClose }) {
  const [tooltipText, setTooltipText] = useState("Copy to Clipboard");

  return (
    <div
      className={`transition-all select-none duration-200 ${
        contactOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
    >
      <div className="absolute shrink bg-windowBox dark:bg-darkModeWindow mt-15 w-120 h-90 lg:w-205 lg:h-130 dark:drop-shadow-white drop-shadow-2xl/20 rounded-sm self-center justify-self-center outline-2 dark:outline-white outline-black z-100">
        {/*Change color to whatever works*/}
        <div className="flex w-full items-center bg-siteGreen h-12 lg:h-15 rounded-t-sm justify-between drop-shadow-lg/25 outline-2 dark:bg-darkModeGreen dark:outline-white">
          <h1 className="text-3xl font-dotoBold text-white ml-4 mb-0.5">
            &lt;contact&gt;
          </h1>
          <button
            onClick={contactOnClose}
            className="mr-3 mt-3 max-w-15 max-h-10 justify-items-center text-center hover:bg-black/20"
          >
            <h1 className="cursor-pointer pl-4 group-hover:select-none text-3xl font-dotoBold text-white self-center justify-self-center mb-1 mr-3">
              &#91;X&#93;
            </h1>
          </button>
        </div>
        <div className="flex flex-col justify-center max-h-115 max-w-full text-wrap overflow-y-auto wrap-anywhere">
          <div className={`text-center`}>
            <h1
              className={`font-outfit text-[2.1rem] lg:text-[3.5rem] dark:text-white dark:text-shadow-white/30 text-shadow-md`}
            >
              Reach out to me!
            </h1>
          </div>
          <hr className="stroke-black opacity-20" />
          <div
            className={`grid grid-cols-1 lg:ml-10 lg:mr-10 text-center justify-items-center overflow-y-auto font-outfit text-[1.2rem] lg:text-2xl dark:text-white dark:text-shadow-white/30 text-shadow-md`}
          >
            <h1 className="ml-3 mr-3 lg:ml-20 lg:mr-20 lg:mt-10 mt-5">
              You can reach me at&nbsp;
              <Tooltip id="copy-email-tooltip" />
              <a
                data-tooltip-id="copy-email-tooltip"
                data-tooltip-content={tooltipText}
                onClick={() => {
                  navigator.clipboard.writeText("nathannikc7775@gmail.com");
                  setTooltipText("Copied!");
                }}
                onMouseOver={() => {
                  setTooltipText("Copy to Clipboard");
                }}
              >
                <span className="font-outfitMedium text-green-700 dark:text-green-500 underline hover:text-green-900 dark:hover:text-green-600 hover:cursor-pointer">
                  NathanNikc7775@gmail.com
                </span>
              </a>
              &nbsp;or click&nbsp;
              <a href="mailto:NathanNikc7775@gmail.com" target="_blank">
                <span className="text-green-700 dark:text-green-500 underline hover:text-green-900 dark:hover:text-green-600">
                  here
                </span>
              </a>
              &nbsp;to email me directly with whatever email app you prefer.
            </h1>
            <h1 className="mt-5 lg:mt-10 font-outfitBold">|| OR ||</h1>
            <h1 className="mt-5 lg:mt-10 ml-3 mr-3 lg:mr-30 lg:ml-30">
              You can also contact me on any of the socials listed in the
              "links" window.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
