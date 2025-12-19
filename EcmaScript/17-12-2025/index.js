// ++a pre increment
// a++ post increment

// var num = 2;

// var num2 = num + 1;
// var num2 = num++; //shortcut

// // var num2 = --num;

// console.log(num2)
// console.log(num)

var a = 1;
var b = 1;
//  2 + 1 + 2 +  2  3
// var total = ++a + b++ + b + a++ + a
// var total = ++b + ++b + ++a + ++a
// var total = a++ + ++b + a + b++ + a + b
// console.log(total) //10, 8 , 9 , 6

// var num = (1 * 2) * (3 + 2);
// console.log(num);

// var mname = "ibrahim"

// var lname = prompt("enter your lname")

// alert( "Hi " +mname + lname)
// console.log("hi"  + " " + mname + " " + lname)

// console.log(`Hi ${mname} ${lname} how are you`)
// template literals ` `

// var age = prompt("enter your age"30)
// console.log(age)
// study assignment (why give null when cancel)
// prompt("enter")
// var mname = prompt("enter your name");
// var age = +prompt("enter your age");
// var marks = Number(prompt("enter your marks"));
// if (mname == "ali" && age !== 30 || age < 30 && marks <=100) {
//   console.log("correct", mname , age , marks);
// } else if (mname == "bilal") {
//   console.log("correct", mname);
// } else {
//   console.log("incorrect");
// }

//   -- nested if
// diff b/w. if else if and nested if 
// if else  (if filed then else will also check)
// nested if( if failed then next if will not be check)
// means the second if will check after first if true
// var mname = "li"
// var age = 10

// if(mname=="ali"){
//     if(age==10)
//     console.log("true name and age")
// }

//  --Array 

// var arr = [ , ,20,"ali",100]
// console.table(arr)
// console.log(arr[2])

var arr =[]

arr[200] = "ali" //length 201 (200 index)
arr[150] = "asad" // 151
console.log(arr[arr.length-1])

console.log(arr[arr.length-51])
console.log(arr.length)