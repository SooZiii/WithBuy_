import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  form {
    div {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
    }

    label {
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    input {
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 1rem;
      width: 300px;
    }

    p {
      color: red;
      margin-top: 0.5rem;
    }

    button {
      padding: 0.5rem 1rem;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      text-align: center;
    }
  }
`;
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setPasswordError("비밀번호는 최소 6자 이상이어야 합니다.");
      return;
    }

    if (password !== confirmPassword) {
      setPasswordError("비밀번호가 일치하지 않습니다.");
      return;
    }

    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("회원가입 성공:", user);
        alert("회원가입에 성공하였습니다.");
        navigate("/Login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("회원가입 실패:", errorCode, errorMessage);
        alert("회원가입에 실패하였습니다.");
        // 폼 초기화
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setPasswordError("");
      });
  };

  return (
    <SignUpContainer>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
            placeholder="이메일을 입력하시오"
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            placeholder="6글자 이상 입력하시오"
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">비밀번호 확인</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        {passwordError && <p>{passwordError}</p>}
        <button type="submit">가입하기</button>
      </form>
    </SignUpContainer>
  );
};

export default SignUp;
