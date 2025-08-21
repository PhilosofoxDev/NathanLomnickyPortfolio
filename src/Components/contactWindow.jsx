import "tailwindcss";
import React from "react";
import Draggable from "react-draggable";

export default function ContactWindow({ contactOpen, contactOnClose }) {
  return (
    <div
      className={`transition-all select-none ${
        contactOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
    >
      <div className="absolute bg-windowBox mb-15 w-205 h-130 drop-shadow-2xl/20 rounded-sm self-center justify-self-center outline-2 outline-black z-20">
        {" "}
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
        <div className="flex flex-col justify-center h-115 max-w-full max-h-115 text-wrap overflow-y-auto wrap-anywhere">
          <div className={`text-center`}>
            <h1 className={`font-outfit text-[3.5rem]`}>Reach out!</h1>
          </div>
          <hr className="mt-3 stroke-black opacity-20" />
          <div
            className={`grid grid-cols-3 mb-25 mt-15 text-center justify-items-center overflow-y-auto font-outfit text-2xl`}
          >
            <h1 className="ml-20 mt-10">
              blahblahblahcopy address/email direct
            </h1>
            <h1 className="mt-20 font-outfitBold">|| OR ||</h1>
            <h1 className="mr-20 mt-10">
              Contact me on any of the socials listed in the "links" window
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
