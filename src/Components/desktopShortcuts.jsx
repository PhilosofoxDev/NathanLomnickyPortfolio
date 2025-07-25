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
import React from "react";
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

export default function Shortcuts() {
    const [homeIsOpen, homeSetIsOpen] = useState(true)
    const [aboutIsOpen, aboutSetIsOpen] = useState(false)
    const [workIsOpen, workSetIsOpen] = useState(false)
    const [contactIsOpen, contactSetIsOpen] = useState(false)
    const [linksIsOpen, linksSetIsOpen] = useState(false)
    const [miscIsOpen, miscSetIsOpen] = useState(false)
    return(
        <>
        <div class="flex w-35 absolute justify-center h-screen text-center font-dotoBold text-black text-md z-100"> {/*Left Bar (SHOULD BE ON TOP (highest z-order)*/}
            <div class="mt-2 mr-9"> {/*Left Icon Container*/}
                <div>
                    <button onDoubleClick={() => homeSetIsOpen(true)} class="hover:bg-blue-300/60">
                        <img class="max-w-20" src={houseIcon} alt="HomeIcon"></img>
                        <h1>Home</h1>
                    </button>
                    <Window class="select-none" homeOpen={homeIsOpen} homeOnClose={() => homeSetIsOpen(false)} />
                </div>
                <div class="mt-2">
                    <button onDoubleClick={() => aboutSetIsOpen(true)} class="hover:bg-blue-300/60">
                        <img class="max-w-20" src={clipboardIcon} alt="AboutIcon"></img> {/*Add top margin to every element after first one*/}
                        <h1>About</h1>
                    </button>
                    <AboutWindow aboutOpen={aboutIsOpen} aboutOnClose={() => aboutSetIsOpen(false)} />
                </div>
                <div class="mt-2">
                    <button onDoubleClick={() => workSetIsOpen(true)} class="hover:bg-blue-300/60">
                        <img class="max-w-20" src={houseIcon} alt="FolderIcon"></img>
                        <h1>Work</h1>
                    </button>
                    <WorkWindow workOpen={workIsOpen} workOnClose={() => workSetIsOpen(false)} />
                </div>
                <div class="mt-2">
                    <button onDoubleClick={() => contactSetIsOpen(true)} class="hover:bg-blue-300/60">
                        <img class="max-w-20" src={houseIcon} alt="Envelope/Phone Icon"></img>
                        <h1>Contact</h1>
                    </button>
                    <ContactWindow contactOpen={contactIsOpen} contactOnClose={() => contactSetIsOpen(false)} />
                </div>
                <div class="mt-2">
                    <button onDoubleClick={() => linksSetIsOpen(true)} class="hover:bg-blue-300/60">
                        <img class="max-w-20" src={houseIcon} alt="ChainlinkIcon"></img>
                        <h1>Links</h1>
                    </button>
                    <LinksWindow linksOpen={linksIsOpen} linksOnClose={() => linksSetIsOpen(false)} />
                </div>
                <div onDoubleClick={() => miscSetIsOpen(true)} class="mt-2">
                    <button class="hover:bg-blue-300/60">
                        <img class="max-w-20" src={houseIcon} alt="RecycleBinIcon"></img>
                        <h1>Misc</h1>
                    </button>
                    <MiscWindow miscOpen={miscIsOpen} miscOnClose={() => miscSetIsOpen(false)} />
                </div>
            </div>
        </div>
        <div class="flex w-35 absolute justify-self-end justify-center h-screen text-center font-dotoBold text-black text-md z-100">
            <div class="mt-2"> {/*Right Icon Container*/}
                <div>
                    <button class="hover:bg-blue-300/60">
                        <img class="max-w-20" src={houseIcon} alt="HomeIcon"></img>
                        <h1>Light</h1> {/*Maybe/Maybe not have text*/}
                    </button>
                </div>
                <div class="mt-2">      
                    <button class="hover:bg-blue-300/60">
                        <img class="max-w-20" src={clipboardIcon} alt="AboutIcon"></img> {/*Add top margin to every element after first one*/}
                        <h1>Mute</h1> {/*Maybed/Maybe not have text*/}
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}