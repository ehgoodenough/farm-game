import Preact from "preact"

import Styles from "views/game/Tree.view.less"

export default class Tree {
    render() {
        return (
            <div class="Tree" stage={this.stage}>
                <div class="Stump"/>
                <div class="Leaves"/>
                <div class="Leaves"/>
                <div class="Leaves"/>
                <div class="Leaves"/>
            </div>
        )
    }
    get stage() {
        if(this.props.tree !== undefined) {
            return this.props.tree.stage
        } else {
            return 0
        }
    }
}
