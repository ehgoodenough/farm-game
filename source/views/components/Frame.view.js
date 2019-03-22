import Preact from "preact"

import "views/components/Frame.view.less"

export default class Frame {
    render() {
        return (
            <div class="Frame" id="frame">
                {this.props.children}
            </div>
        )
    }
}
