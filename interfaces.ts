interface IPerson {
  firstname: string;
  lastname: string;
  sayHi: () => string;
}
const person1: IPerson = {
  firstname: 'Jane',
  lastname: 'doe',
  sayHi: (): string => {
    return `Hi ${person1.firstname}`;
  }
};

console.log(person1.sayHi());
