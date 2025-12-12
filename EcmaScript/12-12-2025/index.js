// var number = 23.3445
// var fixedNumber = number.toFixed(2)
// console.log(fixedNumber + "%")
// console.log(typeof fixedNumber)

// var number2 = 1.55
// var number2 = number2.toString()

// if(number2.charAt(number2.length - 1) == "5"){
//     number2=number2.slice(0,number2.length -1) + "6"
//     console.log("number2",number2)
// }

// --Date and time
// Unix epoch

//new keyword BTS
// var Date ={
//     getFullYear:"2025",
//     age:20
// }
// console.log(Date.getFullYear)

// var date = new Date();
// console.log("year=>", date.getFullYear());
// console.log("date=>", date.getDate());

// var days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// console.log("day=>", days[date.getDay()]);

// asssignemnt(create an array of month and access the current month of that array)
// console.log("Month", date.getMonth());
// console.log("Hours", date.getHours());
// console.log("Minutes", date.getMinutes());
// console.log("Milliseconds", date.getMilliseconds());

// get miilisecond starts from midnight of 1 january 1970
// use of milliseconds
// 1.OTP
// 2.Password creation
// console.log("Time", date.getTime());

// var myDate = new Date(2020,0,35)
// var myDate = new Date("03/25/2015");
// var myDate = new Date("jan, 35, 2025") //invalid (why?) go and search
// console.log("myDate", myDate);
// MM/DD/YYYY

// var futureDate = new Date(2030, 0, 10);
// console.log("futureDate", futureDate);

// var currentDate = new Date();
// console.log("currentDate", currentDate);

// var difference = futureDate - currentDate;
// console.log("difference", difference);
// var secods = difference / (1000 * 60 * 60 * 24 * 30 * 12);
// console.log("secods", secods);

// var newdate = new Date();
// newdate.setFullYear(2025);
// newdate.setDate(13);
// console.log("newdate", newdate);

//  -- Functions

// Date() // method // uncontrolled
// myFunction() //function // controlled
// 1.pure function //
2.// impure function

function myFunction() { // blueprint
    console.log("function called")
}
myFunction()// invoke
// address refrence
function myTime(){
    
    console.log(test)
    var date = new Date()
    var minute = date.getDate()
    var hour = date.getHours()
    var fullTime = minute + ":" + hour
    console.log(test)
    console.log("date",fullTime)
}
myTime()










