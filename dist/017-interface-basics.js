"use strict";
//interface => named shape for objects
const user123 = {
    id: '1',
    name: "Stanley",
    createdAt: new Date()
};
const admin333 = {
    id: '1',
    name: "Stanley",
    createdAt: new Date(),
    permissions: ["admin"]
};
const adminWithMeta333 = {
    id: '1',
    name: "Stanley",
    createdAt: new Date(),
    permissions: ["admin"],
    meta: {
        active: true
    }
};
