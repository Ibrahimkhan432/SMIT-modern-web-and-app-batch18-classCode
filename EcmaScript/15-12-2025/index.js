//  firstFuction() //independent mode
//  Date() //Strick mode

//  Es5
//  function firstFuction(){
//     console.log("inside function")
//     console.log("inside function")
//  }
// firstFuction()

// Es6
// Arrow function
// firstFuction = ()=> console.log("inside func")
// firstFuction()

// function func(lName, fName) {
//   //Parameter
//   console.log(fName, lName);
// }
// var fName = "ibrahim";
// func("ibrahim", "khan"); //Argument

// function sum(b, a) {
//   console.log("sum=>", b + a);
//   console.log("a", a);
//   console.log("b", b);
// }
// sum(3, 2);

// function add(a, b = 2) {//default parameter
//   console.log(a + b);
// }
// add(6,3);

// var number = 234
// function test(){
//     alert(number)
// }
// test()

// function paragraph(name ,age,roll){
//     console.log(name,age,roll)
// }
// var name = "asad"
// var roll = 10
// paragraph(name,roll,123)

// function sum(a, b) {
//   return a + b;
// }
// var result = sum(2, 3);
// console.log(result);

// var arrowFunction = (x, y) => {
//   return x * y;
// };

// console.log(arrowFunction(2, 4));
// var Lname = "global variable"
// function test(myName){
//     var myName = "local variable"
//     console.log(Lname,myName)
// }
// test()

// var name = "name changed";
// function funct() {
//   var name = "first name";
//   console.log(name);
// }
// funct();

// console.log(uname) //TDZ temporal dead zone
// const uname = "ali"

// if,for (block scope)
// var uname = "ali";
// if (1) { 
//     console.log(uname)
// }
