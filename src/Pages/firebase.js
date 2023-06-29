import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1s896UjiB44c7TM0ur9stq-N9X9qZmXU",
  authDomain: "withbuy-92456.firebaseapp.com",
  projectId: "withbuy-92456",
  storageBucket: "withbuy-92456.appspot.com",
  messagingSenderId: "379873114124",
  appId: "1:379873114124:web:f6b1bf54219c9606779629",
  measurementId: "G-MSYFDFYSKE",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage, firebaseApp };
