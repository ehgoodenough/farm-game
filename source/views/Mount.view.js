import Preact from "preact"

import model from "models/.js"

import GameScreen from "views/game/GameScreen.view.js"
import Styles from "views/Mount.view.less"

export default class Mount {
    render() {
        return (
            <div class="Mount">
                <div class="Frame">
                    {this.screen}
                </div>
            </div>
        )
    }
    get screen() {
        return <GameScreen/>
    }
}
