"use strict";
//when to use types?
//object shapes -> similar to interfaces
// union types (a| b)
// intersection types(A & B)
const person1 = {
    id: "1",
    address: "address",
    salary: 1234,
};
function nextActionCheck(s) {
    switch (s) {
        case 'new':
            return 'new';
        case 'paid':
            return 'paid';
        case 'pending':
            return 'pending';
        default:
            return 'default';
    }
}
const allTogether = {
    id: "1",
    address: "address",
    salary: 1234,
    price: 10,
    stock: 30
};
