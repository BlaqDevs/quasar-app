import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyDceCgmMKsfvo9RRQLltSjUTCEpQOVt9Ew",

    authDomain: "bweeter-a43c2.firebaseapp.com",

    projectId: "bweeter-a43c2",

    storageBucket: "bweeter-a43c2.appspot.com",

    messagingSenderId: "988930127141",

    appId: "1:988930127141:web:9188aca9d276850f7c16cc"

};

const defaultProject = initializeApp(firebaseConfig);

console.log(defaultProject.name); // "[DEFAULT]"

// Option 1: Access Firebase services via the defaultProject variable
// let defaultStorage = getStorage(defaultProject);
let db = getFirestore(defaultProject);

// Option 2: Access Firebase services using shorthand notation
// defaultStorage = getStorage();
db = getFirestore();

export default db