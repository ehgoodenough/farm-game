import Keyb from "keyb"

import Patch from "models/Patch.js"

// The "protoworld" is the primitive json form
// of the "world". We pass these protos to the
// classes to instantiate them.

const protoworld = {
    "patches": [
        {"position": {"x": 0, "y": 3}},
        {"position": {"x": 3, "y": 3}},
        {"position": {"x": 6, "y": 3}},
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
