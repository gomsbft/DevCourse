// const add = function(a: number, b: number): number {
//   return a + b
// }

// function add2(a: number, b: number): number {
//   return a + b
// }

// const result1 = add2(1, 2);

// const str = "hello";
// const num = 123;
// const bool = false;
// const n = null;
// const u = undefined;
// const sym = Symbol('sym');
// const obj = {hello: "world"}

// let str = "hello";
// let num = 123;
// let bool = false;
// let n = null;
// let u = undefined;
// let sym = Symbol('sym');
// let obj = {hello: "world"};

// let str: "hello" = "hello"
// str = "world"

// const obj = {name: "kim"};
// const arr = [1, 2, "three"];

// obj.name = "lee"
// arr.push(4);

// const arr1: string[] = ["1", "2", "3"];
// const arr2: Array<number> = [1, 2, 3];

// const arr3 = [1, "2", 3];
// const arr4 = [];

// const tuple: readonly [number, boolean, string] = [3, true, "hello"];
// tuple[0] = 1;
// tuple[2] = "world";

// tuple.push("hello");

// console.log(tuple);

// const strNumBools: [string, number, ...boolean[]] = ["hello", 1, false, true, false];

// const[a, ...rest] = ["hello", 1, 2, 3];
// const[b, ...rest2]: [string, ...number[]] = ["hello", 1, 2, 3];

// function add(x: number, y: number) {
//   return x + y
// }

// const str1: String = "hello";
// const str2: string = str1;

// function add(x: number, y: number) {
//   return x + y
// }
// const result1: add(1,2) = add(1, 2);
// const result2: typeof add(1, 2) = add(1, 2);
// const add2: typeof add = (x: number, y: number) => x + y

// let strNum: string | number = "hello";
// strNum = 1;
// const arr = [1, "2", 3];

// function unionType(value: string | number): number {
//   if(typeof value === "string") {
//     return parseInt(value)
//   }
//   return value;
// }
// unionType(1);
// unionType("1");

// const arr: string[] = [];

// const arr = [];
// arr.push("1");
// arr;
// arr.push(3);
// arr;

// const a: any = "123";

// const any1 = a + 1;
// const any2 = a - 1;
// const any3 = a * 1;
// const any4 = a + "1";

// fetch("url").then< {data: string} >((response) => {
//   return response.json()
// }).then((result) => {

// })
// const result: {hello: string} = JSON.parse("{'hello': 'json'}")

// try{

// }catch(e) {
//   const error = e as Error;
//   console.log(error.message);
// }

// let name1: string = "kim";

// function add(a: number, b: number) {
//   return a+ b;
// }

// function isEven(num: number): boolean {
//   return num % 2 === 0;
// }

// const str: {} = "hello";
// const num: {} = 123;
// const bool: {} = true;
// const obj: {} = {name: "kim"};
// const n: {} = null;
// const u: {} = undefined;

// function func1() {
//   throw new Error("error");
// }

// const result1 = func1();
// const fun2 = () => {
//   throw new Error("error")
// }

// const result2 = func2();


// function infinity(): never {
//   while(true) {
//     console.log("으음")
//   }
// }

// type Animal = {
//   name: string;
// }
// interface Bear extends Animal {
//   honey: boolean;
// }

// interface Tiger extends Animal {
//   stripe: boolean;
// }

// interface T

// type honey = BearTiger['honey'];
// type stripe = BearTiger['stripe'];

// const bear1: Bear = {
//   name: 'bear',
//   honey: true
// }

// interface Merge {
//   one: string;
//   two: string;
// }

// interface Merge2 extends Merge {
//   one: "h" | "w";
//   two: "123"
// }

//문제 1
//Name이라는 타입 별칭 문자열 타입
//firstName, lastName 변수 만들어라
//나의 풀이

// type Name = {
//   firstName: string,
//   lastName: string
// }

// interface Name2 extends Name {
//   firstName: "jiwon",
//   lastName: "han"
// }

//정답
type Name = string;
const firstName: Name = "jiwon"
const lastName: Name = "han"


//문제 2
//type MathO 타입 별칭 만들어라
//두개의 숫자를 받아 숫자를 반환하는 함수 타입 정의
//타입별칭을 사용하여 add 함수와 multiply 함수 선언

// 나의 풀이
// type MathO = {
//   one: number,
//   two: number
// }

//정답
type MathO = (a: number, b: number) => number;

const add:MathO = (x, y) => x + y;
const multiply:MathO = (x, y) => x * y;


//문제3
//Shape라는 인터페이스 정의 color(문자열) 속성을 가짐
//Shape를 확장하여 Circle 인터페이스 정의 radius(숫자) 속성 추가
// 이 인터페이스를 사용하여 circle 객체 선언, 초기화

// //나의 풀이
// interface Shape {
//   color: string
// }

// interface Circle extends Shape {
//   radius:number
// }

// type color = Circle['color'];
// type radius = Circle['radius'];

//정답
interface Shape {
  color: string;
}

interface Circle extends Shape {
  radius: number;
}

const circle: Circle = {
  color: "red",
  radius: 2
}

//문제 4
//Animal이라는 인터페이스 정의 name과 age 속성가짐
//확장하여 Dog 인터페이스 정의 breed 속성 추가
// dog 객체 선언 초기화

//나의풀이
// interface Animal {
//   name: string,
//   age: number
// }

// interface Dog extends Animal {
//   breed: string
// }

// const dog: Dog = {
//   name: "mini",
//   age: 3,
//   breed: "minipin"
// }

//정답
interface Animal {
  name: string,
  age: number
}

interface Dog extends Animal {
  breed: string
}

const dog: Dog = {
  name: "B",
  age: 2,
  breed: "G"  
}

//끝

//네임스페이스

// namespace Exam {
//   export interface Inner{
//     test: string;
//   }
//   export type test2 = number;
// }

// const ex1: Exam.Inner = {
//   test: "hello"
// }

// const ex2: Exam.test2 = 123


// ? / 리드온리

// interface Exam {
//   hello: string,
//   world: number,
//   readonly check: boolean,
//   multiply?: symbol;
// }

// const example: Exam = {
//   hello: 'hi',
//   world: 123,
//   check: true,
// }

// example.check = false;

//인덱스 접근 타입
// const obj = {
//   hello: 'world',
//   name: 'kim',
//   age: 28
// }

// type Keys = keyof typeof obj;
// type Value = typeof obj[Keys];


// type Arr = [1, 2, 3];
// type First = Arr[0];
// type length = Arr['length'];

// type Arr2 = (string | boolean) [];
// type El = Arr2[number]

//매핑된 객체 타입
// type HelloHi = {
//   [key in 'hello' | 'hi']: string;
// }

// type Tuple = [1, 2, 3];
// type CopyTuple = {
//   [key in keyof Tuple]: Tuple[key];
// }
// const copyTuple: CopyTuple = [1, 2, 3]

//집합
// type A = string | boolean;
// type B = boolean | number;
// type C = A & B;
// type F = unknown | {};
// type G = never & {};
// type H = {a: 'b'} & number;
// type I = null & {a: 'b'};
// type J = {} & string;

//객체간 대입

// let a:readonly string[] = ['hi', 'readonly'];
// let b: string[] = ['hi', 'nomal'];

// a = b;
// b = a;

// type Optional = {
//   a?: string;
//   b?: string;
// }

// type Essential = {
//   a: string;
//   b: string;
// }

//구조적 타이핑

// interface Money {
//   _type?: 'money'
//   amount: number,
//   unit: string
// }

// interface Liter {
//   _type?: 'liter'
//   amount: number,
//   unit: string
// }

// const liter: Liter = {amount: 1, unit: "liter"};
// const circle1: Money = liter;

// 문제 5
//Product 인터페이스 정의 , name 문자열과 price 숫자 속성을가짐
//description 문자열 은 선택적 속성으로 정의 product1 과 product2 객체 선언 및 초기화

//나의 풀이
interface Product {
  name: string,
  price: number,
  dexcription?: string
}

const product1:Product = {
  name: "mini",
  price: 120
}

const product2:Product = {
  name: 'dongdong',
  price: 80,
  dexcription: "no"
}

//정답
//나의 풀이와 같음

//문제 6
//Dictionary라는 인터페이스 정의, 임의의 키는 문자열 값은 문자열인 속성을 가질 수 있도록 인덱스 시그니처 포함
//dictionary 객체 선언 임의의 키-값 쌍을 추가

//나의풀이
// interface Dictionary {
//   [key in 'hello' | 'number']: string
// }

//정답
// interface Dictionary {
//   [key: string]: string
// }
// const dictionary:Dictionary = {a: 'b'};
// dictionary['book'] = 'abc'

//제네릭

// interface Person<T, A> {
//   type: 'human',
//   race: 'yellow',
//   name: T,
//   age: A
// }

// interface Kim extends Person<'kim', 22>{}
// interface Lee extends Person<'Lee', 30>{}

// interface Array<T> {
//   [key: number]: T,
//   length: number
// }

// const numbers: Array<number> = [1, 2, 3, 4];



// interface PersonI<N, A> {
//   type: 'human',
//   race: 'yellow',
//   name: N,
//   age: A
// }

// type PersonT<N, A> = {
//   type: 'human',
//   race: 'yellow',
//   name: N,
//   age: A
// }

// type Kim = PersonI<'kim', 30>
// interface Lee extends PersonT<'Lee', 33>{}



// class Person<N, A>{
//   name: N;
//   age: A;
//   constructor(name: N, age: A) {
//     this.name = name;
//     this.age = age;
//   }
//   method<B>(param: B) {

//   }
// }

// interface Person<N = string, A = number> {
//   type: 'human',
//   race: 'yellow',
//   name: N,
//   age: A
// }
// type Person1 = Person;
// type Person2 = Person<number>;
// type Person3 = Person<number, boolean>;

// const personE = <N, A = unknown>(name: N, age: A): Person<N, A> => ({
//   type: 'human',
//   race: 'yellow',
//   name,
//   age
// })

// const names = personE('kim', 30);

// function values<T>(initial: T[]) {
//   return {
//     hasValue(value: T) {
//       return initial.includes(value)
//     }
//   }
// }
// const savedValues = values(['a', 'b', 'c']);
// savedValues.hasValue("x");

//컨디셔널 타입
// type A1 = string;
// type B1 = A1 extends string ? number : boolean;

// type A2 = number;
// type B2 = A2 extends string ? number : boolean;

// interface X {
//   x: number;
// }

// interface XY {
//   x: number,
//   y: number
// }

// interface YX extends X {
//   y: number;
// }

// type A = XY extends X  ? string : number;
// type B = YX extends X ? string : number;

// type Result = [1] extends number[] ? true : false

// type Start = string | number;
// type New = Start extends string | number ? Start[] : never;
// let n: New = ['hi'];
// n = [123];

// type New<A> = A extends string | number ? string[] : never;
// type Never = New<number>;
// type Arr = New<string>

