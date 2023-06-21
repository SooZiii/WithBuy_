import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const Footerwrap = styled.footer`
  padding: 5rem 0;
  background: #a7a7a7;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 10rem;
  }
`;
const TextWrap = styled.div`
  padding-top: 4.3rem;
  padding-bottom: 9.4rem;
  text-align: center;
  font-size: 3.2rem;
  p + p {
    padding-top: 1.2rem;
  }
  p {
    color: #5e5e5e;
    font-weight: 300;
    b {
      color: #000;
      font-weight: bold;
    }
  }
`;
const LinkWrap = styled.div`
  font-weight: bold;
  font-size: 3.2rem;
  a + a {
    padding-left: 6.4rem;
  }
`;

export default function Footer() {
  return (
    <Footerwrap>
      <Link to="/">
        <img src={logo} alt="로고" />
      </Link>
      <TextWrap>
        <p>
          <b>위드바이</b> | 주소지 : 경기도 용인시 00구 00동 로스트벨리 20층
        </p>
        <p>대표자명 :이미미 | TEL : 0000-0000 / 010-0000-0000</p>
        <p>Copyright © 2023 by With Buy. All right reserved.</p>
      </TextWrap>
      <LinkWrap>
        <Link to="/">이용약관</Link>
        <Link to="/">개인정보취급방침</Link>
        <Link to="/">고객센터</Link>
      </LinkWrap>
    </Footerwrap>
  );
}
