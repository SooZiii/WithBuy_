import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGear } from "@fortawesome/free-solid-svg-icons";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  background: #f0f0f0;
  padding: 0.1rem;
  align-items: center;
  font-size: 3.2rem;
  padding-left: 1.5rem;
`;

const Headerbox = styled.div`
  display: flex;
  align-items: center;
  font-size: 3.2rem;

  h2 {
    padding-left: 1.5rem;
  }
`;

const Navbox = styled.div`
  padding-right: 5rem;
  a + a {
    padding-left: 7.5rem;
  }
`;
export default function Header() {
  const userGearIcon = faUserGear;

  return (
    <HeaderWrapper>
      <Headerbox>
        <Link to="/">
          <img src={logo} alt="로고" />
        </Link>
        <h2>소용량도 저렴하게!</h2>
      </Headerbox>
      <Navbox>
        <Link to="/login">로그인</Link>
        <Link to="/signup">회원가입</Link>
        <Link to="/mypage">
          <FontAwesomeIcon icon={userGearIcon} />
        </Link>
      </Navbox>
    </HeaderWrapper>
  );
}
