// // frontend (data)
// // database (server - local)
// // localstorage - temporary (browser) 5MB
// // server(mongoDb - firebase) - permanent

// console.log(window.localStorage);

// // var uname = "ali2";

// // localStorage.setItem //give data
// // localStorage.getItem //take data
// // localStorage.setItem("name", uname);
// // var getdata = localStorage.getItem("name");
// // console.log(getdata);
// // localStorage.removeItem("object")
// var obj = {
//   uname: "ali",
//   age: 20,
// };
// var objInString = JSON.stringify(obj);
// localStorage.setItem("object", objInString);

// var getObjectInString = localStorage.getItem("object"); //in string
// console.log("getObjectInString",getObjectInString) // in string
// // now convert in real object
// var objConvertInObject = JSON.parse(getObjectInString)//now in obj
// console.log("objConvertInObject",objConvertInObject.uname)
// // localStorage.removeItem("object")
// localStorage.clear()

// -- Todo App With Local storage
var todoInput = document.getElementById("todoInput");
var todoBtn = document.getElementById("todoBtn");
var todoList = document.getElementById("todoList");
getData();
todoBtn.addEventListener("click", function () {
  var todoText = todoInput.value;
  console.log("todotext=>", todoText);
  var li = document.createElement("li");
  li.textContent = todoText;
  console.log("li=>", li);
  todoList.appendChild(li);
  todoInput.value = "";
  saveData(todoText);
});

function saveData(todoText) {
  var todoData = JSON.parse(localStorage.getItem("todo")) || [];
  todoData.push(todoText);
  localStorage.setItem("todo", JSON.stringify(todoData));
}
function getData() {
  var gettodo = JSON.parse(localStorage.getItem("todo")) || [];

  gettodo.forEach((todo) => {
    var li = document.createElement("li");
    li.textContent = todo;
    todoList.appendChild(li);
  });
}
getData();
