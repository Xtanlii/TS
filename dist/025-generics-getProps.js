"use strict";
function getUserA7(objA7, keyA7) {
    return objA7[keyA7];
}
const userA7 = {
    id: 'u1', name: "Stanley"
};
const idValA7 = getUserA7(userA7, 'id');
function setUserA7(objA7, keyA7, newVal) {
    objA7[keyA7] = newVal;
}
setUserA7(userA7, "email", ".com");
setUserA7(userA7, "name", "James");
