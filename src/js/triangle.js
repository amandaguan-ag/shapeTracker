export default class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    // this.isTriangle = ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) ? "not a triangle" : "this is a triangle";
  }

  checkType() {
    if (
      this.side1 > this.side2 + this.side3 ||
      this.side2 > this.side1 + this.side3 ||
      this.side3 > this.side1 + this.side2
    ) {
      return "not a triangle";
    } else if (
      this.side1 !== this.side2 &&
      this.side1 !== this.side3 &&
      this.side2 !== this.side3
    ) {
      return "scalene triangle";
    } else if (this.side1 === this.side2 && this.side1 === this.side3) {
      return "equilateral triangle";
    } else {
      return "isosceles triangle";
    }
  }

  isBigTriangle() {
    const sum = this.side1 + this.side2 + this.side3;
    /* istanbul ignore else */
    if (sum > 10) {
      return "big";
    }
  }
}
