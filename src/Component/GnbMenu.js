import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const plusIcon = faPlus;

const Gnbmenu = styled.div`
  position: relative;
`;

const GnbListWrap = styled.div`
  width: 29.5rem;
  position: fixed;
  background: #5ca738;
  top: 11vw;
  left: 2vw;
  padding: 2rem;
`;
const GnbList = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5rem 0;
  :nth-child(1) {
    padding-top: 5rem;
  }
  padding-top: 2.5rem;
`;
const Listspan = styled.span`
  font-weight: bold;
  color: #222222;
  :nth-child(1) {
    font-size: 4rem;
  }
  :nth-child(2) {
    font-size: 3.5rem;
  }
`;
export default function GnbMenu() {
  return (
    <Gnbmenu>
      <GnbListWrap>
        <GnbList>
          <Listspan>오늘의 특가</Listspan>
          <Listspan>
            <FontAwesomeIcon icon={plusIcon} />
          </Listspan>
        </GnbList>
        <GnbList>
          <Listspan>오늘의 공구</Listspan>
          <Listspan>
            <FontAwesomeIcon icon={plusIcon} />
          </Listspan>
        </GnbList>
        <GnbList>
          <Listspan>베스트 상품</Listspan>
          <Listspan>
            <FontAwesomeIcon icon={plusIcon} />
          </Listspan>
        </GnbList>
        <GnbList>
          <Listspan>신선 배송</Listspan>
          <Listspan>
            <FontAwesomeIcon icon={plusIcon} />
          </Listspan>
        </GnbList>
      </GnbListWrap>
    </Gnbmenu>
  );
}
