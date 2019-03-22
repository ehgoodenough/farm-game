import Preact from "preact"

import model from "models/.js"

import Patch from "views/game/Patch.view.js"
import Styles from "views/game/GameScreen.view.less"

export default class GameScreen {
    render() {
        return (
            <div class="GameScreen">
                <div class="Farm">
                    {model.patches.map((patch) => (
                        <Patch patch={patch}/>
                    ))}
                </div>
                <div class="Inventory">
                    {model.items.map((item) => (
                        <div class="Item">
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
