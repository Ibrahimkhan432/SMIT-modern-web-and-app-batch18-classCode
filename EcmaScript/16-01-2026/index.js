// var arr = ["a", "b", 2, true];
// console.log(arr);

// var studentData = [10, 20, "male","ali"];
// console.log(studentData[3])

//  --- objects
//now every value have key(10 have key called roll(value))
// object (key:value)
// var studentData = '{ "roll": 10, "age": 20, "gender": "male", "name": "ali" }';
// frontendData = JSON.parse(studentData)
// // { "roll": 10, "age": 20, "gender": "male", "name: "ali" }
// console.log(studentData["name"])
// console.log(studentData["age"])

// var student = {
//   name: "ali",
//   age: 10,
//   subjects: ["maths", "science", "english"],
//   bio: function () {
//     console.log("hi i am inside object");
//   },
//   car: {
//     name: "corolla",
//     cc: 760,
//     fuelAverage: { low: 200, high: [300, 400] },
//   },
// //   alert: alert("message from object"),
// };
// console.log(student.bio);
// console.log(student["name"])
// console.log(student.name)
// console.log(student.subjects[1])
// console.log(student.bio)
// console.log(student.car["name"]);
// console.log(student.car.cc);

// var obj = new Object(); //object constructor
// var arr = new Array();
// arr[100]= "a"
// arr[101]="b"
// console.log(arr.length)
// obj.name = "ibrahim";
// obj.age = 20;
// obj.subjects= ["maths", "science", "english"]
// console.table(obj.subjects[2])

// var obj = {
//   name: "ali",
//   age: 30,
// };
// obj.roll = 10;
// obj.bio = undefined;
// console.log(obj);
// delete obj.name
// console.log("sub" in obj); //boolean

// for (let keys in obj) {
//   console.log("keys=>", keys, "value=>" ,obj[keys]);
// }

var obj = {
  name: "ali",
  age: 20,
  funct: ()=> {
    console.log("value=>", this.name);
  },
};
obj.funct();
