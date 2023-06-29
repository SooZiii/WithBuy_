import React, { useContext } from "react";
import { CartContext } from "./cartContext";

const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, clearCart } =
    useContext(CartContext);

  const handleIncreaseQuantity = (item) => {
    increaseQuantity(item.id);
  };

  const handleDecreaseQuantity = (item) => {
    decreaseQuantity(item.id);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleLogout = () => {
    // 로그아웃 시 카트 정보 초기화
    clearCart();

    // 로그아웃 로직 추가
    // ...
  };

  // 로그인 상태 확인 함수
  const isLoggedIn = () => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    return loggedIn === "true";
  };

  return (
    <div>
      <h2>장바구니</h2>
      {isLoggedIn() ? (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  style={{ width: "200px", height: "200px" }}
                />
                <p>{item.title}</p>
                <p>{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => handleIncreaseQuantity(item)}>+</button>
                <button onClick={() => handleDecreaseQuantity(item)}>-</button>
              </li>
            ))}
          </ul>
          <p>Total Price: {getTotalPrice()}</p>
          <button>구매하기</button>
        </>
      ) : (
        <p>로그인이 필요합니다.</p>
      )}
    </div>
  );
};

export default Cart;
