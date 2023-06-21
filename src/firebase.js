// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1s896UjiB44c7TM0ur9stq-N9X9qZmXU",
  authDomain: "withbuy-92456.firebaseapp.com",
  projectId: "withbuy-92456",
  storageBucket: "withbuy-92456.appspot.com",
  messagingSenderId: "379873114124",
  appId: "1:379873114124:web:f6b1bf54219c9606779629",
  measurementId: "G-MSYFDFYSKE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
