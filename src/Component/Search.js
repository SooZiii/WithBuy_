import React, { useState } from "react";
import Autosuggest from "react-autosuggest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const SearchButton = styled.button`
  border: none;
  background-color: transparent;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

export default function Search() {
  const renderSuggestion = (suggestion) => {
    return (
      <div
        style={{
          fontSize: "2rem",
          paddingLeft: "2rem",
          paddingTop: "1.5rem",
        }}
      >
        {suggestion}
      </div>
    );
  };

  return <SearchBar renderSuggestion={renderSuggestion} />;
}

function SearchBar({ renderSuggestion }) {
  const initialSuggestions = [
    "야채",
    "과일",
    "유제품",
    "오늘의 특가",
    "오늘의 공구",
    "베스트 상품",
    "신선 식품",
  ];

  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const onSuggestionsFetchRequested = ({ value }) => {
    const filteredSuggestions = initialSuggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onSuggestionSelected = (event, { suggestion }) => {};

  const handleSearch = () => {
    console.log("Search:", value);
  };

  return (
    <div>
      <div>
        <SearchContainer>
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            onSuggestionSelected={onSuggestionSelected}
            getSuggestionValue={(suggestion) => suggestion}
            renderSuggestion={renderSuggestion}
            inputProps={{
              placeholder: "찾으시는 상품을 입력해주세요",
              value: value,
              onChange: (event, { newValue }) => setValue(newValue),
              className: "search-input",
            }}
          />
          <SearchButton onClick={handleSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </SearchButton>
        </SearchContainer>
      </div>
      <style>
        {`
          .search-input {
            width:40rem;
            height:6rem;
            font-size:2rem;
            border: none;
            border-bottom: 1px solid #f2f2f2;
            padding: 2rem 2rem .5rem 2rem;
            outline: none;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
}
