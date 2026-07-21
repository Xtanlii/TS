"use strict";
//value -> this Or that
function printId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        id.toExponential();
    }
}
function describeUser(u) {
    if (u.role === "Admin") {
        u.permissions;
    }
    else {
        u.loyaltyPoints;
    }
}
function describeUserWithInOperator(u) {
    if ("permissions" in u) {
        console.log(u.role);
    }
    else {
        console.log(u.loyaltyPoints);
    }
}
//array of unions && union of arrays
const arrofUnion = ["a", 1, "b", "2"];
const unionOfArrays = Math.random() > 0.1 ? ["x", "b"] : [1, 2];
