import model from "models/.js"

// @class Patch
// A patch is the piece of land that
// the players can grow their trees!
export default class Patch {
    constructor(protopatch) {
        protopatch = protopatch || {}
        protopatch.position = protopatch.position || {"x": 0, "y": 0}

        this.position = protopatch.position

        this.tree = {"stage": 0}
    }
    update(delta) {
        // ...
    }
    onClick() {
        console.log(this)
        this.tree.stage += 1
        if(this.tree.stage >= 6) {
            this.tree.stage = -1
        }
    }
}
