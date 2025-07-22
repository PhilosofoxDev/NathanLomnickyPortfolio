import "tailwindcss"

function Window() {
    return (
            <div class="fixed bg-windowBox mb-15 w-205 h-130 rounded-sm self-center justify-self-center outline-2 outline-black z-10"> {/*Change color to whatever works*/}
                <div class="flex w-full bg-siteGreen h-15 rounded-t-sm justify-between drop-shadow-lg/25 outline-2">
                    <h1 class="text-3xl font-dotoBold text-white ml-4 m-2 mt-2.5">&lt;window&gt;</h1>
                    <h1 class="text-3xl font-dotoBold text-white self-center mb-1 mr-3">&#91;X&#93;</h1>
                </div>
                <div className="WindowView">
                    
                </div>
            </div>
    )
}

export default Window