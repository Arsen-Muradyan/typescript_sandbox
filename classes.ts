class Shape {
  Area: number;
  constructor(a: number) {
    this.Area = a;
  }
  static isSquare(width: number, height: number): boolean {
    if (width == height) {
      return true;
    }
    return false;
  }
  disp(): void {
    console.log('Area of the shape: ' + this.Area);
  }
}
class Circle extends Shape {
  disp(): void {
    console.log('Area of the circle: ' + this.Area);
  }
}
var obj: Shape = new Circle(200);
obj.disp();
console.log(Shape.isSquare(200, 200.1));
