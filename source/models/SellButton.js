import model from "models/.js"

export default class SellButton {
    onClick() {
        console.log("SELL CLICKED")
        model.sellWood()
    }
}
