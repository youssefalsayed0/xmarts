import React from "react";
import FilterOffcanvas from "../FilterOffcanvas/FilterOffcanvas";
import SectionTitle from "../SectionTitle/SectionTitle";
import product1 from "@images/products/product1.jpg";
import product2 from "@images/products/product2.jpg";
import product3 from "@images/products/product3.jpg";
import product4 from "@images/products/product4.jpg";
import Image from "next/image";
export default function GetProducts() {
	return (
		<>
			<section className="flat-spacing-2">
				<div className="container">
					<SectionTitle text="Our All Products" />
					<div className="tf-shop-control grid-2 align-items-center justify-content-between ">
						<div className="tf-control-filter">
							<a
								href="#filterShop"
								data-bs-toggle="offcanvas"
								aria-controls="offcanvasLeft"
								className="tf-btn-filter"
							>
								<span className="icon icon-filter" />
								<span className="text">Filter</span>
							</a>
						</div>

						<div className="tf-control-sorting d-flex justify-content-end">
							<div className="tf-dropdown-sort" data-bs-toggle="dropdown">
								<div className="btn-select">
									<span className="text-sort-value">Default</span>
									<span className="icon icon-arrow-down" />
								</div>
								<div className="dropdown-menu">
									<div className="select-item active">
										<span className="text-value-item">Default</span>
									</div>
									<div className="select-item ">
										<span className="text-value-item">Alphabetically, A-Z</span>
									</div>
									<div className="select-item ">
										<span className="text-value-item">Alphabetically, Z-A</span>
									</div>
									<div className="select-item ">
										<span className="text-value-item">Price, low to high</span>
									</div>
									<div className="select-item ">
										<span className="text-value-item">Price, high to low</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="wrapper-control-shop">
						{/* <div
							style={{
								width: "fit-content",
								margin: "0px auto 24px",
								fontSize: 17,
							}}
						>
							12 product(s) found
						</div> */}
						<div className="grid-layout wrapper-shop" data-grid="grid-4">
							<div className="card-product fl-item">
								<div className="card-product-wrapper">
									<a className="product-img" href="/product-detail/1">
										<Image
											data-src="/images/products/orange-1.jpg"
											alt="image-product"
											loading="lazy"
											width={720}
											height={1005}
											placeholder="blur"
											className="lazyload img-product"
											src={product1}
											style={{ color: "transparent" }}
										/>
										<Image
											data-src="/images/products/orange-1.jpg"
											alt="image-product"
											loading="lazy"
											width={720}
											height={1005}
											placeholder="blur"
											className="lazyload img-hover"
											src={product1}
											style={{ color: "transparent" }}
										/>
									</a>
									<div className="list-product-btn">
										<a
											href="#quick_add"
											data-bs-toggle="modal"
											className="box-icon bg_white quick-add tf-btn-loading"
										>
											<span className="icon icon-bag" />
											<span className="tooltip">Quick Add</span>
										</a>
										<a className="box-icon bg_white wishlist btn-icon-action">
											<span className="icon icon-heart " />
											<span className="tooltip"> Add To Wishlisted</span>
											<span className="icon icon-delete" />
										</a>
										<a
											href="#compare"
											data-bs-toggle="offcanvas"
											aria-controls="offcanvasLeft"
											className="box-icon bg_white compare btn-icon-action"
										>
											<span className="icon icon-share  " />
											<span className="tooltip"> Share </span>
											<span className="icon icon-check" />
										</a>
										<a
											href="#quick_view"
											data-bs-toggle="modal"
											className="box-icon bg_white quickview tf-btn-loading"
										>
											<span className="icon icon-view" />
											<span className="tooltip">Quick View</span>
										</a>
									</div>
								</div>
								<div className="card-product-info">
									<a className="title link" href="/product-detail/1">
										PLATE OF EGGS
									</a>
									<span className="price">$16.95</span>
								</div>
							</div>
							<div className="card-product fl-item">
								<div className="card-product-wrapper">
									<a className="product-img" href="/product-detail/1">
										<Image
											data-src="/images/products/orange-1.jpg"
											alt="image-product"
											loading="lazy"
											width={720}
											height={1005}
											placeholder="blur"
											className="lazyload img-product"
											src={product2}
											style={{ color: "transparent" }}
										/>
										<Image
											data-src="/images/products/orange-1.jpg"
											alt="image-product"
											loading="lazy"
											width={720}
											height={1005}
											placeholder="blur"
											className="lazyload img-hover"
											src={product2}
											style={{ color: "transparent" }}
										/>
									</a>
									<div className="list-product-btn">
										<a
											href="#quick_add"
											data-bs-toggle="modal"
											className="box-icon bg_white quick-add tf-btn-loading"
										>
											<span className="icon icon-bag" />
											<span className="tooltip">Quick Add</span>
										</a>
										<a className="box-icon bg_white wishlist btn-icon-action">
											<span className="icon icon-heart " />
											<span className="tooltip"> Add To Wishlisted</span>
											<span className="icon icon-delete" />
										</a>
										<a
											href="#compare"
											data-bs-toggle="offcanvas"
											aria-controls="offcanvasLeft"
											className="box-icon bg_white compare btn-icon-action"
										>
											<span className="icon icon-share  " />
											<span className="tooltip"> Share </span>
											<span className="icon icon-check" />
										</a>
										<a
											href="#quick_view"
											data-bs-toggle="modal"
											className="box-icon bg_white quickview tf-btn-loading"
										>
											<span className="icon icon-view" />
											<span className="tooltip">Quick View</span>
										</a>
									</div>
								</div>
								<div className="card-product-info">
									<a className="title link" href="/product-detail/1">
										PLATE OF EGGS
									</a>
									<span className="price">$16.95</span>
								</div>
							</div>
							<div className="card-product fl-item">
								<div className="card-product-wrapper">
									<a className="product-img" href="/product-detail/1">
										<Image
											data-src="/images/products/orange-1.jpg"
											alt="image-product"
											loading="lazy"
											width={720}
											height={1005}
											placeholder="blur"
											className="lazyload img-product"
											src={product3}
											style={{ color: "transparent" }}
										/>
										<Image
											data-src="/images/products/orange-1.jpg"
											alt="image-product"
											loading="lazy"
											width={720}
											height={1005}
											placeholder="blur"
											className="lazyload img-hover"
											src={product3}
											style={{ color: "transparent" }}
										/>
									</a>
									<div className="list-product-btn">
										<a
											href="#quick_add"
											data-bs-toggle="modal"
											className="box-icon bg_white quick-add tf-btn-loading"
										>
											<span className="icon icon-bag" />
											<span className="tooltip">Quick Add</span>
										</a>
										<a className="box-icon bg_white wishlist btn-icon-action">
											<span className="icon icon-heart " />
											<span className="tooltip"> Add To Wishlisted</span>
											<span className="icon icon-delete" />
										</a>
										<a
											href="#compare"
											data-bs-toggle="offcanvas"
											aria-controls="offcanvasLeft"
											className="box-icon bg_white compare btn-icon-action"
										>
											<span className="icon icon-share  " />
											<span className="tooltip"> Share </span>
											<span className="icon icon-check" />
										</a>
										<a
											href="#quick_view"
											data-bs-toggle="modal"
											className="box-icon bg_white quickview tf-btn-loading"
										>
											<span className="icon icon-view" />
											<span className="tooltip">Quick View</span>
										</a>
									</div>
								</div>
								<div className="card-product-info">
									<a className="title link" href="/product-detail/1">
										PLATE OF EGGS
									</a>
									<span className="price">$16.95</span>
								</div>
							</div>
							<div className="card-product fl-item">
								<div className="card-product-wrapper">
									<a className="product-img" href="/product-detail/1">
										<Image
											data-src="/images/products/orange-1.jpg"
											alt="image-product"
											loading="lazy"
											width={720}
											height={1005}
											placeholder="blur"
											className="lazyload img-product"
											src={product4}
											style={{ color: "transparent" }}
										/>
										<Image
											data-src="/images/products/orange-1.jpg"
											alt="image-product"
											loading="lazy"
											width={720}
											height={1005}
											placeholder="blur"
											className="lazyload img-hover"
											src={product4}
											style={{ color: "transparent" }}
										/>
									</a>
									<div className="list-product-btn">
										<a
											href="#quick_add"
											data-bs-toggle="modal"
											className="box-icon bg_white quick-add tf-btn-loading"
										>
											<span className="icon icon-bag" />
											<span className="tooltip">Quick Add</span>
										</a>
										<a className="box-icon bg_white wishlist btn-icon-action">
											<span className="icon icon-heart " />
											<span className="tooltip"> Add To Wishlisted</span>
											<span className="icon icon-delete" />
										</a>
										<a
											href="#compare"
											data-bs-toggle="offcanvas"
											aria-controls="offcanvasLeft"
											className="box-icon bg_white compare btn-icon-action"
										>
											<span className="icon icon-share  " />
											<span className="tooltip"> Share </span>
											<span className="icon icon-check" />
										</a>
										<a
											href="#quick_view"
											data-bs-toggle="modal"
											className="box-icon bg_white quickview tf-btn-loading"
										>
											<span className="icon icon-view" />
											<span className="tooltip">Quick View</span>
										</a>
									</div>
								</div>
								<div className="card-product-info">
									<a className="title link" href="/product-detail/1">
										PLATE OF EGGS
									</a>
									<span className="price">$16.95</span>
								</div>
							</div>
						</div>

						<ul className="tf-pagination-wrap tf-pagination-list tf-pagination-btn">
							<li className="active">
								<a className="pagination-link">1</a>
							</li>
							<li className>
								<a className="pagination-link animate-hover-btn">2</a>
							</li>
							<li className>
								<a className="pagination-link animate-hover-btn">3</a>
							</li>
							<li className>
								<a className="pagination-link animate-hover-btn">4</a>
							</li>
							<li>
								<a className="pagination-link animate-hover-btn">
									<span className="icon icon-arrow-right" />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</section>
			<FilterOffcanvas />
		</>
	);
}
