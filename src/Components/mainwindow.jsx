import "tailwindcss"

function Window() {
    return (
        <div class="fixed flex mx-auto w-screen h-screen items-center justify-center">
            <div class="bg-windowBox w-205 h-130 rounded-sm self-center outline-1 outline-offset-0">
                <div class="flex w-full bg-siteGreen h-15 rounded-t-sm">
                    <h1 class="text-3xl font-dotoBold text-white ml-4 m-2 mt-3">&lt;window&gt;</h1>
                </div>
                <div className="WindowView">
                    
                </div>
            </div>
        </div>
    )
}

export default Window