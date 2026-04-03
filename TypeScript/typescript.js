// Primitive types
// string,number,boolean
//  -- explicit type
var sname = "ibrahim";
var sage = 12;
var isactive = true;
// isactive ="kha" error
// implicit type or inference
// var add = 2
// add = 3
// var mynam = "ibrahim"
// myname = 23
//  special type (any)
var myname = "ibrahim";
myname = 23;
var bikename = "superpower";
var bike = {
    bname: "uniq",
    bmodel: 2024,
    bactivce: true,
    bnumber: 1234
};
console.log("bikeobj=>", bike);
//  -- functions
// function add(a:number,b:number){
//     console.log(a + b)
// }
// add(2,3)
function myfunc(a, b) {
   return a + b;
    console.log("hi");
}
console.log(myfunc(2, 3));
// myfunc(343)
