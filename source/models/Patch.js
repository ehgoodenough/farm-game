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
        && model.resources.gold > model.seedCost) {
            this.tree = {"stage": 1}
            model.resources.gold -= model.seedCost
        }
        if(model.selectedItem.key === "WATERING_CAN") {
            if(this.watered === false && model.resources.gold >= model.wateringCost) {
                this.watered = true
                model.resources.gold -= model.wateringCost
            } else if(this.tree && this.tree.stage < 5 && model.resources.gold >= model.growthCost) {
                this.tree.stage += 1
                model.resources.gold -= model.growthCost
            }
        }
        if(model.selectedItem.key === "AXE"
        && this.tree !== undefined
        && this.tree.stage === 5) {
            this.tree = undefined
            this.watered = false
            model.resources.wood += model.woodHarvestCount
            console.log(`Cut tree! Got ${model.woodWorth} wood!`)
        }
    }
}
