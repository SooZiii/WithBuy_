import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth"; // Firebase auth에서 필요한 함수와 객체들을 가져옵니다.
import { signInWithPopup, signOut } from "firebase/auth"; // Firebase auth에서 필요한 함수를 가져옵니다.
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faUserGear } from "@fortawesome/free-solid-svg-icons";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { setUserData } from "../Component/Header";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  width: 200px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #65ade1;
  color: white;
  border: none;
  cursor: pointer;
`;

const GoogleButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #db4437;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const firebaseConfig = {
  apiKey: "AIzaSyD1s896UjiB44c7TM0ur9stq-N9X9qZmXU",
  authDomain: "withbuy-92456.firebaseapp.com",
  projectId: "withbuy-92456",
  storageBucket: "withbuy-92456.appspot.com",
  messagingSenderId: "379873114124",
  appId: "1:379873114124:web:f6b1bf54219c9606779629",
  measurementId: "G-MSYFDFYSKE",
};

firebase.initializeApp(firebaseConfig, "MyApp");

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedIsLoggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const auth = getAuth(firebase.app("MyApp"));
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
        navigate("/wishlist");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogout = () => {
    const auth = getAuth(firebase.app("MyApp")); // Firebase 앱에 대한 인증 객체 가져오기
    signOut(auth) // 로그아웃 시도
      .then(() => {
        setIsLoggedIn(false); // 로그인 상태 업데이트
        localStorage.setItem("isLoggedIn", "false"); // 로컬 스토리지에 로그인 상태 저장
        navigate("/login"); // 로그아웃 후 로그인 페이지로 이동
      })
      .catch((error) => {
        console.log(error); // 에러 처리
      });
  };

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(firebase.app("MyApp"));

    signInWithPopup(auth, provider)
      .then((result) => {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
        navigate("/wishlist");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <LoginContainer>
      {!isLoggedIn ? (
        <LoginForm onSubmit={handleLogin}>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <Button type="submit">Login</Button>{" "}
          <GoogleButton onClick={handleGoogleLogin}>
            <FontAwesomeIcon icon={faGoogle} />
            Log In with Google
          </GoogleButton>
        </LoginForm>
      ) : (
        <div>
          <Button onClick={() => navigate("/wishlist")}>Go to Wishlist</Button>
          {isLoggedIn && (
            <Link to="/wishlist">
              <FontAwesomeIcon icon={faUserGear} />
            </Link>
          )}
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </LoginContainer>
  );
}

export default Login;
