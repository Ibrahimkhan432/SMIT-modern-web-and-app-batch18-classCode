// const obj = new Object();
// const obj2 = {}; //object literals
// const obj3 = Object.create(null)
// obj3.userName="ali"

// var address = prompt("enter address");
// var country = prompt("enter country country");
// const obj3 = {
//   bio: ["ali", "khan", 20],
//   address: { city: "karachi", country: "pakistan", state: "sindh" },
// };
// console.log(obj3[data][country])
// console.log(obj3.address.country);
// console.log(obj3.bio["1"])

// var firstKey = prompt("enter first key");
// var secondKey = prompt("enter second key");
// const obj3 = {
//   bio: ["ali", "khan", 20],
//   address: {
//     city: "karachi",
//     country: "pakistan",
//     state: { smallState: "shahra e faisal", largeState: "paf" },
//   },
// };
// console.log(obj3[firstKey][secondKey]);
// console.log(obj3.address.state.largeState);
// console.log(obj3["address"]["state"]["smallState"]);

// "abc"
// console.log(abc)

// var person = {
//    name:"ali",
//    age:20
// }

// var newPerson = person
// // newPerson.name="asad"
// newPerson["name"] = "asad 2"
// console.log(newPerson)
// console.log(person)

// var x = 30
// var y = x
// y = 20
// console.log(x)
// console.log(y)

   // -- constructor
// function Date(getFullYear,getMonth){}
// var date = new Date.get()

function StudentData(sname,sroll){
   this.sname = sname,
   this.sroll = sroll
}
// bilalData.sid = 10 //valid
StudentData.prototype.sid = 10
var bilalData = new StudentData("bilal",100)
console.log("aliData "+ bilalData.sname + bilalData.sid)


// map
// callback
// hof
// filter
// reduce