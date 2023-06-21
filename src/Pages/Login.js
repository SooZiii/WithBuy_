import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

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

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 처리 로직
  };

  const handleGoogleLogin = () => {
    // 구글 로그인 처리 로직
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button type="submit">Log In</Button>
      </LoginForm>
      <GoogleButton onClick={handleGoogleLogin}>
        <FontAwesomeIcon icon={faGoogle} />
        Log In with Google
      </GoogleButton>
    </LoginContainer>
  );
}

export default Login;
