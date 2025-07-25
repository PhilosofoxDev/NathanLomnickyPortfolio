import "tailwindcss"
import { useState } from "react"
import Window from "./mainwindow"
import AboutWindow from "./aboutWindow"
import houseIcon from "../assets/images/PixelArtHouse.png"
import clipboardIcon from "../assets/images/Clipboard.png"

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
                    <button onClick={() => homeSetIsOpen(true)} class="hover:bg-blue-300/60">
                        <img class="max-w-20" src={houseIcon} alt="HomeIcon"></img>
                        <h1>Home</h1>
                    </button>
                    <Window homeOpen={homeIsOpen} homeOnClose={() => homeSetIsOpen(false)} />
                </div>
                <div class="mt-2">
                    <button onClick={() => aboutSetIsOpen(true)} class="hover:bg-blue-300/60">
                        <img class="max-w-20" src={clipboardIcon} alt="AboutIcon"></img> {/*Add top margin to every element after first one*/}
                        <h1>About</h1>
                    </button>
                    <AboutWindow aboutOpen={aboutIsOpen} aboutOnClose={() => aboutSetIsOpen(false)} />
                </div>
                <div class="mt-2">
                    <button onClick={() => workSetIsOpen(true)} class="hover:bg-blue-300/60">
                        <img class="max-w-20" src={houseIcon} alt="FolderIcon"></img>
                        <h1>Work</h1>
                    </button>
                    <AboutWindow workOpen={workIsOpen} workOnClose={() => workSetIsOpen(false)} />
                </div>
                <div class="mt-2">
                    <button onClick={() => contactSetIsOpen(true)} class="hover:bg-blue-300/60">
                        <img class="max-w-20" src={houseIcon} alt="Envelope/Phone Icon"></img>
                        <h1>Contact</h1>
                    </button>
                    <AboutWindow contactOpen={contactIsOpen} contactOnClose={() => contactSetIsOpen(false)} />
                </div>
                <div class="mt-2">
                    <button onClick={() => linksSetIsOpen(true)} class="hover:bg-blue-300/60">
                        <img class="max-w-20" src={houseIcon} alt="ChainlinkIcon"></img>
                        <h1>Links</h1>
                    </button>
                    <AboutWindow linksOpen={linksIsOpen} linksOnClose={() => linksSetIsOpen(false)} />
                </div>
                <div onClick={() => miscSetIsOpen(true)} class="mt-2">
                    <button class="hover:bg-blue-300/60">
                        <img class="max-w-20" src={houseIcon} alt="RecycleBinIcon"></img>
                        <h1>Misc</h1>
                    </button>
                    <AboutWindow miscOpen={miscIsOpen} miscOnClose={() => miscSetIsOpen(false)} />
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