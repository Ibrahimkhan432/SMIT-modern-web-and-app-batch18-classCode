console.log("Hello world");
// function innerFunction() {
//   console.log("khan");
// }

// function main(fname,test) {
//   console.log(fname);
//   test();
// }
// main("ali", innerFunction);

// function calculate(a, b, callback) {
//   return callback(a, b);
// }
// function sum(p, q) {
//   return p + q;
// }
// function subtr(p, q) {
//   return p - q;
// }
// function multi(p, q) {
//   return p * q;
// }
// console.log(calculate(5, 10, multi));

// var arr = [1, 2, 3, 4, 5];

// var mapArr = arr.map(function (num) {
//   return num + 3;
// });
// console.log(mapArr);

// var filter = arr.filter(function (num) {
//   return num % 2 == 0;
// });
// console.log(filter)

// var calculate = arr.reduce((acc,current)=>acc + current,0)
// console.log(calculate)

// var findArr = arr.find((num) => num % 2 == 0);
// console.log("find",findArr)

// var some = arr.some((num) => num > 0);
// console.log("find some", some);
// var arr = [1, 2, 3];
// var foreach = arr.forEach((num) => console.log(num * 2));
// console.log("find some", foreach);

// for (let index = 0; index < arr.length; index++) {
//   console.log(arr[index])
// }

// function outer() {
//   var a = 2;
//   console.log(a);
//   function inner() {
//     var b = 3;
//     console.log(b);
//   }
//   inner();
// }
// outer();

var arr1 =[1,2,3]
var arr2 =[2,4,5]

var union = arr1.join(arr2)
console.log(union)
