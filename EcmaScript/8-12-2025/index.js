// var myName = prompt("enter your name");

// var myNameLentgh = myName.length;
// if (myNameLentgh > 3) {
//   var result = myName.slice(0, 3);
//   console.log("result=>", result);
// }

// var cityName = prompt("enter city name")
// var cityNames = cityName.length;
// for (i = 0; i < cityNames; i++) {
//   if (cityName.slice(i, i+2) === "  ") {
//     console.log("hey , double space not allowed");
//     break
//   } else {
//     console.log("there is no double space try again");
//   }
// }

// var cityName = "This is World War II story of the Past World War II";
// var cityNames = cityName.length;
// for (i = 0; i < cityNames; i++) {
//   if (cityName.slice(i, i + 12) === "World War II") {
//     cityName =
//       cityName.slice(0, i) + "The scond World War" + cityName.slice(i + 12);
//       console.log("cityName =>", cityName);
//     }
// }

// var name = "ibrahim"
// var check = name.indexOf("j")
// console.log(check)

// var sentence = "This is beautiful Pakistan in Asia agian Pakistan";
// var sentences = sentence.lastIndexOf("Pakistan");
// if (sentences !== -1) {
//   var result =
//     sentence.slice(0, sentences) + "Thailand" + sentence.slice(sentences + 8);
//   console.log(result);
// }

// var sentence = "This is beautiful Pakistan in Asia agian Pakistan Pakistan";
// // var reult = sentence.replace(/Pakistan/g,"thailand")
// var reult = sentence.replaceAll("Pakistan","thailand")
// console.log(reult)

// var name = "absdfjhdskjfhdjkhbdjkvc";
// var names = name.charAt(name.length - 1);
// if (names == "c") {
//   var upper = names.toUpperCase();
//   console.log(upper, "found");
// } else {
//   console.log("not found");
// }

var city = "pak!istan";

for (i = 0; i < city.length; i++) {
  if (city.charAt(i) == "!") {
    console.log("found at " + i + " Index " + city);
  }
}

// var result = city.charAt(0)
// console.log(result)
