import React from "react";
import Banner from "../_Components/Banner/Banner";
import SearchBar from "../_Components/SearchBar/SearchBar";
import ProductCard from "../_Components/ProductCard/ProductCard";
import bg from "../../assets/images/wishlist-Background.png";

export default function Page() {
  return (
    <>
      <Banner text={"Search"} bg={bg} />
      <section className="flat-spacing-8 page-search-inner">
        <SearchBar />
        <ProductCard />
      </section>
    </>
  );
}
