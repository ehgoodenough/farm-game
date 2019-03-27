import Preact from "preact"

import model from "models/.js"

import Sky from "views/game/Sky.view.js"
import Clock from "views/game/Clock.view.js"
import Patch from "views/game/Patch.view.js"
import Styles from "views/game/GameScreen.view.less"

export default class GameScreen {
    render() {
        return (
            <div class="GameScreen">
                <Sky clock={model.clock}/>
                <Clock clock={model.clock}/>
                <World/>
                <Inventory/>
            </div>
        )
    }
}

class World {
    render() {
        return (
            <div class="Farm">
                {model.patches.map((patch) => (
                    <Patch patch={patch}/>
                ))}
            </div>
        )
    }
}

class Inventory {
    render() {
        return (
            <div class="Inventory">
                {model.inventory.items.map((item) => (
                    <Item item={item}/>
                ))}
            </div>
        )
    }
}
class Item {
    render() {
        return (
            <div class="Item" isSelected={this.isSelected} onClick={this.onClick}>
                {this.props.item.label}
            </div>
        )
    }
    get isSelected() {
        return model.inventory.selectedItem === this.props.item
    }
    get onClick() {
        return (event) => {
            model.inventory.selectedItem = this.props.item
        }
    }
}
