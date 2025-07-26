import "tailwindcss"
import React, { useRef } from "react"
import Draggable from "react-draggable"

const CONTACT_WINDOW_STYLES = {
    transform: `translate(115%, 0%)`
}

export default function ContactWindow({ contactOpen, contactOnClose }) {
    const nodeRef = useRef(null)
    
    return (
        <Draggable nodeRef={nodeRef} offsetParent={document.body}>
            <div ref={nodeRef}>
                <div className= {`transition-all select-none ${contactOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>
                    <div style={CONTACT_WINDOW_STYLES} className="absolute bg-windowBox mb-15 w-205 h-130 drop-shadow-2xl/20 rounded-sm self-center justify-self-center outline-2 outline-black z-20"> {/*Change color to whatever works*/}
                        <div className="flex w-full bg-siteGreen h-15 rounded-t-sm justify-between drop-shadow-lg/25 outline-2">
                            <h1 className="text-3xl font-dotoBold text-white ml-4 m-2 mt-2.5">&lt;contact&gt;</h1>
                            <button onClick={contactOnClose} className="mr-3 mt-3 max-w-15 max-h-10 justify-items-center text-center hover:bg-black/20">
                                <h1 className="pl-4 group-hover:select-none text-3xl font-dotoBold text-white self-center justify-self-center mb-1 mr-3">&#91;X&#93;</h1>
                            </button>
                        </div>
                        <div className="flex flex-col justify-center h-115 max-w-full max-h-115 text-wrap overflow-y-auto wrap-anywhere">

                        </div>
                    </div>
                </div>
            </div>
        </Draggable>
    )
}