// befor OOP
// code hard to read
// hard to reuseable
// extend  issues
// hard to maintain

// es5 (classes - blueprint)
// class students (name,age,sub,class,id,roll)
// Object
// student1 (age,id)
// OOP = classes + object(properties or data ,method)

// classes + object = OOP
// javascript ->multi paradigm , imperative(;),event-driven
// paradigm -> way to code

// OOP -> object oriented programming
// 4 pillars
// 1.Abstraction
// 2.Inherit
// 3.encapsulation
// 4.polymorphism

// functional base
// function data(){
//     console.log("inside func")
// }
// data()

// class base
// class Students {
//   constructor(sname, sage, sclass, sid, sroll) {
//     ((this.sname = sname),
//       (this.sage = sage),
//       (this.sclass = sclass),
//       (this.sid = sid),
//       (this.sroll = sroll));
//   }
//   studentData() {
//     console.log(`std name is ${this.sname} and age is ${this.sage} `);
//   }
// }
// object (instance)
// const student1 = new Students("ali", 20);
// const student2 = new Students("bilal", 30);
// student1.studentData();
// student2.studentData();

// 1. --Abstraction
// abstraction is a specific way to hide the complex logic in code (class or object ) and show only user useable values.
// we can use abstraction through - function , class , closures

// function area(length){
//     return 5 * length  //abstraction
// }
// console.log(area(10))

// function pi(radius){
//     return Math.PI * radius *radius  //abstraction
// }
// console.log(area(5))

// class Car{
//     constructor(model){
//         this.model=model
//     }
// details(){
// console.log("car model is " + this.model)
//     return this.model
// }
// }
// const mycar = new Car("byd")
// console.log(mycar.details())

// function counter(){
// var count = 0
//  return{
//  inc:function(){
//     count++
//     console.log("count",count)
// }
// }
// }
// const c1 = counter()
// c1.inc()
// c1.inc()

//  -- Inheritence
// parent class ->superclass or base classs
// child class ->subclass or derived class

// const obj = {
//   name: "ali",
//   age: 20,
// };
// Object.prototype.details = function main() {
// console.log(`my name is ${this.name}`)
// };
// obj.details()

// function studentData(name){
// this.name = name
// }
// studentData.prototype.details= function(name){
//     console.log(`student name is ${this.name}`)
// }
// studentData.details("ali")
// const mydata =new studentData("ali")
// mydata.details()

// es6 class
class ParentClass {
  constructor(name) {
    this.name = name;
  }
  details() {
    console.log(`parent class name is ${this.name}`);
  }
}
class ChildClass extends ParentClass {
  constructor(name) {
    super(name);
  }
}
const o = new ChildClass("bilal");
o.details();

// factory function
// return new object
function MainFunction(name, age) {
  return {
    name: name,
    age: age,
    details: function () {
      console.log(`name is ${this.name} and age is ${this.age}`);
    },
  };
}
const function1 = new MainFunction("ali", 30);
const function2 = new MainFunction("bilal", 20);
function1.details();
function2.details();

//  -- Encapsulation
// 1.closures
// use private variables -> for security
class MoneyChecker {
  #money;
  constructor(cardNum, cardMoney) {
    ((this.cardNum = cardNum), (this.#money = cardMoney));
  }
  sendMoney(cardMoney) {
    this.#money += cardMoney;
  }
  showMoney() {
    console.log(`available money is ${this.#money}`);
  }
}
const moneyTransfer = new MoneyChecker(12345, 5000);
moneyTransfer.sendMoney(300);
moneyTransfer.showMoney();
console.log(MoneyChecker.showMoney); //undefined due to security encapsulate

//  -- Polymorphism
// poly means many
// morphism (forms or methods)
// manyforms opr many methods

// parent(details(im main))
// chils(details(im child))

// 1.overriding
class MainClass {
    details(){
        console.log("im in main class")
    }
}
class SubClass1 extends MainClass{
    details(){
        console.log("im in sub class")
    }
}
class SubClass2 extends MainClass{
    details(){
        console.log("im in sub class2")
    }
}
const obj1 = new SubClass1()
const obj2 = new SubClass2()
const obj3 = new MainClass()
obj1.details()
obj2.details()
obj3.details()

// 2.overloading (compile time)

class Sum{
    add(num1,num2){
        if(num2 === undefined){
            return num1 + num1
        }
         return num1 + num2
    }
}
const addNum = new Sum()
console.log(addNum.add(2,3))
