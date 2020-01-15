// String Types
console.log('***String Type***');
var firstname: string = 'Arsen';
var lastname: string = 'Muradyan';
var fullname: string = `${firstname} ${lastname}`;
console.log(fullname);
// Number Type
console.log('***Number Type***');
var a: number = 12;
var b: number = 24;
var res: number = a + b;
console.log(res);
// Boolean Type
console.log('***Boolean Type***');
var haveCriminalLife: boolean = false;
var onBankBlackList: boolean = false;
var isLawAbdidingCitizen: boolean = !haveCriminalLife && !onBankBlackList;
console.log(isLawAbdidingCitizen);
// Arrays With Union Operator
console.log('***Array Type***');
let numbers: number[] | Array<number> = [1, 3, 2];
var max: number = numbers[0];
for (var i = 0; i < numbers.length; i++) {
  if (max < numbers[i]) {
    max = numbers[i];
  }
}
console.log(max);
// Tuples
console.log('***Tuple Type***');
let tuple: [string, number, boolean];
tuple = ['hello', 1, false];
console.log(tuple[0].substring(0, 3));
// Enums
console.log('***Enum Type***');
enum Color {
  Red = 1,
  Blue,
  Green
}
let r: Color = Color.Red;
console.log(r);

// Any
console.log('***Any Type***');
let notSure: any = 4;
notSure = 'String';
notSure = false;
console.log(notSure);
// Void
console.log('***Void Type***');
function voidExample(): void {
  console.log('Example Typescript void function');
}
voidExample();
// Never
const reportError = (): never => {
  while (true) {}
};
// reportError();
