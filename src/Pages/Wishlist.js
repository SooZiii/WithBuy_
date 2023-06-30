import React, { useContext } from "react";
import { CartContext } from "./cartContext";
import styled from "styled-components";

const EmptyWishlistMessage = styled.p`
  font-size: 3rem;
  text-align: center;
  margin: 5rem 0;
`;

const Wishlist = () => {
  const { wishlistItems, addToWishlist, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

  const handleAddToWishlist = (item) => {
    addToWishlist(item);
  };

  const handleIncreaseQuantity = (item) => {
    increaseQuantity(item.id);
  };

  const handleDecreaseQuantity = (item) => {
    decreaseQuantity(item.id);
  };

  const getTotalPrice = () => {
    return wishlistItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  if (!wishlistItems || wishlistItems.length === 0) {
    return (
      <EmptyWishlistMessage>위시리스트가 비어 있습니다.</EmptyWishlistMessage>
    );
  }

  return (
    <div>
      <h2>위시리스트</h2>
      <ul>
        {wishlistItems.map((item) => (
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
            <button onClick={() => handleAddToWishlist(item)}>
              위시리스트에 추가
            </button>
          </li>
        ))}
      </ul>
      <p>Total Price: {getTotalPrice()}</p>
    </div>
  );
};

export default Wishlist;
