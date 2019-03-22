import Preact from "preact"

import model from "models/.js"

import Patch from "views/game/Patch.view.js"
import SellButton from "views/game/SellButton.view.js"
import Styles from "views/game/GameScreen.view.less"

export default class GameScreen {
    render() {
        return (
            <div class="GameScreen">
                <div class="ResourceBar">
                    <div class="GoldIcon" />
                    <div class="GoldLabel">
                        {model.resources.gold}
                    </div>
                    <div class="WoodIcon" />
                    <div class="WoodLabel">
                        {model.resources.wood}
                    </div>
                    <SellButton />
                </div>
                <div class="Farm">
                    {model.patches.map((patch) => (
                        <Patch patch={patch}/>
                    ))}
                </div>
                <div class="Inventory">
                    {model.items.map((item) => (
                        <Item item={item}/>
                    ))}
                </div>
            </div>
        )
    }
}

// TODO: Move this into its own file. :T
class Item {
    render() {
        return (
            <div class="Item" isSelected={this.isSelected} onClick={this.onClick}>
                {this.props.item.label}
            </div>
        )
    }
    get isSelected() {
        return model.selectedItem === this.props.item
    }
    get onClick() {
        return (event) => {
            model.selectedItem = this.props.item
        }
    }
}
