import "tailwindcss";
import DuckPFP from "../assets/images/KissingDuckPFPSquare.webp";
import React, { useState, useRef, useEffect } from "react";

export default function AboutWindow({ aboutOpen, aboutOnClose }) {
  const [isShrunk, setIsShrunk] = useState(false);
  const scrollableBodyRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollableBodyRef.current) return;

      const scrollTop = scrollableBodyRef.current.scrollTop;
      setIsShrunk(scrollTop > 30);
    };

    const currentBody = scrollableBodyRef.current;
    if (currentBody) {
      currentBody.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (currentBody) {
        currentBody.removeEventListener("scroll", handleScroll);
      }
    };
  });
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
            <h1 className="cursor-pointer pl-4 group-hover:select-none text-3xl font-dotoBold text-white self-center justify-self-center mb-5 mr-3">
              &#91;X&#93;
            </h1>
          </button>
        </div>
        {/*Introduction of About Window*/}
        <div className="flex flex-col justify-center h-115 max-w-full max-h-115 text-wrap wrap-anywhere">
          <div
            className={`flex font-outfit text-black items-center transition-all duration-300 ease-in-out ${
              isShrunk ? "pt-4 pl-6" : "pt-10 pl-13"
            }`}
          >
            <img
              src={DuckPFP}
              alt="Photo of me!!!1!"
              className={`outline-green-700 outline-solid justify-self-center self-center rounded-full transition-all duration-300 ease-in-out ${
                isShrunk ? "w-20 mt-2 outline-3" : "w-40 outline-5"
              }`}
            />
            <div
              className={`flex flex-col ml-10 transition-all duration-300 ease-in-out`}
            >
              <h1
                className={`leading-tight text-green-700 transition-all duration-300 ease-in-out ${
                  isShrunk ? "text-[3.5rem] mt-1" : "text-[3.9rem]"
                }`}
              >
                Nathan Lomnicky
              </h1>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  isShrunk
                    ? "text-[0rem] opacity-0"
                    : "text-[1.5rem] opacity-100"
                }`}
              >
                <h2 className="font-outfitMedium">
                  Independant Game and Web Developer
                </h2>
                <h2 className="font-outfitMedium">
                  Student at{" "}
                  <a href="https://miamioh.edu/" target="_blank">
                    <span className="font-outfitMedium text-red-500 underline hover:text-red-700">
                      Miami University
                    </span>
                  </a>
                </h2>
              </div>
            </div>
          </div>
          <hr className="mt-7 stroke-black opacity-20" />
          {/*Body of About Window*/}
          {/*Summary*/}
          <div
            ref={scrollableBodyRef}
            className="overflow-y-auto flex-grow text-[1.44rem] flex-col justify-between font-outfit ml-16"
          >
            <div className="mt-6 mb-20 mr-7">
              <h1>
                Hey! I'm&nbsp;
                <span className="text-green-700 font-outfitMedium">Nathan</span>
                , a Developer currently studying Game Design and Computer
                Science.&nbsp;
                <span className="font-outfitMedium">
                  Thanks for stopping by! :&#41;
                </span>
              </h1>
              <div className="mt-8">
                <h1 className="text-3xl font-outfitMedium">Summary:</h1>
                <h1 className="font-outfit mt-2">
                  Outside of class, I like to...
                </h1>
                <ul className="list-disc ml-6 mt-2 font-outfitLight">
                  <li>
                    Create&nbsp;
                    <a href="https://philosofox.itch.io/" target="_blank">
                      <span className="text-green-700 font-outfitMedium underline hover:text-green-900">
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
                      <span className="text-green-700 font-outfitMedium underline hover:text-green-900">
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
              {/*Development*/}
              <div className="mt-10">
                <h1 className="text-3xl font-outfitMedium">Development:</h1>
                <h1 className="mt-2">
                  I am currently focused on developing projects to help my
                  academic and professional careers. This website is a prime
                  example, and I hope to present myself here in professional and
                  creative way.
                </h1>
                <h1 className="mt-3">
                  On the game side of things, I am actively developing projects
                  to feed my passions, learn different game development
                  engines/techniques, and to diversify myself in the multitude
                  of mediums game development requires.
                </h1>
              </div>
              {/*Content*/}
              <div className="mt-10">
                <h1 className="text-3xl font-outfitMedium">
                  Content Creation:
                </h1>
                <h1 className="mt-2">
                  Under the name&nbsp;
                  <a href="https://philosofoxdev.carrd.co/" target="_blank">
                    <span className="text-orange-400 font-outfitBold underline hover:text-orange-500">
                      Philosofox
                    </span>
                  </a>
                  , I've begun to create videos online around my development
                  journey. Content creation has frequently been a creative
                  outlet for me, so combining it with my love for programming
                  only seemed natural.
                </h1>
                <h1 className="mt-3">
                  I previously made gaming content under the name&nbsp;
                  <a href="https://www.youtube.com/@beefy1990" target="_blank">
                    <span className="text-amber-700 font-outfitBold underline hover:text-amber-800">
                      Beefy
                    </span>
                  </a>
                  .
                </h1>
              </div>
              <div className="mt-10">
                {/*Misc*/}
                <h1 className="text-3xl font-outfitMedium">
                  I'd love to talk more!
                </h1>
                <h1 className="mt-2">
                  All of my info can be found by double clicking the "Links" and
                  "Contact" icons. You can also directly email me by
                  clicking&nbsp;
                  <a href="mailto:NathanNikc7775@gmail.com" target="_blank">
                    <span className="text-green-700 font-outfitMedium underline hover:text-green-900">
                      here
                    </span>
                  </a>
                  .
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
