// 1.profile (linkedin,indeed,linkedin job,portfolio)
// github student developer pack(domain .me + copilot)
// 2.projects (videos)
// 3.search job market
// 4.Javascript main concept
// 5.market job  (startup,company,freelance)
// 6.institution based(project) | market work
// 7. i(revice with project or concept) ii(focus)

//  -- firestore database
// 1.sql(structured query lang(tablewise))mysql or postgre | noSql(no sql)
// noSql -> document(treewise->atomic structure) (collection(key value))
// no table , no row column
// call the key -> get value

// CRUD
// C - create ->add data
// R - read -> get data
// U - update -> update data
// D - delete -> delete data

import {
  getFirestore,
  doc,
  setDoc,
  serverTimestamp,
  addDoc,
  collection,
  getDocs,
  updateDoc,
  deleteDoc
} from "./firebase.js";
import { app } from "./index.js";
const db = getFirestore(app);
console.log("db=>", db);

// setDoc()(datastore with manual id)  -||-  addDoc(datastore with auto id)
// async function addData() {
//   await setDoc(doc(db, "users", "a"), {
//     name: "Los updata",
//     state: "CA",
//     country: "USA",
//     // time: new Date().   local machine
//     timestamp:serverTimestamp()  //server
//   });
// }
// addData()

var addbtn = document.getElementById("addBtn");
var quoteList = document.getElementById("quoteList");
addbtn.addEventListener("click", addQuote);

var quoteInput = document.getElementById("quoteInput");
const quoteCollection = collection(db, "quotes",);
async function addQuote() {
  await addDoc(quoteCollection, {
    quote: quoteInput.value,
    time: serverTimestamp(),
  });
  getQuote()
}

async function getQuote() {
  quoteList.innerHTML = ""
  const querySnapshot = await getDocs(quoteCollection);
  querySnapshot.forEach((doc) => {
    console.log("id=>", doc.id, " => ", doc.data().quote);
    const li = document.createElement("li");
    // li.innerHTML = ` ${doc.data().quote} + <button>Edit</button>`

    li.textContent = doc.data().quote + " ";
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", function () {
      editQuote(doc.id, doc.data().quote);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
 deleteBtn.addEventListener("click", function () {
      deleteQuote(doc.id);
    });



    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    quoteList.appendChild(li);
  });
}
getQuote();

async function editQuote(id, oldQuote) {
  const newQuote = await prompt("enter new quote", oldQuote);
  await updateDoc(doc(db, "quotes", id), {
    quote: newQuote,
  });
  // console.log("new quote", newQuote);
}

// deleteQuote
async function deleteQuote(id){
await deleteDoc(doc(db,"quotes",id))
getQuote()
}