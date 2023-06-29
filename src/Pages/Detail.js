import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(db, "products", id);
        const productDoc = await getDoc(productRef);
        if (productDoc.exists()) {
          const productData = productDoc.data();
          setProduct(productData);
        } else {
          console.log("상품이 존재하지 않습니다.");
        }
      } catch (error) {
        console.error("상품 정보를 가져오는 중에 오류가 발생했습니다.", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={product.imageUrl} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.price}</p>
    </div>
  );
};

export default Detail;
