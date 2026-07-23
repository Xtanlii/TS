// Return Type<F>
// Parameters<F>
// InstanceType<Ctor>
// ConstructorParameters<C>

function ExtractUserInfo(id: string, isExtraInfo = false) {
  return {
    id,
    name: "SOka",
    log: isExtraInfo ? "details" : (undefined as string | undefined),
  };
}

type GetUserReturnInfo = ReturnType<typeof ExtractUserInfo>;
type GetUserParamsInfo = Parameters<typeof ExtractUserInfo>;

const argsInfo: GetUserParamsInfo = ["u1", true];
const resultInfo: GetUserReturnInfo = ExtractUserInfo(...argsInfo);

class PersonA7 {
  constructor(
    public name: string,
    public age: number,
  ) {}
  greet() {
    return `Hi I am this -> ${this.name}`;
  }
}
 
type PersonInstanceN1 = InstanceType<typeof PersonA7>
type PersonCtorArgsN1 = ConstructorParameters<typeof PersonA7>

const resultInfo1: PersonCtorArgsN1 = ["Sangam", 20]
const abc: PersonInstanceN1  = new PersonA7(...resultInfo1)

console.log(abc.greet())
