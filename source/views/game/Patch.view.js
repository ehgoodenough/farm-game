import Preact from "preact"

import model from "models/.js"

import Tree from "views/game/Tree.view.js"
import Styles from "views/game/Patch.view.less"

export default class Patch {
    render() {
        return (
            <div class={this.className} style={this.style} onClick={this.onClick}>
                <Tree tree={this.props.patch.tree}/>
            </div>
        )
    }

    get className() {
        let classes = ["Patch"]
        if(this.props.patch !== undefined && this.props.patch.watered === true) {
            classes.push("watered")
        }
        return classes.join(" ")
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
