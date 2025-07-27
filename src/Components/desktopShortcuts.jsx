import "tailwindcss";
import { useState } from "react";
import Window from "./mainwindow";
import AboutWindow from "./aboutWindow";
import WorkWindow from "./workWindow";
import ContactWindow from "./contactWindow";
import LinksWindow from "./linksWindow";
import MiscWindow from "./miscWindow";
import houseIcon from "../assets/images/PixelArtHouse.png";
import clipboardIcon from "../assets/images/Clipboard.png";
import App from "../App";
import React, { useRef } from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";

class DragCompIndex {
  static index = 0;
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
  };
  const homeDeprioritize = () => {
    DragCompIndex.updateIndex();
  };

  const AboutPrioritize = () => {
    aboutSetZIndex(DragCompIndex.index);
  };
  const AboutDeprioritize = () => {
    DragCompIndex.updateIndex();
  };

  const WorkPrioritize = () => {
    workSetZIndex(DragCompIndex.index);
  };
  const WorkDeprioritize = () => {
    DragCompIndex.updateIndex();
  };

  const ContactPrioritize = () => {
    contactSetZIndex(DragCompIndex.index);
  };
  const ContactDeprioritize = () => {
    DragCompIndex.updateIndex();
  };

  const LinksPrioritize = () => {
    linksSetZIndex(DragCompIndex.index);
  };
  const LinksDeprioritize = () => {
    DragCompIndex.updateIndex();
  };

  const MiscPrioritize = () => {
    miscSetZIndex(DragCompIndex.index);
  };
  const MiscDeprioritize = () => {
    DragCompIndex.updateIndex();
  };

  const nodeRef = useRef(null);
  return (
    <>
      <div className="flex w-35 absolute justify-center h-screen text-center font-dotoBold text-black text-md">
        {" "}
        {/*Left Bar (SHOULD BE ON TOP (highest z-order)*/}
        <div className="mt-2 mr-9 z-100">
          {" "}
          {/*Left Icon Container*/}
          <div className="Winows">
            <Draggable
              onStart={homePrioritize}
              onStop={homeDeprioritize}
              nodeRef={nodeRef}
              offsetParent={document.body}
            >
              <div style={{ zIndex: homeCurrentZIndex, position: "relative" }}>
                <div ref={nodeRef}>
                  <Window
                    onDoubleClick={console.log(DragCompIndex.index)}
                    className="relative select-none z-50"
                    homeOpen={homeIsOpen}
                    homeOnClose={() => homeSetIsOpen(false)}
                  />
                </div>
              </div>
            </Draggable>
            <Draggable
              onStart={AboutPrioritize}
              onStop={AboutDeprioritize}
              nodeRef={nodeRef}
              offsetParent={document.body}
            >
              <div style={{ zIndex: aboutCurrentZIndex, position: "relative" }}>
                <div ref={nodeRef}>
                  <AboutWindow
                    aboutOpen={aboutIsOpen}
                    aboutOnClose={() => aboutSetIsOpen(false)}
                  />
                </div>
              </div>
            </Draggable>
            <Draggable
              onStart={WorkPrioritize}
              onStop={WorkDeprioritize}
              nodeRef={nodeRef}
              offsetParent={document.body}
            >
              <div style={{ zIndex: workCurrentZIndex, position: "relative" }}>
                <div ref={nodeRef}>
                  <WorkWindow
                    workOpen={workIsOpen}
                    workOnClose={() => workSetIsOpen(false)}
                  />
                </div>
              </div>
            </Draggable>
            <Draggable
              onStart={ContactPrioritize}
              onStop={ContactDeprioritize}
              nodeRef={nodeRef}
              offsetParent={document.body}
            >
              <div
                style={{ zIndex: contactCurrentZIndex, position: "relative" }}
              >
                <div ref={nodeRef}>
                  <ContactWindow
                    contactOpen={contactIsOpen}
                    contactOnClose={() => contactSetIsOpen(false)}
                  />
                </div>
              </div>
            </Draggable>
            <Draggable
              onStart={LinksPrioritize}
              onStop={LinksDeprioritize}
              nodeRef={nodeRef}
              offsetParent={document.body}
            >
              <div style={{ zIndex: linksCurrentZIndex, position: "relative" }}>
                <div ref={nodeRef}>
                  <LinksWindow
                    linksOpen={linksIsOpen}
                    linksOnClose={() => linksSetIsOpen(false)}
                  />
                </div>
              </div>
            </Draggable>
            <Draggable
              onStart={MiscPrioritize}
              onStop={MiscDeprioritize}
              nodeRef={nodeRef}
              offsetParent={document.body}
            >
              <div style={{ zIndex: miscCurrentZIndex, position: "relative" }}>
                <div ref={nodeRef}>
                  <MiscWindow
                    miscOpen={miscIsOpen}
                    miscOnClose={() => miscSetIsOpen(false)}
                  />
                </div>
              </div>
            </Draggable>
          </div>
          <div className="">
            <button
              onDoubleClick={() => homeSetIsOpen(true)}
              className="hover:bg-blue-300/60"
            >
              <img className="max-w-20" src={houseIcon} alt="HomeIcon"></img>
              <h1>Home</h1>
            </button>
          </div>
          <div className="mt-2">
            <button
              onDoubleClick={() => aboutSetIsOpen(true)}
              className="hover:bg-blue-300/60"
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
              onDoubleClick={() => workSetIsOpen(true)}
              className="hover:bg-blue-300/60"
            >
              <img className="max-w-20" src={houseIcon} alt="FolderIcon"></img>
              <h1>Work</h1>
            </button>
          </div>
          <div className="mt-2">
            <button
              onDoubleClick={() => contactSetIsOpen(true)}
              className="hover:bg-blue-300/60"
            >
              <img
                className="max-w-20"
                src={houseIcon}
                alt="Envelope/Phone Icon"
              ></img>
              <h1>Contact</h1>
            </button>
          </div>
          <div className="mt-2">
            <button
              onDoubleClick={() => linksSetIsOpen(true)}
              className="hover:bg-blue-300/60"
            >
              <img
                className="max-w-20"
                src={houseIcon}
                alt="ChainlinkIcon"
              ></img>
              <h1>Links</h1>
            </button>
          </div>
          <div className="mt-2">
            <button
              onDoubleClick={() => miscSetIsOpen(true)}
              className="hover:bg-blue-300/60"
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
            <button className="hover:bg-blue-300/60">
              <img className="max-w-20" src={houseIcon} alt="HomeIcon"></img>
              <h1>Light</h1> {/*Maybe/Maybe not have text*/}
            </button>
          </div>
          <div className="mt-2">
            <button className="hover:bg-blue-300/60">
              <img
                className="max-w-20"
                src={clipboardIcon}
                alt="AboutIcon"
              ></img>{" "}
              {/*Add top margin to every element after first one*/}
              <h1>Mute</h1> {/*Maybed/Maybe not have text*/}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
