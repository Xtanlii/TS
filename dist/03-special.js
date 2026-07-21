"use strict";
//strict null check
// let title: string = "intro"
// title = undefined
let subtitle = undefined;
function log(msg) {
    console.log(msg);
}
function fail(msg) {
    throw new Error(msg);
}
//Do not use  any -> try to ignore as much as possible
const valueAny = JSON.parse('{"x": 1}');
