import "tailwindcss";
import React, { useRef, useState, useEffect } from "react";
import Template from "./windowTemplate";
import Warning from "./warning";
import Window from "./mainwindow";
import AboutWindow from "./aboutWindow";
import WorkWindow from "./workWindow";
import ContactWindow from "./contactWindow";
import LinksWindow from "./linksWindow";
import MiscWindow from "./miscWindow";
import houseIcon from "../assets/images/PixelArtHouse.webp";
import clipboardIcon from "../assets/images/Clipboard.webp";
import folderIcon from "../assets/images/WorkFolder.webp";
import linksIcon from "../assets/images/LinksIcon.png";
import phoneIcon from "../assets/images/ContactIcon.png";
import miscIcon from "../assets/images/MiscIcon.png";
import sunIcon from "../assets/images/SunLightMode.png";
import moonIcon from "../assets/images/MoonDarkMode.png";

class DragCompIndex {
  static index = 10;
  static updateIndex() {
    DragCompIndex.index++;
  }
}

export default function Shortcuts({ Mode, setMode }) {
  const [homeIsOpen, homeSetIsOpen] = useState(true);
  const [aboutIsOpen, aboutSetIsOpen] = useState(false);
  const [workIsOpen, workSetIsOpen] = useState(false);
  const [linksIsOpen, linksSetIsOpen] = useState(false);
  const [contactIsOpen, contactSetIsOpen] = useState(false);
  const [miscIsOpen, miscSetIsOpen] = useState(false);

  const [homeCurrentZIndex, homeSetZIndex] = useState();
  const [aboutCurrentZIndex, aboutSetZIndex] = useState();
  const [workCurrentZIndex, workSetZIndex] = useState();
  const [linksCurrentZIndex, linksSetZIndex] = useState();
  const [contactCurrentZIndex, contactSetZIndex] = useState();
  const [miscCurrentZIndex, miscSetZIndex] = useState();

  const [currentLightmodeIcon, setLightmodeIcon] = useState(sunIcon);
  const [lightOrDark, setModeText] = useState("Light");
  const [isLocked, setIsLocked] = useState(false);
  const [lockPos, setLockPos] = useState(null);

  const homePrioritize = () => {
    homeSetZIndex(DragCompIndex.index);
    DragCompIndex.updateIndex();
  };
  const homeDeprioritize = () => {
    DragCompIndex.updateIndex();
  };

  const AboutPrioritize = () => {
    aboutSetZIndex(DragCompIndex.index);
    DragCompIndex.updateIndex();
  };
  const AboutDeprioritize = () => {
    DragCompIndex.updateIndex();
  };

  const WorkPrioritize = () => {
    workSetZIndex(DragCompIndex.index);
    DragCompIndex.updateIndex();
  };
  const WorkDeprioritize = () => {
    DragCompIndex.updateIndex();
  };

  const ContactPrioritize = () => {
    contactSetZIndex(DragCompIndex.index);
    DragCompIndex.updateIndex();
  };
  const ContactDeprioritize = () => {
    DragCompIndex.updateIndex();
  };

  const LinksPrioritize = () => {
    linksSetZIndex(DragCompIndex.index);
    DragCompIndex.updateIndex();
  };
  const LinksDeprioritize = () => {
    DragCompIndex.updateIndex();
  };

  const MiscPrioritize = () => {
    miscSetZIndex(DragCompIndex.index);
    DragCompIndex.updateIndex();
  };
  const MiscDeprioritize = () => {
    DragCompIndex.updateIndex();
  };

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const linksRef = useRef(null);
  const contactRef = useRef(null);
  const miscRef = useRef(null);

  const toggleTheme = () => {
    setMode(!Mode);
  };

  useEffect(() => {
    const getResize = () => {
      if (window.innerWidth < 1024) {
        setIsLocked(true);
        setLockPos({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
      } else {
        setIsLocked(false);
        setLockPos(null);
      }
    };

    getResize();
    window.addEventListener("resize", getResize);

    return () => window.removeEventListener("resize", getResize);
  }, []);
  return (
    <div className={Mode ? "dark" : ""}>
      <div
        className="absolute inset-0 h-screen w-screen"
        style={{ overflow: "hidden" }}
      >
        <Template
          prioritize={homePrioritize}
          deprioritize={homeDeprioritize}
          thisRef={homeRef}
          zIndex={homeCurrentZIndex}
          locked={isLocked}
          lockPos={lockPos}
        >
          <Window
            className="select-none z-200"
            homeOpen={homeIsOpen}
            homeOnClose={() => homeSetIsOpen(false)}
          />
        </Template>
        <Template
          prioritize={AboutPrioritize}
          deprioritize={AboutDeprioritize}
          thisRef={aboutRef}
          zIndex={aboutCurrentZIndex}
          locked={isLocked}
          lockPos={lockPos}
        >
          <AboutWindow
            aboutOpen={aboutIsOpen}
            aboutOnClose={() => aboutSetIsOpen(false)}
          />
        </Template>
        <Template
          prioritize={WorkPrioritize}
          deprioritize={WorkDeprioritize}
          thisRef={workRef}
          zIndex={workCurrentZIndex}
          locked={isLocked}
          lockPos={lockPos}
        >
          <WorkWindow
            workOpen={workIsOpen}
            workOnClose={() => workSetIsOpen(false)}
          />
        </Template>
        <Template
          prioritize={LinksPrioritize}
          deprioritize={LinksDeprioritize}
          thisRef={linksRef}
          zIndex={linksCurrentZIndex}
          locked={isLocked}
          lockPos={lockPos}
        >
          <LinksWindow
            linksOpen={linksIsOpen}
            linksOnClose={() => linksSetIsOpen(false)}
          />
        </Template>
        <Template
          prioritize={ContactPrioritize}
          deprioritize={ContactDeprioritize}
          thisRef={contactRef}
          zIndex={contactCurrentZIndex}
          locked={isLocked}
          lockPos={lockPos}
        >
          <ContactWindow
            contactOpen={contactIsOpen}
            contactOnClose={() => contactSetIsOpen(false)}
          />
        </Template>
        <Template
          prioritize={MiscPrioritize}
          deprioritize={MiscDeprioritize}
          thisRef={miscRef}
          zIndex={miscCurrentZIndex}
          locked={isLocked}
          lockPos={lockPos}
        >
          <MiscWindow
            miscOpen={miscIsOpen}
            miscOnClose={() => miscSetIsOpen(false)}
          />
        </Template>
      </div>
      <div
        className={`not-lg:flex not-lg:flex-col not-lg:justify-end not-lg:items-center lg:flex lg:w-35 absolute lg:justify-center not-lg:justify-items-center h-screen w-screen lg:text-center font-dotoBold text-black dark:text-white text-md`}
      >
        <div className="transition-all not-lg:bg-black/20 dark:not-lg:bg-white/20 not-lg:pr-5 not-lg:pl-5 not-lg:align-bottom not-lg:grid not-lg:grid-cols-3 justify-center mt-2 lg:mr-9 not-lg:mb-10 not-lg:gap-x-10">
          <div>
            <button
              onDoubleClick={() => {
                homeSetIsOpen(true);
                homePrioritize();
              }}
              onClick={() => {
                DragCompIndex.updateIndex();
                homeSetZIndex(DragCompIndex.index);
              }}
              className="cursor-pointer hover:bg-blue-300/60 dark:hover:bg-blue-500/60"
            >
              <img
                className="transition-all max-w-20 dark:invert-100"
                src={houseIcon}
                alt="HomeIcon"
              ></img>
              <h1 className="not-lg:pt-[6.5px]">Home</h1>
            </button>
          </div>
          <div className="mt-2">
            <button
              onDoubleClick={() => {
                aboutSetIsOpen(true);
                AboutPrioritize();
              }}
              onClick={() => {
                DragCompIndex.updateIndex();
                aboutSetZIndex(DragCompIndex.index);
              }}
              className="cursor-pointer hover:bg-blue-300/60 dark:hover:bg-blue-500/60"
            >
              <img
                className="max-w-20 transition-all dark:invert-100"
                src={clipboardIcon}
                alt="AboutIcon"
              ></img>{" "}
              {/*Add top margin to every element after first one*/}
              <h1>About</h1>
            </button>
          </div>
          <div className="mt-2">
            <button
              onDoubleClick={() => {
                workSetIsOpen(true);
                WorkPrioritize();
              }}
              onClick={() => {
                DragCompIndex.updateIndex();
                workSetZIndex(DragCompIndex.index);
              }}
              className="cursor-pointer hover:bg-blue-300/60 dark:hover:bg-blue-500/60"
            >
              <img
                className="max-w-20 ml-2 transition-all dark:invert-100"
                src={folderIcon}
                alt="FolderIcon"
              ></img>
              <h1>Work</h1>
            </button>
          </div>
          <div className="mt-2">
            <button
              onDoubleClick={() => {
                LinksPrioritize();
                linksSetIsOpen(true);
              }}
              onClick={() => {
                DragCompIndex.updateIndex();
                linksSetZIndex(DragCompIndex.index);
              }}
              className="cursor-pointer hover:bg-blue-300/60 dark:hover:bg-blue-500/60"
            >
              <img
                className="transition not-lg:w-19 w-20 mt-1 dark:invert-100"
                src={linksIcon}
                alt="ChainlinkIcon"
              ></img>
              <h1>Links</h1>
            </button>
          </div>
          <div className="mt-2">
            <button
              onDoubleClick={() => {
                contactSetIsOpen(true);
                ContactPrioritize();
              }}
              onClick={() => {
                DragCompIndex.updateIndex();
                contactSetZIndex(DragCompIndex.index);
              }}
              className="cursor-pointer hover:bg-blue-300/60 dark:hover:bg-blue-500/60"
            >
              <img
                className="max-w-18 pt-2 ml-1 mr-1 transition-all dark:invert-100"
                src={phoneIcon}
                alt="PhoneIcon"
              ></img>
              <h1>Contact</h1>
            </button>
          </div>
          <div className="mt-2">
            <button
              onDoubleClick={() => {
                MiscPrioritize();
                miscSetIsOpen(true);
              }}
              onClick={() => {
                DragCompIndex.updateIndex();
                miscSetZIndex(DragCompIndex.index);
              }}
              className="cursor-pointer hover:bg-blue-300/60 dark:hover:bg-blue-500/60"
            >
              <img
                className="max-w-18 ml-1 mr-1 pt-2 transition-all dark:invert-100"
                src={miscIcon}
                alt="ChestIcon"
              ></img>
              <h1>Misc</h1>
            </button>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:w-35 absolute justify-self-end justify-end mr-3 lg:h-screen text-center font-dotoBold text-black dark:text-white text-md z-5">
        <div className="mt-2">
          {/*Right Icon Container*/}
          <div>
            <button
              onClick={() => {
                toggleTheme();

                if (currentLightmodeIcon == sunIcon) {
                  setLightmodeIcon(moonIcon);
                  setModeText("Dark");
                } else {
                  setLightmodeIcon(sunIcon);
                  setModeText("Light");
                }
              }}
              className="cursor-pointer hover:bg-blue-300/60 dark:hover:bg-blue-500/60"
            >
              <img
                className="max-w-20 ml-1 mr-1 mt-2"
                src={currentLightmodeIcon}
                alt="LightModeIcon"
              />
              <h1>{lightOrDark}</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
