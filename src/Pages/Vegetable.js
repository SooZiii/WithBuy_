import React, { useState, useEffect, useContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { firebaseApp } from "../firebase";
import { getFirestore } from "firebase/firestore";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "./cartContext";

const storage = getStorage(firebaseApp);
const db = getFirestore();

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const GridItem = styled.div`
  width: calc(33.33% - 20px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

const VegetableImage = styled.img`
  width: 200px;
  height: 200px;
`;
const ButtonContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Button = styled.button`
  width: 18rem;
  margin-right: 1rem;
  padding: 0.5rem 5rem;
  border: none;
  background-color: rgb(160 166 174);
  color: #fff;
  cursor: pointer;
  border-radius: 3rem;
`;
const SortButtonContainer = styled.div`
  padding-top: 5rem;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 5rem;
`;

const SortButton = styled.button`
  margin-left: 2.5rem;
  padding-right: 2.5rem;
  position: relative;
  border: none;
  background: none;

  &::after {
    content: "|";
    position: absolute;
    right: -8px;
    top: 50%;
    transform: translateY(-50%);
  }

  &:last-child::after {
    display: none;
  }

  &:hover {
    color: #232323;
    border-bottom: 1px solid #232323;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8rem;
  margin-bottom: 5rem;
`;

const PaginationButton = styled.button`
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  margin: 0 5px;
`;

const Vegetable = () => {
  const { addToCart } = useContext(CartContext);
  const [vegetables, setVegetables] = useState([]);
  const [sortOrder, setSortOrder] = useState(""); // 정렬 순서 상태 추가
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 6;

  useEffect(() => {
    const fetchVegetables = async () => {
      try {
        const vegetableCollection = collection(db, "vegetable");
        const snapshot = await getDocs(vegetableCollection);
        const vegetableList = snapshot.docs.map(async (doc, index) => {
          try {
            const imageUrl = await getDownloadURL(
              ref(
                storage,
                `gs://withbuy-92456.appspot.com/vegetable/Vegetable${
                  index + 1
                }.png`
              )
            );
            return {
              id: doc.id,
              ...doc.data(),
              imageUrl: imageUrl,
            };
          } catch (error) {
            console.error(
              "이미지 URL을 가져오는 중에 오류가 발생했습니다.",
              error
            );
            return null;
          }
        });
        const resolvedVegetableList = await Promise.all(vegetableList);
        const filteredVegetables = resolvedVegetableList.filter(
          (vegetable) => vegetable !== null
        );

        let sortedVegetables = [...filteredVegetables];
        // 정렬 순서에 따라 배열 정렬
        if (sortOrder === "priceHigh") {
          sortedVegetables.sort((a, b) => b.price - a.price); // 가격 높은순 정렬
        } else if (sortOrder === "priceLow") {
          sortedVegetables.sort((a, b) => a.price - b.price); // 가격 낮은순 정렬
        } else if (sortOrder === "name") {
          sortedVegetables.sort((a, b) => a.title.localeCompare(b.title)); // 상품별 가나다 순 정렬
        }

        setVegetables(sortedVegetables);

        console.log("채소 목록을 가져왔습니다.", sortedVegetables);
      } catch (error) {
        console.error("채소 목록을 가져오는 중에 오류가 발생했습니다.", error);
      }
    };
    fetchVegetables();
  }, [sortOrder]);

  // Calculate the total number of pages
  const totalPages = Math.ceil(vegetables.length / perPage);

  // Get the current page's vegetables
  const indexOfLastVegetable = currentPage * perPage;
  const indexOfFirstVegetable = indexOfLastVegetable - perPage;
  const currentVegetables = vegetables.slice(
    indexOfFirstVegetable,
    indexOfLastVegetable
  );

  const handleAddToCart = (vegetable) => {
    addToCart(vegetable);
    console.log("장바구니+:", vegetable);
  };
  const handleAddToWishlist = (vegetable) => {
    console.log("위시리스트+:", vegetable);
  };

  const handleSortOrder = (order) => {
    setSortOrder(order);
  };
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <SortButtonContainer>
        <SortButton onClick={() => handleSortOrder("priceHigh")}>
          가격 높은순
        </SortButton>
        <SortButton onClick={() => handleSortOrder("priceLow")}>
          가격 낮은순
        </SortButton>
        <SortButton onClick={() => handleSortOrder("name")}>
          상품별 가나다 순
        </SortButton>
      </SortButtonContainer>
      <GridContainer>
        {currentVegetables.map((vegetable) => (
          <GridItem key={vegetable.id}>
            <Link to={`/detail?id=${vegetable.id}`}>
              <VegetableImage src={vegetable.imageUrl} alt={vegetable.name} />
            </Link>
            <h3>{vegetable.title}</h3>
            <p>{vegetable.price}</p>
            <ButtonContainer>
              <Button onClick={() => handleAddToCart(vegetable)}>
                장바구니+
              </Button>
              <Button onClick={() => handleAddToWishlist(vegetable)}>
                위시리스트+
              </Button>
            </ButtonContainer>
          </GridItem>
        ))}
      </GridContainer>
      <PaginationContainer>
        {currentPage > 1 && (
          <PaginationButton onClick={() => handlePageChange(currentPage - 1)}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </PaginationButton>
        )}

        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              style={{
                fontWeight: page === currentPage ? "bold" : "normal",
              }}
            >
              {page}
            </button>
          )
        )}

        {currentPage < totalPages && (
          <PaginationButton onClick={() => handlePageChange(currentPage + 1)}>
            <FontAwesomeIcon icon={faChevronRight} />
          </PaginationButton>
        )}
      </PaginationContainer>
    </div>
  );
};

export default Vegetable;
