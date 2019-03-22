import Preact from "preact"

import model from "models/.js"

export default class Patch {
    render() {
        return (
            <div class="Patch" onClick={this.onClick}>
                patch
            </div>
        )
    }
    get onClick() {
        return (event) => {
            this.props.patch.onClick()
        }
    }
}
