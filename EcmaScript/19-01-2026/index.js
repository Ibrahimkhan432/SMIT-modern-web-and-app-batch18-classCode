// var obj = {
//   name: "ali",
//   roll: 30,
//   age: 20,
// };

// var obj2 = {};
// obj2.userName = "ibrahim"
// obj2["userName"] = "ibrahim";
// obj2["fullName"] = "ali";
// console.table(obj2);

// var newObj = new Object()
// var name = "ibrahim";
// var obj3 = {
//   uname: "ali",
//   age: 20,
//   speed: () => {
//     return console.log(`my name is ${this.uname} and my age is ${this.age}`);
//   },
// };
// obj3.speed();

// var fname = "ali"
// var lname = "bhai"

// console.log("my name is" + fname + " " + lname)
// console.log(`jhsdvhjds ${fname} ewfdcwecd`)

// var funct = (a,b)=> a + b //es6
// function sum(a,b){
//  return a + b
// }
// console.log(funct(4,5))

// const obj4 = {
//   name: "ali",
//   age: 20,
// };
// let test = obj4;
// console.log("test=>",test)

// function Student(name, age, roll) {
//   this.name = name;
//   this.age = age;
//   this.roll = roll;
//   this.id = 150;
// }

// var student1 = new Student("ali", 30, 100);
// // var student2 = new Student("ibrahim",19,200)
// console.log(student1);

var obj6 = {
   name:"ali",
   roll:20,
}
obj6.funct = function(){
 return ("inside function " + this.name).toUpperCase()
}
// console.log(obj6.funct())

var result = Object.values(obj6)
console.log("result=>",result)
// console.log("result=>",JSON.stringify(obj6))
