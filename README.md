# Plane Jam 2019 #

A game from the plane ride back from GDC 2019.

## Features ##

### Currently Scuffed
* Buying land currently is scuffed-- this is where my plane ride ended.

### Current Features ###

1. Cut trees with axe.
2. Plant trees with saplings.
3. Grow trees with watering can.

### Planned Features ###

* Economy
    * Go to shop.
    * Sell wood for gold
    * Buy saplings with gold.
* Day/Night
    * Trees only grow after a "day" has passed?
    * Gold is only received from shipped goods after a "day" has passed?
* Progression
    * Buy more patches for more trees to make more gold.

## Contributing ##

### How to Build ###

Have node v8+ and yarn v1+.

```
node --version
yarn --version
```

Start the server.

```
yarn install
yarn start
```

### How to Deploy ###

Deploy to [github.io](https://ehgoodenough.github.io/planejam2019).

```
yarn deploy
```

### How to Learn the Codebase ###

Tour through this critical bits of code:

* **Singleton Models**: `models/.js` is a singleton instance of `models/Model.js`. All files, from views to other models, explicitly import it for changing top-level state.
* **Patches & Trees**: The patches are the pieces of land that the players use to grow trees. It has the update handlers for interacting with an item. Read more in `models/Patch.js` and `views/Patch.view.js`.
* **Proto**: The "protoworld" is the primitive json form of the "world" object. We pass these protos to the classes to instantiate them.
