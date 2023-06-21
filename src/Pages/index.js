import React from "react";
import Search from "../Component/Search";
import Carousel from "../Component/Carousel";
import FoodMenu from "../Component/FoodMenu";

export default function Mainpage() {
  return (
    <div>
      <Search />
      <Carousel />
      <FoodMenu />
    </div>
  );
}
