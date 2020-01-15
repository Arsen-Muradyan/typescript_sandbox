namespace FunMath {
  export function pow(base: number, exp: number): number {
    for (var i = 1; i < exp; i++) {
      base *= base;
    }
    return base;
  }
}
