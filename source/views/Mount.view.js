import Preact from "preact"

import model from "models/.js"

import Frame from "views/components/Frame.view.js"
import "views/Mount.view.less"

export default class Mount {
    render() {
        return (
            <div className="Mount">
                <Frame size="16x9">
                    <img src={require("images/spacebar.png")}/>
                    <div>{model.time.toFixed(3)}s</div>
                </Frame>
            </div>
        )
    }
}
