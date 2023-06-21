import styled from "styled-components";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const FoodMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  margin: 2rem;
  border: 1px solid #d6d6d6;
  gap: 3rem;
`;
const MenuItem = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: border-color 0.3s ease;
  border: 1px solid #d6d6d6;

  &:hover {
    border-color: #65ade1;
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  &:nth-child(1) {
    ${MenuItem}:nth-child(1) {
      width: 38%;
      height: 55rem;
    }
    ${MenuItem}:nth-child(2) {
      width: 60%;
      height: 55rem;
    }
  }

  &:nth-child(2) {
    ${MenuItem}:nth-child(1) {
      width: 60%;
      height: 55rem;
    }
    ${MenuItem}:nth-child(2) {
      width: 38%;
      height: 55rem;
    }
  }
`;

const TextWrap = styled.div`
  font-size: 4rem;
  text-align: center;
  padding-top: 3rem;
  color: #222222;
`;

const Image = styled.img`
  width: 60%;
  height: 85%;
  display: block;
  margin: 0 auto;
  transition: border-color 0.3s ease;
`;

const LinkTag = styled.a`
  width: 100%;
  height: 100%;
`;

const HoverOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 7rem;
  height: 7rem;
  background-color: #d6d6d6;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 1rem;
  transition: width 0.3s ease, background-color 0.3s ease;
`;

const Text = styled.span`
  display: ${(props) => (props.isHovered ? "block" : "none")};
  margin-left: 4px;
  color: white;
  font-size: 2.2rem;
`;

const ArrowIcon = styled(FontAwesomeIcon)`
  font-size: 2.2rem;
`;
const Link = styled.a`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ArrowBox = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  transition: color 0.3s ease;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &:hover {
    & > ${HoverOverlay} {
      width: 100%;
      background-color: #65ade1;

      & > ${Link} > ${ArrowBox} {
        color: #fff;
      }
    }

    & > ${HoverOverlay} > ${Link} > ${ArrowBox} {
      width: 100%;
    }

    & > ${HoverOverlay} > ${Link} > ${ArrowBox} > ${Text} {
      display: block;
    }
  }
`;
export default function FoodMenu() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <FoodMenuContainer>
      <Row>
        <MenuItem>
          <LinkTag href="#none">
            <ImageWrapper>
              <Image src="/FoodMenu/img1.png" alt="Food 1" />
              <TextWrap>야채</TextWrap>
              <HoverOverlay
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
              >
                <ArrowBox>
                  <Text isHovered={isHovered}>바로가기</Text>
                  <ArrowIcon icon={faArrowRight} />
                </ArrowBox>
              </HoverOverlay>
            </ImageWrapper>
          </LinkTag>
        </MenuItem>
        <MenuItem>
          <LinkTag href="#none">
            <ImageWrapper>
              <Image src="/FoodMenu/img2.png" alt="Food 2" />
              <TextWrap>유제품</TextWrap>
              <HoverOverlay
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
              >
                <ArrowBox>
                  <Text isHovered={isHovered}>바로가기</Text>
                  <ArrowIcon icon={faArrowRight} />
                </ArrowBox>
              </HoverOverlay>
            </ImageWrapper>
          </LinkTag>
        </MenuItem>
      </Row>
      <Row>
        <MenuItem>
          <LinkTag href="#none">
            <ImageWrapper>
              <Image src="/FoodMenu/img4.png" alt="Food 4" />
              <TextWrap>과일</TextWrap>
              <HoverOverlay
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
              >
                <ArrowBox>
                  <Text isHovered={isHovered}>바로가기</Text>
                  <ArrowIcon icon={faArrowRight} />
                </ArrowBox>
              </HoverOverlay>
            </ImageWrapper>
          </LinkTag>
        </MenuItem>
        <MenuItem>
          <LinkTag href="#none">
            <ImageWrapper>
              <Image src="/FoodMenu/img3.png" alt="Food 3" />
              <TextWrap>해산물</TextWrap>

              <HoverOverlay
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
              >
                <ArrowBox>
                  <Text isHovered={isHovered}>바로가기</Text>
                  <ArrowIcon icon={faArrowRight} />
                </ArrowBox>
              </HoverOverlay>
            </ImageWrapper>
          </LinkTag>
        </MenuItem>
      </Row>
    </FoodMenuContainer>
  );
}
