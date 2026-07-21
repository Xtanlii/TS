//strict null check
// let title: string = "intro"
// title = undefined

let subtitle: string | undefined = undefined;

function log(msg: string): void {
  console.log(msg);
}

function  fail(msg:string): never{
  throw new Error(msg)
}

//Do not use  any -> try to ignore as much as possible

const valueAny : any = JSON.parse('{"x": 1}')