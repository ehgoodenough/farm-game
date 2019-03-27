import Preact from "preact"

import model from "models/.js"

import Tree from "views/game/Tree.view.js"
import Styles from "views/game/Patch.view.less"

export default class Patch {
    render() {
        return (
            <div class="Patch" style={this.style} onClick={this.onClick}>
                <div class="Dirt">
                    <Tree tree={this.props.patch.tree}/>
                </div>
            </div>
        )
    }
    get style() {
        return {
            "top": this.props.patch.position.y + "em",
            "left": this.props.patch.position.x + "em",
        }
    }
    get onClick() {
        return (event) => {
            this.props.patch.onClick()
        }
    }
}
