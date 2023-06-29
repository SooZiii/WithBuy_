import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import logo from "../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGear, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../Pages/cartContext";

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

export function setUserData(data) {
  // setUserData logic implementation
  // For example: saving user data to localStorage
}

export default function Header() {
  const cartIcon = faShoppingCart;
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleWishlistClick = () => {
    if (isLoggedIn) {
      // 로그인 상태일 때 Wishlist로 이동
      navigate("/wishlist");
    } else {
      // 로그인 상태가 아닐 때 회원가입 페이지로 이동
      navigate("/signup");
    }
  };

  const { cartItems = [], wishlistItems = [] } = useContext(CartContext);
  const [cartItemsState, setCartItems] = useState([]);
  const [wishlistItemsState, setWishlistItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [wishlistItemCount, setWishlistItemCount] = useState(0);

  useEffect(() => {
    setCartItemCount(cartItems.length);
  }, [cartItems]); // cartItems를 의존성(dependency)으로 추가

  useEffect(() => {
    setWishlistItemCount(wishlistItems.length);
  }, [wishlistItems]);
  useEffect(() => {
    setCartItemCount(cartItemsState.length);
  }, [cartItemsState]);

  useEffect(() => {
    setWishlistItemCount(wishlistItemsState.length);
  }, [wishlistItemsState]);

  const handleAddToWishlist = () => {
    // 위시리스트에 추가할 아이템 정보를 생성합니다.
    const newItem = {
      // 아이템의 속성을 정의해주세요
    };

    // 위시리스트 아이템 상태를 업데이트합니다.
    setWishlistItems((prevItems) => [...prevItems, newItem]);

    // 위시리스트 아이템 개수를 업데이트합니다.
    setWishlistItemCount((prevCount) => prevCount + 1);
  };
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

        <Link to="/cart">
          <FontAwesomeIcon icon={cartIcon} />
          {cartItemCount > 0 && <span>+{cartItemCount}</span>}
        </Link>
        {isLoggedIn && (
          <Link to="/wishlist">
            <FontAwesomeIcon icon={faUserGear} />
            {wishlistItemCount > 0 && <span>+{wishlistItemCount}</span>}
          </Link>
        )}
      </Navbox>
    </HeaderWrapper>
  );
}
