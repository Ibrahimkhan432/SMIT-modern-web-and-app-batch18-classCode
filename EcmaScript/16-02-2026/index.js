// function main(mynewfunction) {
//   console.log("hi inside main");
//   mynewfunction()
// }
// function mynewfunction() {
//   console.log("callback function");
// }
// main(mynewfunction);

// function calculate(num1, num2) {
//   let add = num1 + num2
//   addfunction(add)
// }
// calculate(2,3);
// function addfunction(add){
//     console.log(add)
// }

// function main(num1, num2, callback) {
//   return callback(num1, num2);
// }
// function add(num1, num2) {
//   return num1 + num2;
// }
// function sub(num1, num2) {
//   return num1 - num2;
// }

// console.log(main(4, 5, sub));

//  =-- high order functions

// var arr = [1, 2, 3, 4, 5, 6, 7];
// var newArr = arr.map(callback)
// function callback(value){
//     return value + 2
// }
// var newArr = arr.map(function(value){
//     return value + 2
// })
// var newArr = arr.map((value) => value + 2);
// console.log(newArr);

// var arr = [1, 2, 3, 4, 5, 6, 7]; //iteration

// arr.forEach(callback)
// function callback(value){
//     console.log(value + 2)
// }

// callback Hell (nexted callback) hard to read , difficult to modify
// function funct1(callback){
//     callback()
//     console.log("function 1")
// }
// function funct2(callback){
//     callback()
//       console.log("function 2")
// }
// function funct3(callback){
//     callback()
//       console.log("function 3")
// }
// funct1(()=>{
//     funct2(()=>{
//         funct3(()=>{
//             console.log("functions running")
//         })
//     })
// })

// Promises

// var value = new Promise(resolve , reject)

// console.log("first console")
// setTimeout(()=>{
// conole.log("second console")
// })
// console.log("third console")
// setTimeout
// Promise //light weigth
// console

// let value = new Promise((resolve,reject)=>{

// })

// value
// .then(funct1)
// .then(funct2)
// .then(funct3)

// function main(callback){
//     callback()
//     if(num==0){

//     }
//     else{

//     }
// }

// const value = new Promise((resolve, reject) => {
//     if(num===0){
//         resolve("dcfjhsdj")
//     }
//     else{
//         reject("cdjscndjs")
//     }
// })
// value.then(resolve).then(reject)

// callback. // simple api fetch
// promises // when code nested or complex
// async / await

// async function test(){
//    await code ...
// }

// function fetchData(handleData) {
//   fetch("https://dummyjson.com/products")
//     .then((res) => res.json())
//     .then((data) => handleData(data.products));
// }
// function handleData(data) {
//   console.log("data=>", data);
//   console.log("data=>", data[0].title);
//   console.log("data=>", data[0].description);
// }

// fetchData(handleData);

// var arr = [1, 2, 3, 4, 5];
// // add to cart 
// var reduce = arr.reduce((acc, total) => acc + total,5);
// console.log(reduce)

// var arr = [1, 2, 3, 4, 5];
//  var reduce = arr.find((num) => console.log(num == 3));


