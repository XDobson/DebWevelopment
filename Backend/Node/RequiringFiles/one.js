// Sharing code between files

// load it into catapult and shoot it to the other files

const helloWorld = (h, w) => h+w;
const hello = "HELLO"
const world = "WORLD"

// Example 1 (Individually as Properties)
/*
Syntax Examples

module.exports
*/

// Prop names dont have to match variable names
module.exports.helloWorld = helloWorld;
module.exports.hello = hello;
module.exports.world = world;