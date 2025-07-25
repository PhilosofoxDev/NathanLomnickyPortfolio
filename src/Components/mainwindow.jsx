import "tailwindcss";
import React from "react";
import ReactDOM from 'react-dom';
import Draggable from "react-draggable";
import _default from "tailwindcss/colors";

{/* import avatar from "../assets/images/Avatar.png"  Avatar image import*/}

const HOME_WINDOW_STYLES = {
    transform: `translate(90%, 60%)`
}


export default function Window({ homeOpen, homeOnClose }) {
    return (
            <div class="" className={`transition-all ${homeOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>
                <div style={HOME_WINDOW_STYLES} class="absolute shrink bg-windowBox mb-15 w-205 h-130 drop-shadow-2xl/20 rounded-sm self-center justify-self-center outline-2 outline-black z-10"> {/*Change color to whatever works*/}
                    <div class="flex w-full items-center bg-siteGreen h-15 rounded-t-sm justify-between drop-shadow-lg/25 outline-2">
                        <h1 class="text-3xl font-dotoBold text-white ml-4 mb-0.5">&lt;home&gt;</h1>
                        <button onClick={homeOnClose} class="mr-2 max-w-15 max-h-10 justify-items-center text-center hover:bg-black/20">
                            <h1 class="pl-4 group-hover:select-none text-3xl font-dotoBold text-white self-center justify-self-center mb-1 mr-3">&#91;X&#93;</h1>
                        </button>
                    </div>
                    <div className="WindowView" class="flex flex-col justify-center h-115 max-w-full max-h-115 text-wrap overflow-y-auto wrap-anywhere">
                        <div class="align-middle font-outfit text-black">
                            <h1 class="text-[4.1rem] mb-5 justify-self-center">Hey! I'm <span class="text-green-700">Nathan</span> :&#41;</h1>
                        </div>
                        <h2 class="text-3xl mb-20 font-outfit self-center">Game Designer, Developer, Creator</h2>
                        <h2 class="text-2xl font-outfit self-center mr-5 ml-5"><span class="font-outfitBold">Welcome</span> to my site! <span class="font-outfitBold">Double Click</span> on the different <span class="font-outfitBold">Desktop Icons</span> to navigate.</h2>
                        {/*<img class="absolute max-w-45 mb-18 ml-1 z-[-1]" src={avatar}></img>      Avatar Image test*/}
                    </div>
                </div>
            </div>
    )
}