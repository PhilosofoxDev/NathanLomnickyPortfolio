import "tailwindcss"
import houseIcon from "../assets/images/PixelArtHouse.png"
import clipboardIcon from "../assets/images/Clipboard.png"

function Shortcuts() {
    return(
        <>
        <div class="flex w-35 absolute justify-center h-screen text-center font-dotoBold text-black text-md z-100"> {/*Left Bar (SHOULD BE ON TOP (highest z-order)*/}
            <div class="mt-2 mr-9"> {/*Left Icon Container*/}
                <div>
                    <button class="hover:bg-blue-300">
                        <img class="max-w-20" src={houseIcon} alt="HomeIcon"></img>
                        <h1>Home</h1>
                    </button>
                </div>
                <div class="mt-2">
                    <button class="hover:bg-blue-300">
                        <img class="max-w-20" src={clipboardIcon} alt="AboutIcon"></img> {/*Add top margin to every element after first one*/}
                        <h1>About</h1>
                    </button>
                </div>
                <div class="mt-2">
                    <button class="hover:bg-blue-300">
                        <img class="max-w-20" src={houseIcon} alt="FolderIcon"></img>
                        <h1>Work</h1>
                    </button>
                </div>
                <div class="mt-2">
                    <button class="hover:bg-blue-300">
                        <img class="max-w-20" src={houseIcon} alt="Envelope/Phone Icon"></img>
                        <h1>Contact</h1>
                    </button>
                </div>
                <div class="mt-2">
                    <button class="hover:bg-blue-300">
                        <img class="max-w-20" src={houseIcon} alt="ChainlinkIcon"></img>
                        <h1>Links</h1>
                    </button>
                </div>
                <div class="mt-2">
                    <button class="hover:bg-blue-300">
                        <img class="max-w-20" src={houseIcon} alt="RecycleBinIcon"></img>
                        <h1>Misc</h1>
                    </button>
                </div>
            </div>
        </div>
        <div class="flex w-35 absolute justify-self-end justify-center h-screen text-center font-dotoBold text-black text-md z-100">
            <div class="mt-2"> {/*Left Icon Container*/}
                <div>
                    <button class="hover:bg-blue-300">
                        <img class="max-w-20" src={houseIcon} alt="HomeIcon"></img>
                        <h1>Light</h1> {/*Maybe/Maybe not have text*/}
                    </button>
                </div>
                <div class="mt-2">      
                    <button class="hover:bg-blue-300">
                        <img class="max-w-20" src={clipboardIcon} alt="AboutIcon"></img> {/*Add top margin to every element after first one*/}
                        <h1>Mute</h1> {/*Maybed/Maybe not have text*/}
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Shortcuts