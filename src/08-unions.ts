//value -> this Or that

function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    id.toExponential();
  }
}

//object union
type Admin = { role: "Admin"; permissions: string[] };
type Customer = { role: "Customer"; loyaltyPoints: number };

function describeUser(u: Admin | Customer) {
  if (u.role === "Admin") {
    u.permissions;
  } else {
    u.loyaltyPoints;
  }
}

function describeUserWithInOperator(u: Admin | Customer) {
  if ("permissions" in u) {
    console.log(u.role);
  } else {
    console.log(u.loyaltyPoints);
  }
}

//array of unions && union of arrays
const arrofUnion: (string | number)[] = ["a", 1, "b", "2"];

const unionOfArrays: string[] | number[] = Math.random() > 0.1 ? ["x","b"] : [1,2]
