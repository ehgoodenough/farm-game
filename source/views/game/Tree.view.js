import Preact from "preact"

import Styles from "views/game/Tree.view.less"

export default class Tree {
    render() {
        return (
            <div class="Tree" stage={this.props.tree.stage}>
                <div class="Stump"/>
                <div class="Leaves"/>
                <div class="Leaves"/>
                <div class="Leaves"/>
                <div class="Leaves"/>
            </div>
        )
    }
}
