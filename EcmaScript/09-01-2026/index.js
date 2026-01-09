// var div = document.getElementById('div3')

// var para = div.getElementsByTagName('p')
// // var specificPara = para[2].innerText
// console.log("p=>",para)

// var check = document.childNodes[1].childNodes[1].childNodes[1].innerText
// console.log("check=>",check)
 
// var div = document.getElementById('div1')
// console.log("div=>",div.childNodes)
// var counter = 0 //flag
// for (let i = 0; i < div.childNodes.length; i++) {
//     if(div.childNodes[i].nodeType == 1){
//         counter++
//     }
// if(counter == 2){
//      div.childNodes[i].innerHTML= "paragraph text changed"
// break;
// }

//     if(div.childNodes[i].nodeType == 2){
//        div.childNodes[i].innerHTML= "paragraph text changed"
//     }    
// }


var div = document.getElementById('div1')
console.log("div=>",div.childNodes[2].parentNode)