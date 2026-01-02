// function checkEmail(emailId){
//    var email =  document.getElementById(emailId).value
//    if(email==""){
//     alert("please enter email")
//    }
//    console.log("email",email)
// //    console.log("email",emailId)
// }

function checkCampus() {
  var rollNumber = document.getElementById("rollNumber").value;
  var campus;
  switch (rollNumber) {
    case "10":
    case "101":
      campus = "zaitoon asharf";
      break;
    case "20":
      campus = "gulshan campus";
      break;
    case "100":
      campus = "bahadurabad campus";
      break;
    default:
      alert("you are not enrolled");
      break;
  }
  document.getElementById("campus").value = campus;
}

function expandPara() {
  var longPara ="dhfvdjshvdjhvcdjhsvbcjhvsdckjdsbcfjgejkbje"
  var para = document.getElementById("para").innerText =longPara;
  console.log("para", para);
}

function renderList(){
    var orderlist = document.getElementById("list");
    var lists = "<img src='https://plus.unsplash.com/premium_photo-1661963826911-f369fa24c1a6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlrZXN8ZW58MHx8MHx8fDA%3D' alt='' width='300px'>"
    orderlist.innerHTML = lists;
}

function invisible(){
   var img =  document.getElementById("img").className +=" hide"
   console.log("img=>",img)
}
function stable(){
   var img =  document.getElementById("img").className="stable"
   console.log("img=>",img)
}
