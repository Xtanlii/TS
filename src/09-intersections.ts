// the value must be everything i.e from A and from B

type Inter1 = { id: string };
type Inter2 = { createdAt: Date };

type Entity = Inter1 & Inter2 // must have both id and createdAt

const e: Entity = {id: 'e1', createdAt: new Date()}

// hmwrk -> create two types one username ,one user email; mash both

type NumberHolder = {a:number}
type StringHolder = {a: string}

// type NumberStringMix = NumberHolder & NumberStringMix
// const bad : NumberStringMix = {a: 123}

type Product = {id: string; title: string}
type Priced = {price: number};

type PricedProduct = Product & Priced
