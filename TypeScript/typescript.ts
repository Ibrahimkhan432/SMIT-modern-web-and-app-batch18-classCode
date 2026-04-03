// Primitive types
// string,number,boolean

//  -- explicit type
var sname:string = "ibrahim"
var sage:number=12
var isactive:boolean = true 
// isactive ="kha" error

// implicit type or inference
// var add = 2
// add = 3
// var mynam = "ibrahim"
// myname = 23

//  special type (any)
var myname:any = "ibrahim"
myname = 23

// typescript Types
// tuple - arr
// enum - obj

// tuple (order is compulsory)
// var arr:[number,string,boolean] = [1,"ali",true,]
// console.log(arr)

// var arr: readonly [string,number]  = ["ali",30]
// arr.push("khan")
// console.log(arr)

//   -enum set specific keys in constant
// enum(numeric,string)
// const obj = {
//     sname :"ali",
//     sage:30
// }
// console.log(obj)
// numeric
// enum obj {
//     sname=100 ,
//     sage=203,
//     sroll=304
// }
// string
// enum obj2 {
//     car="byd" ,
//     sage="age",
//     sroll="scroll"
// }
// console.log("obj2=>",obj2.car)

//  -- object 
// type alias
type bname = string
type bmodel = number
type bactivce = boolean

const bikename:bname = "superpower"


// interface
interface bikeType {
     bname:string,
    bmodel:number,
    bactivce:boolean,
    bnumber:number
}
const bike:bikeType ={
    bname:"uniq",
    bmodel:2024,
    bactivce:true,
    bnumber:1234
}
console.log("bikeobj=>",bike)



//  -- functions
// function add(a:number,b:number){
//     console.log(a + b)
// }
// add(2,3)

// function myfunc(a,b):void{
//  a + b
//  console.log("hi")
// }
// console.log(myfunc(2,3))
// myfunc(343)

