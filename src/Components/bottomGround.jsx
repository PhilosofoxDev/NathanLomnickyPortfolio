import 'tailwindcss'
import grassyHills from '../assets/images/GrassyHillsCropped.png'

function Ground() {
    return (
        <div className="fixed"> {/*Height and Width can't be unlinked. This is fine ig, but the grass needs to stay on the bottom no matter what*/}
            <div className="flex max-w-225">
                <img className="shrink" src={grassyHills}></img>
                <img className="shrink" src={grassyHills}></img>
                <img className="shrink" src={grassyHills}></img>
                <img className="shrink" src={grassyHills}></img>
                <img className="shrink" src={grassyHills}></img>
                <img className="shrink" src={grassyHills}></img>
                <img className="shrink" src={grassyHills}></img>
            </div>
        </div>
    )
}

export default Ground