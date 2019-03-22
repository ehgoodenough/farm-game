import model from "models/.js"

// @class Patch
// A patch is the piece of land that the
// players can seed, water and harvest.
export default class Patch {
    constructor(protopatch) {
        protopatch = protopatch || {}
        protopatch.position = protopatch.position || {"x": 0, "y": 0}

        this.position = protopatch.position
    }
    update(delta) {
        // ...
    }
    onClick() {
        console.log(this)
    }
}
