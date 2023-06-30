import React, { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "./cartContext";
import styled from "styled-components";

const CartContainer = styled.div`
  padding: 20px;
`;

const CartIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;
const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ProductItem = styled.div`
  width: 30%;
  margin-bottom: 20px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
`;

const ProductTitle = styled.h3`
  font-size: 2rem;
`;

const ProductPrice = styled.p`
  margin-bottom: 10px;
`;

const ProductQuantityContainer = styled.div`
  display: flex;
  align-items: center;
`;

const QuantityButton = styled.button`
  margin-right: 5px;
`;

const ProductQuantity = styled.span`
  font-size: 1.5rem;
`;

const TotalPrice = styled.p`
  font-size: 1.2rem;
  margin-top: 20px;
`;

const Cart = () => {
  const { cartItems, addToCart } = useContext(CartContext);
  const [quantityMap, setQuantityMap] = useState({});

  useEffect(() => {
    // Retrieve cart items from local storage
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setQuantityMap(JSON.parse(storedCartItems));
    }
  }, []);
  useEffect(() => {
    // Save cart items to local storage whenever it changes
    localStorage.setItem("cartItems", JSON.stringify(quantityMap));
  }, [quantityMap]);

  const handleAddToCart = (item) => {
    addToCart({ ...item, quantity: quantityMap[item.id] || 1 });
  };

  const product = {
    // 상품 정보 정의
    id: "35UQSAsCfCowmlj9g4rN",
    title: "dd",
    price: 5000,
    imgUrl: "dd",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/withbu…=media&token=8d0dab97-bb01-4fc1-a415-89300952f39d",
  };

  const handleIncreaseQuantity = (productId) => {
    setQuantityMap((prevQuantityMap) => ({
      ...prevQuantityMap,
      [productId]: (prevQuantityMap[productId] || 0) + 1,
    }));
  };

  const handleDecreaseQuantity = (productId) => {
    setQuantityMap((prevQuantityMap) => {
      const newQuantity = (prevQuantityMap[productId] || 0) - 1;
      if (newQuantity <= 0) {
        const { [productId]: _, ...rest } = prevQuantityMap;
        return rest;
      } else {
        return {
          ...prevQuantityMap,
          [productId]: newQuantity,
        };
      }
    });
  };

  const total = cartItems.reduce(
    (acc, curr) => acc + curr.price * (quantityMap[curr.id] || 1),
    0
  );

  return (
    <CartContainer>
      <CartIcon icon={faShoppingCart} />
      <ProductList>
        {cartItems.map((item) => (
          <ProductItem key={item.id}>
            <ProductImage src={item.imageUrl} alt={item.title} />
            <ProductTitle>{item.title}</ProductTitle>
            <ProductPrice>{item.price}원</ProductPrice>
            <ProductQuantityContainer>
              <QuantityButton onClick={() => handleDecreaseQuantity(item.id)}>
                -
              </QuantityButton>
              <ProductQuantity>{quantityMap[item.id] || 1}</ProductQuantity>
              <QuantityButton onClick={() => handleIncreaseQuantity(item.id)}>
                +
              </QuantityButton>
            </ProductQuantityContainer>
          </ProductItem>
        ))}
      </ProductList>
      <TotalPrice>총 합계: {isNaN(total) ? 0 : total}원</TotalPrice>
    </CartContainer>
  );
};

export default Cart;
