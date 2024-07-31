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

// const Person = (function() {
//   function Person(name) {
//     this.name = name;
//   };
//   Person.prototype.sayHi = function() {
//     console.log('hi ' + this.name);
//   };
//   Person.sayHello = function() {
//     console.log("hello");
//   };
//   return Person;
// }());
// const me = new Person('lee');
// console.log(me.name);
// me.sayHi();
// Person.sayHello();

//정적 메서드
// class Square {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
//   area() {
//     return this.width * this.height;
//   }
//   static areas(width, height) {
//     return width * height;
//   }
// }
// const square = new Square(10, 10);
// console.log(square.area());
// console.log(Square.areas(20, 10));


// const Person = {
//   firstName: "jiwon",
//   lastName: 'Han',

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`
//   },
//   set fullName(name) {
//     [this.firstName, this.lastName] = name.split('');
//   }
// }
// console.log(Person.fullName);

// class Person {
//   #name = '';
//   constructor(name) {
//     this.#name = name
//   };
//   get name() {
//     return this.#name.trim();
//   };
// }
// const me = new Person('Lee');
// console.log(me.name);

class Vehicle {
  constructor(name, wheel) {
    this.name = name
    this.wheel = wheel
  }
}
const myVehicle = new Vehicle('자전거', 2);
console.log(myVehicle);

class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel)
  }
}
const myBicycle = new Bicycle('따릉이', 2);
console.log(myBicycle);

class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel)
    this.license = license
  }
}
const myCar = new Car('벤틀리', 4, true);
console.log(myCar);