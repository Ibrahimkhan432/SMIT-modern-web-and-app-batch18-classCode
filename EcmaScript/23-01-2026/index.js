// var openPage = window.open()

// var content = "<h1>Capuchin monkey</h1><img src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYHDPoyX1xSBOzbzFTh7SJ69YPMxX8MD84Q&s'><p>The word capuchin derives from agroup of friars<br>named the Order of Friars Minor Capuchin who wear<br>brownrobes with large hoods covering their heads.</p>"

// openPage.document.writeln(content)

// window.open('about.html','win1' ,"width=420,height=380")

// function checkForPopBlocker() {
//   var testPop = window.open("about.html", "win2", "width=100,height=100");
//   if (testPop === null) {
//     alert("Please disable your popup blocker.");
//   }
// }

// function checkForLastName() {
//   if (document.getElementById("lastNameField").value.length === 0) {
//     alert("Please enter your last name");
//     document.getElementById("lastNameField").focus();
//     document.getElementById("lastNameField").style.background = "yellow";
//     return false;
//   }
// }

// function outer(fname, lname ,callBack) { //function declaration
//   console.log(fname, lname);
//   callBack()
// }
// var funct = function outer() { //function expression
//    console.log(fname, lname);

// let fname = "ibrahim"
//    let lname = "khan"
// };
// funct()

// function callbackFunnction(){
//    return console.log("callback function")
// }
// outer("ibrahim", "khan",callbackFunnction); //high order function

function main(name, callback) {
  console.log(`hi ${name}`);
  callback();
}
function highOFunction() {
  console.log("khan");
}
main("ibrahim", highOFunction);

var arr = [1, 2, 3, 4, 5];

// var mapFunct = arr.map(function(num){
//  return num * 3
// })
 var mapFunct = arr.map((num)=> num * num)
 console.log(mapFunct)



