//goal -> understand when to let typescript infer types
//whenn ts will write the types or i will write the types

let count = 0;
const site = "mofe";
const scores = [10, 20, 20];

//over annotation isn't bad -> just noisy

export function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 2));

//annotate when the type is not obvious

let maybe: string | number;
maybe = Math.random() > 0.5 ? "test" : 10;
