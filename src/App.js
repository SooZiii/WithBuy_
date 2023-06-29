import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./Pages/Detail";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Mainpage from "./Pages/index";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";
import Vegetable from "./Pages/Vegetable";
import { CartContextProvider } from "./Pages/cartContext";

import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { auth, firebaseApp } from "./firebase";

const NotFound = () => {
  return <div>Page not found</div>;
};

const App = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // 사용자가 로그인된 상태
        setUserData(user.displayName);
      } else {
        // 사용자가 로그아웃된 상태
        setUserData(null);
      }
    });

    return () => unsubscribe(); // 컴포넌트 언마운트 시 이벤트 구독 해제
  }, []);

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((data) => {
        setUserData(data.user.displayName);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <CartContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/pages/vegetable" element={<Vegetable />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </CartContextProvider>
  );
};

export default App;
