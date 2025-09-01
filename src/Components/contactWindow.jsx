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
      <div className="absolute bg-windowBox w-205 mt-15 h-130 drop-shadow-2xl/20 rounded-sm self-center justify-self-center outline-2 outline-black z-20">
        {/*Change color to whatever works*/}
        <div className="flex w-full bg-siteGreen h-15 rounded-t-sm justify-between drop-shadow-lg/25 outline-2">
          <h1 className="text-3xl font-dotoBold text-white ml-4 m-2 mt-F.5">
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
            <h1 className={`font-outfit text-[3.5rem]`}>Reach out to me!</h1>
          </div>
          <hr className="stroke-black opacity-20" />
          <div
            className={`grid grid-cols-1 ml-10 mr-10 text-center justify-items-center overflow-y-auto font-outfit text-2xl`}
          >
            <h1 className="ml-20 mr-20 mt-10">
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
                <span className="font-outfitMedium text-green-700 underline hover:text-green-900 hover:cursor-pointer">
                  NathanNikc7775@gmail.com
                </span>
              </a>
              &nbsp;or click&nbsp;
              <a href="mailto:NathanNikc7775@gmail.com" target="_blank">
                <span className="text-green-700 font-outfitMedium underline hover:text-green-900">
                  here
                </span>
              </a>
              &nbsp;to email me directly with whatever email app you prefer.
            </h1>
            <h1 className="mt-10 font-outfitBold">|| OR ||</h1>
            <h1 className="mt-10 mr-30 ml-30">
              You can also contact me on any of the socials listed in the
              "links" window.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
