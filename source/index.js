if(__STAGE__ === "DEVELOPMENT") {
    require("statgrab/do")
    console.clear()
}

import Yaafloop from "yaafloop"

import model from "models/.js"
import view from "views/.js"

let afloop = new Yaafloop((delta) => {
    // model.update(delta)
    view.update(delta)
})

let iloop = new Yailoop((delta) => {
    model.clock.update(delta)
    document.title = model.clock.timestring + " - Pomodoro Farm"
})

function Iloop(func) {
    let now = window.performance.now()
    window.setInterval(() => {
        let delta = window.performance.now() - now
        func(delta)
        now = window.performance.now()
    }, 1)
}

function Yailoop(func) {
    this.func = func

    this.fps = 60
    this.cap = 1000

    return new Iloop((delta) => {
        // Cap the delta.
        if(this.cap != undefined) {
            delta = Math.min(delta, this.cap)
        }

        // Calculate the delta in
        // different units of time.
        delta = {
            "ms": delta, // in milliseconds
            "s": delta / 1000, // in seconds
            "f": delta / (1000 / this.fps), // in frames
        }

        // Call the function
        // with the delta.
        this.func(delta)
    })
}
