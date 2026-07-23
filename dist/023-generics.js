"use strict";
/**GOALS */
// understand what is type parameter <T>
// how typescript infers <T> from your arguments automatically
// Generic is a function where the types are "blanks" that you  fill in later
// <T> is a placeholder
// TS will  try to understand what T should be
function id(x) {
    return x;
}
//infers T
// id(5) ->T is a  number
// id('string') ->T is a  string
const xyz = id(5);
console.log(xyz + 1, id('Stanley'));
function firstGen(arr) {
    return arr[0];
}
console.log(firstGen([1, 2, 3, 4]));
//without generics -> (x: unknown)=> unknown
//with generics: (x: T)=> T  //keeps the exact type
function wrap(value) {
    return { value };
}
