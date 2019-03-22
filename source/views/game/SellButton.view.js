import Preact from "preact"

import Styles from "views/game/SellButton.view.less"
import model from "models/.js"


export default class SellButton {
    render() {
        return (
            <div class="SellButton" onClick={this.onClick}>
                <div class="Icon" />
                <div class="Label">
                    SELL WOOD
                </div>
            </div>
        )
    }

    get onClick() {
        return (event) => {
            console.log("SELL CLICKED")
            if(model.resources.wood > 0) {
                model.sellWood()
            }
        }
    }
}
