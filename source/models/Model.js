import Keyb from "keyb"

import Patch from "models/Patch.js"

const protoworld = {
    "patches": [
        {"position": {"x": 1, "y": 9}, "tree": {"stage": 5}, "watered": false},
        {"position": {"x": 5, "y": 9}, "tree": {"stage": 5}, "watered": false},
        {"position": {"x": 9, "y": 9}, "tree": {"stage": 5}, "watered": false},
    ]
}

export default class Model {
    constructor() {
        this.patches = protoworld.patches.map((protopatch) => {
            return new Patch(protopatch)
        })

        this.seedCost = 2
        this.wateringCost = 1
        this.growthCost = 2
        this.woodHarvestCount = 5
        this.goldForOneWood = 2

        this.resources = {
            "gold": 5,
            "wood": 5,
            // TODO have seed counter instead of just autobuying them ?
            "seeds": 0
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

    // OBVIOUSLY THESE NEEDS REFACTOR PLZ NO JUDGE
    sellWood() {
        this.resources.wood -= 1
        this.resources.gold += this.goldForOneWood
    }

    buySeed() {
        this.resources.gold -= 1
        this.resources.seeds += 1
    }
}
