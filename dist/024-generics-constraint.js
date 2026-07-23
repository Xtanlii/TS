"use strict";
// <T> -> constraint T so that only certain shapes are allowed
// <T extends X>
// key constraints-> <K that extendskeyof T> -> k must be a key of T
function len4(x4) {
    return x4.length;
}
console.log(len4("hello"));
console.log(len4([1, 2, 3, 4]));
console.log(len4({ length: 10, tag: "ok" }));
function user6(arr4, key4) {
    return arr4.map((item) => item[key4]);
}
const user3 = [
    { id: '01', name: "John", age: 20 },
    { id: '02', name: "James" },
];
console.log(user6(user3, "name"));
console.log(user6(user3, "id"));
