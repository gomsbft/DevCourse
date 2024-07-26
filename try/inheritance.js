"use strict";

//사각형 클래스
class Rectangle {
  constructor (width, height) {
    this.width = width;
    this.height = height;
  }

  //사각형의 둘레 구하는 메소드
  getPerimeter() {
    return 2 * (this.width + this.height)
  }

  //사각형의 넓이 구하는 메소드
  getArea() {
    return this.width * this.height
  }
}

//정사각형 클래스
class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }
}

const square = new Square(10, 20);
console.log(`정사각형의 둘레: ${Square.getPerimeter()}`);
console.log(`정사각형의 넓이: ${Square.getArea()}`);