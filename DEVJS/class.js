//생성자 함수

// function Point(x, y) {
//   this.x = x;
//   this.y = y;
// }

// Point.prototype = {
//   toString: function() {
//     return `(${this.x}, ${this.y})`;
//   }
// }

// let pt1 = new Point(10, 20);
// let pt2 = new Point(100, 200);
// console.log(pt1.toString());
// console.log(pt2.toString());
// console.log(pt1 instanceof Point);

// function Circle(radius) {
//   this.radius = radius;
// }
// Circle.prototype.getArea = function() {
//   return Math.PI * this.radius ** 2;
// }
// const circle1 = new Circle(1);
// const circle2 = new Circle(2);
// console.log(circle1.getArea === circle2.getArea);

//class

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     console.log(`Hi ${this.name}`);
//   }
//   static sayHello() {
//     console.log('hello');
//   }
// }
// const me = new Person('lee');
// me.sayHi();
// Person.sayHello();

const Person = (function() {
  function Person(name) {
    this.name = name;
  };
  Person.prototype.sayHi = function() {
    console.log('hi ' + this.name);
  };
  Person.sayHello = function() {
    console.log("hello");
  };
  return Person;
}());
const me = new Person('lee');
console.log(me.name);
me.sayHi();
Person.sayHello();