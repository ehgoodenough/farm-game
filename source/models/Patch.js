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
    }
    // Patch.onClick
    // Called when a player clicks
    // on the patch from the view.
    onClick() {
        if(model.selectedItem === undefined) {
            return
        }
        if(model.selectedItem.key === "SAPLINGS"
        && this.tree === undefined) {
            this.tree = {"stage": 1}
            console.log("Planted tree! Set to stage 1.")
        }
        if(model.selectedItem.key === "WATERING_CAN"
        && this.tree !== undefined
        && this.tree.stage < 5) {
            this.tree.stage += 1
            console.log("Watered tree! Grew by 1 stage.")
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
