import React from "react";
import ProductPagination from "../_Components/ProductPagination/ProductPagination";
import ProductCard from "../_Components/ProductCard/ProductCard";
import Banner from "../_Components/Banner/Banner";
import YouMightLike from "../_Components/YouMightLike/YouMightLike";
import bg from "@images/whislist.jpg" ;

export default function page() {
	return (
		<>
			<Banner text={"Wish List"} bg={bg.src} />
			 
			<ProductCard />
			<YouMightLike />
			<ProductCard text="Last Likes" />
			<ProductCard />
			<ProductPagination />
		</>
	);
}
