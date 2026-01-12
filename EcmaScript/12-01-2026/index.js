// var body = document.getElementById('body').childNodes
// console.log("body",body)
// var doc = document.getElementById("div2").firstChild.nodeValue;
// console.log("div=>", doc);

// var heading = document.getElementById('head')
// console.log("head",heading.childNodes[1].nodeName)

// var list = document.getElementsByTagName('li')
// var listLength = list.length
// for(let i = 0; i<listLength; i++){
//     if(list[i].innerHTML==""){
//         list[i].innerHTML = "will be coming"
//     }
// }

// function wordChecker() {
//   var input = document.getElementById("input").value;
//   console.log("value=>", input);

//   var reverse = input.split("").reverse().join("");
//   console.log("reverse", reverse);

//   if (reverse == input) {
//     alert("this is palindrom");
//   } else {
//     alert("try again");
//   }
// }

// input = prompt("enter word");
//     //       civic
//     for (let i = input.length - 1; i >= 0; i--) {
//     var reverse = "";
//   reverse += input;
// }
// console.log("reverse,",reverse)

var alink = document.getElementById("aid")
console.log("alink",alink.hasAttribute("onmouseOver"))
console.log("alink get",alink.getAttribute("lass"))
var setAtt = alink.setAttribute("onmouseover","function()")
console.log("setted att=>",setAtt)
console.log("alink=>",alink)
console.log("alink=>",alink.getAttribute("onmouseover"))