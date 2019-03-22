import Preact from "preact"

import Styles from "views/game/BuyButton.view.less"
import model from "models/.js"


export default class BuyButton {
    render() {
        return (
            <div class="SellButton" onClick={this.onClick}>
                <div class="Icon" />
                <div class="Label">
                    BUY LAND
                </div>
            </div>
        )
    }

    get onClick() {
        return (event) => {
            console.log("SELL CLICKED")
            if(model.resources.gold > model.patchCost) {
                model.buyLand()
            }
        }
    }
}
