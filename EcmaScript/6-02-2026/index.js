console.log("Hello world");
// IIFE (Immediately Invoked Function Expression)
// let outside = "outside"
// function test(){
//     // let uname = "khan";
//     let outside = "side"
//     console.log(outside);
// }
// test();
// (function(){
//     let uname = "ibrahim";
//     console.log(uname);
// })();

// (function() {
//     console.log("This is a test function");
// })();

// (function(myname,cast){
//     console.log(myname,cast)
// })('ali','awan');

// let result = (function(uname,uage){
//   return uname + uage
// // console.log(uname,uage)
// })('ali',30)

// let result = (uname,uage)=> uname + uage

// console.log(result)

// function add(a,b){
// return a + b
// }
// const add=(a,b)=>{return a + b}
// console.log(add(2,3))

// var uname = "khan"
// const obj ={
//     uname:"ali",
//     uage:20,
//     data:()=>{
//         console.log(this.uname)
//     }
// }
// obj.data()

// (function test(){
//     console.log("inside iife")
// })()

// function add(num) {
//   if (num <= 1) return 1;
//   return num * add(num - 1);
// }
// console.log(add(5)); //9,12,15,24

// let result = (function factorial(n) {
//   if (n <= 1) return 1;
//   return n * factorial(n - 1);
// })(5);
// console.log(result)

// function mult(num) {
//   if(num>=5)  return 5
//   return num * mult(num+1);
// }
// console.log(mult(3));

function outer() {
  let counter = 0;
  return function inner() {
    counter++
    console.log(counter)
   return counter;
  }
}
const result = outer();
result()
result()
result()
result()

