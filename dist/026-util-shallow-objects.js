"use strict";
// partial<T> -> make all the top level fields optional
const patch10 = { name: "Jossie" };
const patch11 = { address: { city: "Jakarta" } };
const userAllPatch11 = {
    id: "011",
    name: "Lily",
    address: { line1: "Jodd", city: "Austin" },
    email: "samsom.com",
};
const readonlyUser = {
    id: "u3",
    name: "Simon",
    address: { line1: "Mell", city: "Cali" },
};
const publicUser = { id: "p2", name: "Jackson" };
const omitUserA10 = {
    id: "u3",
    name: "Simon",
};
const dirA10 = {
    admin: { id: "u10", name: "admin", address: { line1: "oi", city: "subj" } },
    user: { id: "u11", name: "user", address: { line1: "oi", city: "subj" } },
    editor: { id: "u12", name: "editor", address: { line1: "oi", city: "subj" } },
};
