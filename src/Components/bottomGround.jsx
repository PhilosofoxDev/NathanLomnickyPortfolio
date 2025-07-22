import 'tailwindcss'
import grassyHills from '../assets/images/GrassyHillsCropped.png'

function Ground() {
    return (
        <div class="fixed"> {/*Height and Width can't be unlinked. This is fine ig, but the grass needs to stay on the bottom no matter what*/}
            <div class="flex max-w-225">
                <img class="shrink" src={grassyHills}></img>
                <img class="shrink" src={grassyHills}></img>
                <img class="shrink" src={grassyHills}></img>
                <img class="shrink" src={grassyHills}></img>
                <img class="shrink" src={grassyHills}></img>
                <img class="shrink" src={grassyHills}></img>
                <img class="shrink" src={grassyHills}></img>
            </div>
        </div>
    )
}

export default Ground