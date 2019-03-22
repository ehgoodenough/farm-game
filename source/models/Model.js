import Keyb from "keyb"

import Patch from "models/Patch.js"

export default class Model {
    constructor() {
        this.patches = [
            new Patch(),
            new Patch(),
            new Patch()
        ]
    }
    update(delta) {
        this.patches.forEach((patch) => {
            patch.update(delta)
        })
    }
}
