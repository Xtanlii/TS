"use strict";
// Return Type<F>
// Parameters<F>
// InstanceType<Ctor>
// ConstructorParameters<C>
function ExtractUserInfo(id, isExtraInfo = false) {
    return {
        id,
        name: "SOka",
        log: isExtraInfo ? "details" : undefined,
    };
}
const argsInfo = ["u1", true];
const resultInfo = ExtractUserInfo(...argsInfo);
class PersonA7 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hi I am this -> ${this.name}`;
    }
}
const resultInfo1 = ["Sangam", 20];
const abc = new PersonA7(...resultInfo1);
console.log(abc.greet());
