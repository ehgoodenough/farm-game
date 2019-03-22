import Preact from "preact"

import model from "models/.js"

import Frame from "views/components/Frame.view.js"
import Patch from "views/game/Patch.view.js"
import "views/Mount.view.less"

export default class Mount {
    render() {
        return (
            <div class="Mount">
                <Frame>
                    {model.patches.map((patch) => (
                        <Patch patch={patch}/>
                    ))}
                </Frame>
            </div>
        )
    }
}
