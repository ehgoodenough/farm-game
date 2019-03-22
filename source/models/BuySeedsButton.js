import model from "models/.js"

export default class BuySeedsButton {
    onClick() {
        console.log("BUY CLICKED")
        model.buySeed()
    }
}
