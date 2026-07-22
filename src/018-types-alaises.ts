//when to use types?
//object shapes -> similar to interfaces
// union types (a| b)
// intersection types(A & B)

type Person1 = {
  id: string;
  address: string;
  salary: number;
};

const person1: Person1 = {
  id: "1",
  address: "address",
  salary: 1234,
}

type Status= 'new'| 'paid' | 'pending'

function nextActionCheck(s: Status): string {
  switch(s){
    case 'new':
      return 'new'
       case 'paid':
      return 'paid'
       case 'pending':
      return 'pending'
    default:
      return 'default'
      
  }
}

type ToMerge1 = {price: number}
type ToMerge2 = {stock: number}

type MergedProductTogether = Person1 & ToMerge1 & ToMerge2

const allTogether : MergedProductTogether = {
  id: "1",
  address: "address",
  salary: 1234,
  price: 10,
  stock: 30
}