class Rectangle {
  constructor (width, height) {
    this.width = width
    this.height = height
  }

  //사각형의 둘레를 구하는 메소드
  getPerimeter() {
    return 2 * (this.width + this.height)
  }

  //사각형 넓이를 구하는 메소드
  getArea() {
    return this.width * this.height
  }
}

const rectangle = new Rectangle(10, 20)
console.log(`사각형의 둘레: ${rectangle.getPerimeter()}`)
console.log(`사각형의 넓이: ${rectangle.getArea()}`)