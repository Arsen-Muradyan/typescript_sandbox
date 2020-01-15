function display_data(data: {
  name: string;
  id: number;
  mail_id?: string;
}): string {
  if (typeof data == 'object') {
    return `Your id is\`\` ${data.id} \nYour name is ${data.name} \n${
      typeof data.mail_id != 'undefined'
        ? 'Your mail is ' + data.mail_id
        : "You don't have mail"
    }`;
  }
}
console.log(display_data({ id: 1, name: 'Jane', mail_id: 'jane@mail.com' }));
// Rest Params
function min(...nums: number[]): number {
  var min = nums[0];
  for (var i = 0; i < nums.length; i++) {
    if (min > nums[i]) {
      min = nums[i];
    }
  }
  return min;
}
console.log(min(12, 32, 12, 15, 123));
// Lambda
var double = (num: number) => num * 2;
console.log(double(12));
// Void Function
function hello(user: string): void {
  console.log(`Hello ${user}`);
}
hello('John');
