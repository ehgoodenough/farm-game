import Preact from "preact"

import model from "models/.js"

import Patch from "views/game/Patch.view.js"
import "views/Mount.view.less"

export default class Mount {
    render() {
        return (
            <div class="Mount">
                <div class="Frame">
                    {model.patches.map((patch) => (
                        <Patch patch={patch}/>
                    ))}
                </div>
            </div>
        )
    }
}
