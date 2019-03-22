import Keyb from "keyb"

import Patch from "models/Patch.js"

// Naming Stuff: "Proto"
// The "protoworld" is the primitive json form
// of the "world". We pass these protos to the
// classes to instantiate them.

const protoworld = {
    "patches": [
        {"position": {"x": 1, "y": 9}},
        {"position": {"x": 5, "y": 9}},
        {"position": {"x": 9, "y": 9}},
    ]
}

export default class Model {
    constructor() {
        this.patches = protoworld.patches.map((protopatch) => {
            return new Patch(protopatch)
        })
    }
    update(delta) {
        this.patches.forEach((patch) => {
            patch.update(delta)
        })
    }
}
