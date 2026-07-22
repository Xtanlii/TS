// tuples -> fixed length and  fixed types
//
//optional tuples

const userEntry: [string, number] = ["Stanley", 22];

type ResponseRow = [status: number, message?: string];

const r11: ResponseRow = [1, "Hello"];

const corners: readonly [number, number] = [0, 0];
