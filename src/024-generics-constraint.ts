// <T> -> constraint T so that only certain shapes are allowed
// <T extends X>
// key constraints-> <K that extendskeyof T> -> k must be a key of T

function len4<T extends { length: number }>(x4: T): number {
  return x4.length;
}
console.log(len4("hello"));
console.log(len4([1, 2, 3, 4]));
console.log(len4({ length: 10, tag: "ok" }));

// console.log(len4(123));

type User6 = {
  id: string;
  name: string;
  age?: number;
};

function user6<T, K extends keyof T>(arr4: T[], key4: K): Array<T[K]> {
  return arr4.map((item) => item[key4]);
}

const user3: User6[] = [
  { id: '01', name: "John",age: 20},
  { id: '02', name: "James"},
]

console.log(user6(user3,"name"));
console.log(user6(user3,"id"));
