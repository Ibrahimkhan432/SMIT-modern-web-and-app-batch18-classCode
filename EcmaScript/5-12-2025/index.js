// using for loop
//1. table of 5
//2.array [1,2,3,4,5,6,7,8,9,10] print
// 10
// 9
// 8

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = arr.length - 1; i >= 0; i--) {
//   if (arr[i] % 2 == 1) {
//     console.log("i=>", arr[i]);
//   }
// }

// var checkStndt = prompt("enter your name")
// var checkStndtWithCapitalLetter = checkStndt.toLowerCase()
// var stdnts = ["Ali Ahmed", "Ahmed", "Asad", "Bilal", "Ibrahim"];
// for (var i = 0; i < stdnts.length; i++) {
//     if(stdnts[i] == checkStndtWithCapitalLetter){
//         console.log(checkStndtWithCapitalLetter);
//     }
// }

var checkStndt = prompt("enter your name");
var firstChar = checkStndt.slice(0, 1);
pakistan
var firstChar = firstChar.toUpperCase();
// console.log(firstChar);
var RemainingCharacters = checkStndt.slice(1);
var RemainingCharacters = RemainingCharacters.toLowerCase();
var result = firstChar + RemainingCharacters;
console.log(result);
var stdnts = ["Ali Ahmed", "Ahmed", "Asad", "Bilal", "Ibrahim"];
// for (var i = 0; i < stdnts.length; i++) {
//     if(stdnts[i] == checkStndtWithCapitalLetter){
//         console.log(checkStndtWithCapitalLetter);
//     }
// }
