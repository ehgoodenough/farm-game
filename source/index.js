if(__STAGE__ === "DEVELOPMENT") {
    require("statgrab/do")
    console.clear()
}

import Yaafloop from "yaafloop"

import model from "models/.js"
import view from "views/.js"

let loop = new Yaafloop((delta) => {
    // model.update(delta)
    view.update(delta)
})

const FPS = 60
const CAP = 1000
let now = undefined
window.setInterval(() => {
    let delta = Math.min(window.performance.now() - (now || 0), CAP)
    delta = {
        "ms": delta, // in milliseconds
        "s": delta / 1000, // in seconds
        "f": delta / (1000 / FPS), // in frames
    }

    model.clock.update(delta)
    document.title = model.clock.timestring + " - Pomodoro Farm"

    now = window.performance.now()
}, 1)
