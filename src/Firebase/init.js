import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDIUXJW1aS1UHVcAo7oRcri8ZmTzIfe9bA",
    authDomain: "ifthi-blogs.firebaseapp.com",
    projectId: "ifthi-blogs",
    storageBucket: "ifthi-blogs.appspot.com",
    messagingSenderId: "415109659678",
    appId: "1:415109659678:web:f56eab6c66eb7f5ea8c20f",
    measurementId: "G-M6CD94C02K"
  };
  
  // Initialize Firebase
 initializeApp(firebaseConfig);
  const db = getFirestore(app);
  export default db;
