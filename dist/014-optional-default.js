"use strict";
function greetPersonOptional(name) {
    const upperRes = name ? name?.toUpperCase() : "Guest";
    return `Hello  ${upperRes}`;
}
console.log(greetPersonOptional('Stanley'));
console.log(greetPersonOptional());
function greetPersonDefault(name = "Guest") {
    return `Hello  ${name}`;
}
console.log(greetPersonDefault());
function connect(host, port, secure) {
    const p = port ?? 80;
    const s = secure ?? false;
    return `Connect ${host} ${p} ${s}`;
}
console.log(connect('localhost'));
