// // var arr = ["ali", 30, true];
// // console.log(arr)
// // console.log(arr[1])

// // arr[3] = "asad"
// // arr.push("last value")
// // arr.pop()
// // arr.pop()
// // push(last in) pop (last out)
// // LIFO (last in last out)
// // FIFO (first in first out)
// // arr.unshift("first in")
// // arr.shift()
// // console.log(arr)

// // var arr = []
// // arr[200] = "ali"
// // console.log(arr)
// // console.log(arr.length)

// var arr = ["a", " c", "d", 6, 7,4,5];
// // var modifiedeArr = arr.shift()
// // console.log(modifiedeArr)
// // arr.unshift("c","d")
// // arr.shift()
// // var arr2 = arr.splice(1, 2,"ali"); // 1 is index , 2 is elemenmt(quantity start from  index 1)
// // arr.splice(1, 2, " c", "d");
// var newArr = arr.slice(1,3) // 3-1 = 2
// console.log("newArr",newArr);
// console.log("newArr",newArr)
// console.log("purana arr",arr)

// `for loops

// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
//  var cityToCheck = "Santa Fe"

//  if (cityToCheck === cleanestCities[0]) {
//  alert("It's one of the cleanest cities first");
//  }
//  else if (cityToCheck === cleanestCities[1]) {
//  alert("It's one of the cleanest cities second");
//  }
//  else if (cityToCheck === cleanestCities[2]) {
//  alert("It's one of the cleanest cities");
//  }
// else if (cityToCheck === cleanestCities[3]) {
// alert("It's one of the cleanest cities");
// }
// else if (cityToCheck === cleanestCities[4]) {
// alert("It's one of the cleanest cities");
// }
// else {
// alert("It's not on the list");
// }

// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
//  var cityToCheck = "Santa Fe"

// for (let i = 0; i < cleanestCities.length; i++) {
//   if(cleanestCities[i] === cityToCheck){
//     console.log("matched success" , i)
//   }else{
//     console.log("not matched")
//   }
// }

// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
//  var cityToCheck = "Santa Fe"

// var matchFound = false;

// for (var i = 0; i <= 4; i++){
//     if (cityToCheck === cleanestCities[i]) {

//         matchFound = true;
//         alert("It's one of the cleanest cities");
//         break;
//     }
// }

//  if (!matchFound) {
//  alert("It's not on the list");
//  }

//  console.log(matchFound,"matchFound")

// for (var i = 1; i <=5; i++) { //outer loop
//     for (var j= 2; 2 <=5; j++){
//         console.log("i=>" , 2 , "j=>", );
//     } // inner loop
// }
// for (var i = 1; i < 11; i++) {
//   console.log(2 + "x" + i + " =" + i * 2);
// }
