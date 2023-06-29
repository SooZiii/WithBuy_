import React, { useState } from "react";

export const CartContext = React.createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 카트 관련 함수들...

  const clearCart = () => {
    setCartItems([]);
  };

  const toggleLogin = () => {
    setIsLoggedIn((prevLoggedIn) => !prevLoggedIn);
  };

  const contextValue = {
    cartItems,
    isLoggedIn,
    // ... 다른 필요한 값들
    clearCart,
    toggleLogin,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
