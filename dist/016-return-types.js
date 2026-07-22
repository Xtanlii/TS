//inference ex
const doubleFunc = (n) => n * 2;
//explicit return for exported/public functions
export function toTitle(s) {
    return `Hello ${s}`;
}
function booleanToNumber(flag) {
    if (flag) {
        return 1;
    }
    else {
        return 0;
    }
}
async function loadCountInfered() {
    return "43";
}
loadCountInfered().then(n => console.log(n));
