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

import { getFirestore, doc, setDoc,serverTimestamp } from "./firebase.js";
import { app } from "./index.js";
const db = getFirestore(app);
console.log("db=>", db);




// setDoc()(datastore with manual id)  -||-  addDoc(datastore with auto id)
async function addData() {
  await setDoc(doc(db, "users", "a"), {
    name: "Los updata",
    state: "CA",
    country: "USA",
    // time: new Date().   local machine
    timestamp:serverTimestamp()  //server
  });
}
addData()
