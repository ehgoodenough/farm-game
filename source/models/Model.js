import Keyb from "keyb"

import Patch from "models/Patch.js"

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

        // When an item is selected from the inventory,
        // it sets the `selectedItem` field. When a click
        // happens on a patch, it consults this field
        // to see how it should react to this item.
        this.selectedItem = undefined
        this.items = [
            {"key": "AXE", "label": "Axe"},
            {"key": "WATERING_CAN", "label": "Watering Can"},
            {"key": "SAPLINGS", "label": "Saplings"},
        ]
    }
}
