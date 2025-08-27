import "tailwindcss";
import { useState } from "react";
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
import App from "../App";
import React, { useRef } from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";

class DragCompIndex {
  static index = 10;
  static updateIndex() {
    DragCompIndex.index++;
  }
}

export default function Shortcuts() {
  const [homeIsOpen, homeSetIsOpen] = useState(true);
  const [aboutIsOpen, aboutSetIsOpen] = useState(false);
  const [workIsOpen, workSetIsOpen] = useState(false);
  const [contactIsOpen, contactSetIsOpen] = useState(false);
  const [linksIsOpen, linksSetIsOpen] = useState(false);
  const [miscIsOpen, miscSetIsOpen] = useState(false);

  const [homeCurrentZIndex, homeSetZIndex] = useState();
  const [aboutCurrentZIndex, aboutSetZIndex] = useState();
  const [workCurrentZIndex, workSetZIndex] = useState();
  const [contactCurrentZIndex, contactSetZIndex] = useState();
  const [linksCurrentZIndex, linksSetZIndex] = useState();
  const [miscCurrentZIndex, miscSetZIndex] = useState();

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
  const contactRef = useRef(null);
  const linksRef = useRef(null);
  const miscRef = useRef(null);
  return (
    <div>
      <div
        className="absolute inset-0 h-screen w-screen"
        style={{ overflow: "hidden" }}
      >
        <Draggable
          onStart={homePrioritize}
          onStop={homeDeprioritize}
          nodeRef={homeRef}
          bounds="parent"
          defaultPosition={{
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
          }}
        >
          <div
            ref={homeRef}
            style={{
              zIndex: homeCurrentZIndex,
              position: "absolute",
            }}
          >
            <Window
              className="relative select-none z-100"
              homeOpen={homeIsOpen}
              homeOnClose={() => homeSetIsOpen(false)}
            />
          </div>
        </Draggable>

        <Draggable
          onStart={AboutPrioritize}
          onStop={AboutDeprioritize}
          nodeRef={aboutRef}
          bounds="parent"
          defaultPosition={{
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
          }}
        >
          <div
            ref={aboutRef}
            style={{ zIndex: aboutCurrentZIndex, position: "absolute" }}
          >
            <AboutWindow
              className="relative select-none z-100"
              aboutOpen={aboutIsOpen}
              aboutOnClose={() => aboutSetIsOpen(false)}
            />
          </div>
        </Draggable>
        <Draggable
          onStart={WorkPrioritize}
          onStop={WorkDeprioritize}
          nodeRef={workRef}
          bounds="parent"
          defaultPosition={{
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
          }}
        >
          <div
            ref={workRef}
            style={{ zIndex: workCurrentZIndex, position: "absolute" }}
          >
            <WorkWindow
              workOpen={workIsOpen}
              workOnClose={() => workSetIsOpen(false)}
            />
          </div>
        </Draggable>
        <Draggable
          onStart={LinksPrioritize}
          onStop={LinksDeprioritize}
          nodeRef={linksRef}
          bounds="parent"
          defaultPosition={{
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
          }}
        >
          <div
            ref={linksRef}
            style={{ zIndex: linksCurrentZIndex, position: "absolute" }}
          >
            <LinksWindow
              linksOpen={linksIsOpen}
              linksOnClose={() => linksSetIsOpen(false)}
            />
          </div>
        </Draggable>
        <Draggable
          onStart={ContactPrioritize}
          onStop={ContactDeprioritize}
          nodeRef={contactRef}
          bounds="parent"
          defaultPosition={{
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
          }}
        >
          <div
            ref={contactRef}
            style={{ zIndex: contactCurrentZIndex, position: "absolute" }}
          >
            <ContactWindow
              contactOpen={contactIsOpen}
              contactOnClose={() => contactSetIsOpen(false)}
            />
          </div>
        </Draggable>
        <Draggable
          onStart={MiscPrioritize}
          onStop={MiscDeprioritize}
          nodeRef={miscRef}
          bounds="parent"
          defaultPosition={{
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
          }}
        >
          <div
            ref={miscRef}
            style={{ zIndex: miscCurrentZIndex, position: "absolute" }}
          >
            <MiscWindow
              miscOpen={miscIsOpen}
              miscOnClose={() => miscSetIsOpen(false)}
            />
          </div>
        </Draggable>
      </div>
      <div className="flex w-35 absolute justify-center h-screen text-center font-dotoBold text-black text-[1.1rem]">
        <div className="mt-2 mr-9">
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
              className="cursor-pointer hover:bg-blue-300/60"
            >
              <img className="max-w-20" src={houseIcon} alt="HomeIcon"></img>
              <h1>Home</h1>
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
              className="cursor-pointer hover:bg-blue-300/60"
            >
              <img
                className="max-w-20"
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
              className="cursor-pointer hover:bg-blue-300/60"
            >
              <img
                className="max-w-20 ml-2"
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
              className="cursor-pointer hover:bg-blue-300/60"
            >
              <img
                className="max-w-20 mt-1"
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
              className="cursor-pointer hover:bg-blue-300/60"
            >
              <img
                className="max-w-18 pt-2 ml-1 mr-1"
                src={phoneIcon}
                alt="Phone Icon"
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
              className="cursor-pointer hover:bg-blue-300/60"
            >
              <img
                className="max-w-20"
                src={houseIcon}
                alt="RecycleBinIcon"
              ></img>
              <h1>Misc</h1>
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-35 absolute justify-self-end justify-center h-screen text-center font-dotoBold text-black text-md z-5">
        <div className="mt-2">
          {" "}
          {/*Right Icon Container*/}
          <div>
            <button className="cursor-pointer hover:bg-blue-300/60">
              <img className="max-w-20" src={houseIcon} alt="HomeIcon"></img>
              <h1>Light</h1> {/*Maybe/Maybe not have text*/}
            </button>
          </div>
          <div className="mt-2">
            <button className="cursor-pointer hover:bg-blue-300/60">
              <img
                className="max-w-20"
                src={clipboardIcon}
                alt="AboutIcon"
              ></img>{" "}
              {/*Add top margin to every element after first one*/}
              <h1>Mute</h1> {/*Maybe/Maybe not have text*/}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
