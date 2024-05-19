import React, { useState } from "react";
import Slider from "../../components/slider/Slider";
import Props from "../../components/props/Props";
import { products } from "../../data/products";
import BookSlider from "../../components/bookSlider/BookSlider";

const Home = () => {
  return (
    <>
      <Slider />
      <Props />
      <BookSlider title="Most Gifted" booksList={products} />
      <BookSlider title="Best Seller" booksList={products} />
      <BookSlider title="Most Wished For" booksList={products} />
    </>
  );
};

export default Home;
