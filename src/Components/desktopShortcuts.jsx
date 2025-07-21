import "tailwindcss"
import houseIcon from "../assets/images/PixelArtHouse.png"

function Shortcuts() {
    return(
        <div class="flex w-35 absolute justify-center h-screen text-center font-dotoBold text-black text-md"> {/*Left Bar*/}
            <div class="mt-2 mr-9"> {/*Icon Container*/}
                <div>
                    <img class="max-w-20" src={houseIcon}></img>
                    <h1>Home</h1>
                </div>
                <div class="mt-2">      
                    <img class="max-w-20" src={houseIcon}></img> {/*Add top margin to every element after first one*/}
                    <h1>Home</h1>
                </div>
                <div class="mt-2">
                    <img class="max-w-20" src={houseIcon}></img>
                    <h1>Home</h1>
                </div>
            </div>
        </div>
    )
}

export default Shortcuts