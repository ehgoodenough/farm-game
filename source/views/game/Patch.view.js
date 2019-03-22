import Preact from "preact"

import model from "models/.js"

import "views/game/Patch.view.less"

export default class Patch {
    render() {
        return (
            <div class="Patch"
                style={this.style}
                onClick={this.onClick}>
                {this.tree}
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
    get tree() {
        return "tree"
    }
}
