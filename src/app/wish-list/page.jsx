import React from "react";
import ProductPagination from "../_Components/ProductPagination/ProductPagination";
import ProductCard from "../_Components/ProductCard/ProductCard";
import Banner from "../_Components/Banner/Banner";
import YouMightLike from "../_Components/YouMightLike/YouMightLike";


export default function page() {
	return (
		<>
			<Banner text={"Wish List"} />
			<ProductCard text="Last Likes" />
			<ProductCard />
			<YouMightLike />
			<ProductCard text="Last Likes" />
			<ProductCard />
			<ProductPagination />
		</>
	);
}
