import firebase from "firebase/app";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Mainpage from "./Pages/index";
import Login from "./Pages/Login";
import "firebase/firestore";
import styled from "./style/reset.css";

function App() {
  useEffect(() => {
    // Firebase 구성 정보
    const firebaseConfig = {
      apiKey: "AIzaSyD1s896UjiB44c7TM0ur9stq-N9X9qZmXU",
      authDomain: "withbuy-92456.firebaseapp.com",
      projectId: "withbuy-92456",
      storageBucket: "withbuy-92456.appspot.com",
      messagingSenderId: "379873114124",
      appId: "1:379873114124:web:f6b1bf54219c9606779629",
    };

    // Firebase 초기화
    firebase.initializeApp(firebaseConfig);
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
