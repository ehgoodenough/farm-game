export default class Inventory {
    constructor() {
        this.resources = {
            "gold": 5,
            "wood": 0
        }

        this.items = [
            {"key": "AXE", "label": "Axe"},
            {"key": "WATERING_CAN", "label": "Watering Can"},
            {"key": "SAPLINGS", "label": "Saplings"},
        ]

        // When an item is selected from the inventory,
        // it sets the `selectedItem` field. When a click
        // happens on a patch, it consults this field
        // to see how it should react to this item.
        this.selectedItem = undefined
    }
}
