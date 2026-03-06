import { getDatabase, ref, set } from "./firebase.js";
import { app } from "./index.js";
const db = getDatabase(app);
console.log("realtime db=>", db);

var name = document.getElementById("name");
var message = document.getElementById("message");
var sendBtn = document.getElementById("sendBtn");
sendBtn.addEventListener("click", sendMessage);
async function sendMessage() {
    const id = new Date();
    set(ref(db, "messages/" + id), {
    author: name.value,
    text: message.value,
  });
}