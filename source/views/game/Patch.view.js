import Preact from "preact"

import model from "models/.js"

import "views/game/Patch.view.less"

export default class Patch {
    render() {
        return (
            <div class="Patch" style={this.style} onClick={this.onClick}>
                <Tree tree={this.props.patch.tree}/>
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

class Tree {
    render() {
        return (
            <div class="Tree">
                <div class="Stump"/>
                <div class="Leaves">
                    <div class="Leaf"/>
                    <div class="Leaf"/>
                    <div class="Leaf"/>
                    <div class="Leaf"/>
                </div>
            </div>
        )
    }
}
