namespace Calculator {
  export class Calc {
    public doSum(limits: number): number {
      var sum = 0;
      for (var i = 0; i <= limits; i++) {
        sum += i;
      }
      return sum;
    }
  }
}
