

type InExample1 = {role: "Admin", permissions: string[]}
type InExample2 = {role: "User", expiresAt: Date}

type UserExample = InExample1 | InExample2

function describeUSer(u: UserExample){
  if('permissions' in u){
    return `Admin ${u.permissions.join(',')}`
  }

  return `User ${u.expiresAt.toISOString()}`
} 

console.log(describeUSer({role: 'Admin', permissions: ['read']}))

//avoid runtime crashes
// ?? and || (nullish)
// obj?. (optional chaining)

type ProfileN3 = {
  name:string;
  contact?: {email? : string}
}

const P1N3: ProfileN3 = {name: "Jhn"}
const P2N3: ProfileN3 = {name: "Jhn", contact:{email: "ben123@gmail.com"}}

const email1N3  =P1N3.contact?.email
const email2N3  =P2N3.contact?.email

// ?? => uses the right hand default only when the left is null or undefined
// || => uses the default when the left is any falsy value(0, "", null, undefined, NaN)

const countFromServer3 : number | null = 0
const labelFromServer3 : string|undefined = ""

const a3 = countFromServer3 ?? 100
const b3 = countFromServer3 || 100
console.log(a3);
console.log(b3);
