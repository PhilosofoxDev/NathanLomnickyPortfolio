import "tailwindcss"
import React from "react"

const ABOUT_WINDOW_STYLES = {
    transform: `translate(94%, 40%)`
}

export default function AboutWindow({ aboutOpen, aboutOnClose }) {
    return (
        <div className={`transition-all ${aboutOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>
            <div style={ABOUT_WINDOW_STYLES} class="absolute bg-windowBox mb-15 w-205 h-130 drop-shadow-2xl/20 rounded-sm self-center justify-self-center outline-2 outline-black z-20"> {/*Change color to whatever works*/}
                <div class="flex w-full bg-siteGreen h-15 rounded-t-sm justify-between drop-shadow-lg/25 outline-2">
                    <h1 class="text-3xl font-dotoBold text-white ml-4 m-2 mt-2.5">&lt;about&gt;</h1>
                    <button onClick={aboutOnClose} class="mr-3 mt-3 max-w-15 max-h-10 justify-items-center text-center hover:bg-black/20">
                        <h1 class="pl-4 group-hover:select-none text-3xl font-dotoBold text-white self-center justify-self-center mb-1 mr-3">&#91;X&#93;</h1>
                    </button>
                </div>
                <div className="WindowView" class="flex flex-col justify-center h-115 max-w-full max-h-115 text-wrap overflow-y-auto wrap-anywhere">

                </div>
            </div>
        </div>
    )
}