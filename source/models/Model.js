import Keyb from "keyb"

import Patch from "models/Patch.js"

// Naming Stuff: "Proto"
// The "protoworld" is the primitive json form
// of the "world". We pass these protos to the
// classes to instantiate them.

const protoworld = {
    "patches": [
        {"position": {"x": 1, "y": 9}, "tree": {"stage": 5}},
        {"position": {"x": 5, "y": 9}, "tree": {"stage": 5}},
        {"position": {"x": 9, "y": 9}, "tree": {"stage": 5}},
    ]
}

export default class Model {
    constructor() {
        this.patches = protoworld.patches.map((protopatch) => {
            return new Patch(protopatch)
        })

        this.resources = {
            "gold": 5,
            "wood": 0
        }

        this.selectedItem = undefined
        this.items = [
            {"key": "AXE", "label": "Axe"},
            {"key": "WATERING_CAN", "label": "Watering Can"},
            {"key": "SAPLINGS", "label": "Saplings"},
        ]
    }
    update(delta) {
        this.patches.forEach((patch) => {
            patch.update(delta)
        })
    }
}
