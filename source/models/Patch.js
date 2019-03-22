import model from "models/.js"

// @class Patch
// A patch is the piece of land that
// the players can grow their trees!
export default class Patch {
    constructor(protopatch) {
        protopatch = protopatch || {}
        protopatch.position = protopatch.position || {"x": 0, "y": 0}
        protopatch.tree = protopatch.tree || {"stage": 0}

        this.position = protopatch.position
        this.tree = protopatch.tree
        this.watered = protopatch.watered || false
    }
    // Patch.onClick
    // Called when a player clicks
    // on the patch from the view.
    onClick() {
        if(model.selectedItem === undefined) {
            return
        }
        if(model.selectedItem.key === "SAPLINGS"
        && this.tree === undefined
        && model.resources.gold > 0) {
            this.tree = {"stage": 1}
            model.resources.gold -= 5
        }
        if(model.selectedItem.key === "WATERING_CAN") {
            if(this.watered === false) {
                this.watered = true
                model.resources.gold -= 1
            } else if(this.tree && this.tree.stage < 5) {
                this.tree.stage += 1
                model.resources.gold -= 2
            }

        }
        if(model.selectedItem.key === "AXE"
        && this.tree !== undefined
        && this.tree.stage === 5) {
            this.tree = undefined
            model.resources.wood += 5
            console.log("Cut tree! Got 5 wood!")
        }
    }
}
