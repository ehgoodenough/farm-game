import Keyb from "keyb"

import Patch from "models/Patch.js"
import Clock from "models/Clock.js"
import Inventory from "models/Inventory.js"

const protoworld = {
    "patches": [
        {"position": {"x": 1, "y": 12}, "tree": {"stage": 5}},
        {"position": {"x": 5, "y": 12}, "tree": {"stage": 5}},
        {"position": {"x": 9, "y": 12}, "tree": {"stage": 5}},
    ]
}

export default class Model {
    constructor() {
        // TODO: Move this to a world class with other worldly concerns.
        this.patches = protoworld.patches.map((protopatch) => {
            return new Patch(protopatch)
        })

        this.clock = new Clock()
        this.inventory = new Inventory()
    }
}
