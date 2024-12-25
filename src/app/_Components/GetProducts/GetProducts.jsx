import React from "react";
import FilterOffcanvas from "../FilterOffcanvas/FilterOffcanvas";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function GetProducts() {



	  
	return (
		<>
	
			<section className="flat-spacing-2">
				<div className="container">
				<SectionTitle text="Popular products"/>
					<div className="tf-shop-control grid-3 align-items-center ">
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
						<ul className="tf-control-layout d-flex justify-content-center">
							<li className="tf-view-layout-switch sw-layout-2 ">
								<div className="item">
									<span className="icon icon-grid-2" />
								</div>
							</li>
							<li className="tf-view-layout-switch sw-layout-3 ">
								<div className="item">
									<span className="icon icon-grid-3" />
								</div>
							</li>
							<li className="tf-view-layout-switch sw-layout-4 active">
								<div className="item">
									<span className="icon icon-grid-4" />
								</div>
							</li>
							<li className="tf-view-layout-switch sw-layout-5 ">
								<div className="item">
									<span className="icon icon-grid-5" />
								</div>
							</li>
							<li className="tf-view-layout-switch sw-layout-6 ">
								<div className="item">
									<span className="icon icon-grid-6" />
								</div>
							</li>
						</ul>
						<div className="tf-control-sorting d-flex justify-content-end">
							<div className="tf-dropdown-sort" data-bs-toggle="dropdown">
								{" "}
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
						<div className="meta-filter-shop" />
						<div
							style={{
								width: "fit-content",
								margin: "0px auto 24px",
								fontSize: 17,
							}}
						>
							12 product(s) found
						</div>
						<div className="grid-layout wrapper-shop" data-grid="grid-4">
							<div className="card-product fl-item">
								<div className="card-product-wrapper">
									<a className="product-img" href="/product-detail/1">
										<img
											data-src="/images/products/orange-1.jpg"
											alt="image-product"
											loading="lazy"
											width={720}
											height={1005}
											decoding="async"
											data-nimg={1}
											className="lazyload img-product"
											src="/images/products/orange-1.jpg"
											style={{ color: "transparent" }}
										/>
										<img
											data-src="/images/products/white-1.jpg"
											alt="image-product"
											loading="lazy"
											width={720}
											height={1005}
											decoding="async"
											data-nimg={1}
											className="lazyload img-hover"
											src="/images/products/white-1.jpg"
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
											<span className="icon icon-heart added" />
											<span className="tooltip">Already Wishlisted</span>
											<span className="icon icon-delete" />
										</a>
										<a
											href="#compare"
											data-bs-toggle="offcanvas"
											aria-controls="offcanvasLeft"
											className="box-icon bg_white compare btn-icon-action"
										>
											<span className="icon icon-compare added" />
											<span className="tooltip"> Already Compared</span>
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
									<div className="size-list">
										<span>S</span>
										<span>M</span>
										<span>L</span>
										<span>XL</span>
									</div>
								</div>
								<div className="card-product-info">
									<a className="title link" href="/product-detail/1">
										Ribbed Tank Top
									</a>
									<span className="price">$16.95</span>
									<ul className="list-color-product">
										<li className="list-color-item color-swatch active ">
											<span className="tooltip">Orange</span>
											<span className="swatch-value bg_orange-3" />
											<img
												data-src="/images/products/orange-1.jpg"
												alt="image-product"
												loading="lazy"
												width={720}
												height={1005}
												decoding="async"
												data-nimg={1}
												className="lazyload"
												src="/images/products/orange-1.jpg"
												style={{ color: "transparent" }}
											/>
										</li>
										<li className="list-color-item color-swatch  ">
											<span className="tooltip">Black</span>
											<span className="swatch-value bg_dark" />
											<img
												data-src="/images/products/black-1.jpg"
												alt="image-product"
												loading="lazy"
												width={720}
												height={1005}
												decoding="async"
												data-nimg={1}
												className="lazyload"
												src="/images/products/black-1.jpg"
												style={{ color: "transparent" }}
											/>
										</li>
										<li className="list-color-item color-swatch  ">
											<span className="tooltip">White</span>
											<span className="swatch-value bg_white" />
											<img
												data-src="/images/products/white-1.jpg"
												alt="image-product"
												loading="lazy"
												width={720}
												height={1005}
												decoding="async"
												data-nimg={1}
												className="lazyload"
												src="/images/products/white-1.jpg"
												style={{ color: "transparent" }}
											/>
										</li>
									</ul>
								</div>
							</div>
							<div className="card-product fl-item">
								<div className="card-product-wrapper">
									<a className="product-img" href="/product-detail/2">
										<img
											data-src="/images/products/brown.jpg"
											alt="image-product"
											loading="lazy"
											width={720}
											height={1005}
											decoding="async"
											data-nimg={1}
											className="lazyload img-product"
											src="/images/products/brown.jpg"
											style={{ color: "transparent" }}
										/>
										<img
											data-src="/images/products/purple.jpg"
											alt="image-product"
											loading="lazy"
											width={720}
											height={1005}
											decoding="async"
											data-nimg={1}
											className="lazyload img-hover"
											src="/images/products/purple.jpg"
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
											<span className="icon icon-heart added" />
											<span className="tooltip">Already Wishlisted</span>
											<span className="icon icon-delete" />
										</a>
										<a
											href="#compare"
											data-bs-toggle="offcanvas"
											aria-controls="offcanvasLeft"
											className="box-icon bg_white compare btn-icon-action"
										>
											<span className="icon icon-compare added" />
											<span className="tooltip"> Already Compared</span>
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
									<div className="countdown-box">
										<div className="js-countdown">
											<div aria-hidden="true" className="countdown__timer">
												<span className="countdown__item">
													<span className="countdown__value countdown__value--0 js-countdown__value--0">
														163{" "}
													</span>
													<span className="countdown__label">d :</span>
												</span>
												<span className="countdown__item">
													<span className="countdown__value countdown__value--1 js-countdown__value--1">
														5{" "}
													</span>
													<span className="countdown__label">h :</span>
												</span>
												<span className="countdown__item">
													<span className="countdown__value countdown__value--2 js-countdown__value--2">
														48{" "}
													</span>
													<span className="countdown__label">m :</span>
												</span>
												<span className="countdown__item">
													<span className="countdown__value countdown__value--3 js-countdown__value--3">
														28{" "}
													</span>
													<span className="countdown__label">s</span>
												</span>
											</div>
										</div>
									</div>
									<div className="size-list">
										<span>M</span>
										<span>L</span>
										<span>XL</span>
									</div>
								</div>
								<div className="card-product-info">
									<a className="title link" href="/product-detail/2">
										Ribbed Modal T-shirt
									</a>
									<span className="price">$18.95</span>
									<ul className="list-color-product">
										<li className="list-color-item color-swatch active ">
											<span className="tooltip">Brown</span>
											<span className="swatch-value bg_brown" />
											<img
												data-src="/images/products/brown.jpg"
												alt="image-product"
												loading="lazy"
												width={720}
												height={1005}
												decoding="async"
												data-nimg={1}
												className="lazyload"
												src="/images/products/brown.jpg"
												style={{ color: "transparent" }}
											/>
										</li>
										<li className="list-color-item color-swatch  ">
											<span className="tooltip">Light Purple</span>
											<span className="swatch-value bg_purple" />
											<img
												data-src="/images/products/purple.jpg"
												alt="image-product"
												loading="lazy"
												width={720}
												height={1005}
												decoding="async"
												data-nimg={1}
												className="lazyload"
												src="/images/products/purple.jpg"
												style={{ color: "transparent" }}
											/>
										</li>
										<li className="list-color-item color-swatch  ">
											<span className="tooltip">Light Green</span>
											<span className="swatch-value bg_light-green" />
											<img
												data-src="/images/products/green.jpg"
												alt="image-product"
												loading="lazy"
												width={720}
												height={1005}
												decoding="async"
												data-nimg={1}
												className="lazyload"
												src="/images/products/green.jpg"
												style={{ color: "transparent" }}
											/>
										</li>
									</ul>
								</div>
							</div>
							<div className="card-product fl-item">
								<div className="card-product-wrapper">
									<a className="product-img" href="/product-detail/3">
										<img
											data-src="/images/products/white-3.jpg"
											alt="image-product"
											loading="lazy"
											width={720}
											height={1005}
											decoding="async"
											data-nimg={1}
											className="lazyload img-product"
											src="/images/products/white-3.jpg"
											style={{ color: "transparent" }}
										/>
										<img
											data-src="/images/products/white-4.jpg"
											alt="image-product"
											loading="lazy"
											width={720}
											height={1005}
											decoding="async"
											data-nimg={1}
											className="lazyload img-hover"
											src="/images/products/white-4.jpg"
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
											<span className="icon icon-heart added" />
											<span className="tooltip">Already Wishlisted</span>
											<span className="icon icon-delete" />
										</a>
										<a
											href="#compare"
											data-bs-toggle="offcanvas"
											aria-controls="offcanvasLeft"
											className="box-icon bg_white compare btn-icon-action"
										>
											<span className="icon icon-compare added" />
											<span className="tooltip"> Already Compared</span>
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
									<div className="size-list">
										<span>S</span>
										<span>M</span>
										<span>L</span>
										<span>XL</span>
									</div>
								</div>
								<div className="card-product-info">
									<a className="title link" href="/product-detail/3">
										Oversized Printed T-shirt
									</a>
									<span className="price">$10.00</span>
								</div>
							</div>
							<div className="card-product fl-item">
								<div className="card-product-wrapper">
									<a className="product-img" href="/product-detail/4">
										<img
											data-src="/images/products/white-2.jpg"
											alt="image-product"
											loading="lazy"
											width={720}
											height={1005}
											decoding="async"
											data-nimg={1}
											className="lazyload img-product"
											src="/images/products/black-2.jpg"
											style={{ color: "transparent" }}
										/>
										<img
											data-src="/images/products/pink-1.jpg"
											alt="image-product"
											loading="lazy"
											width={720}
											height={1005}
											decoding="async"
											data-nimg={1}
											className="lazyload img-hover"
											src="/images/products/pink-1.jpg"
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
											<span className="tooltip">Add to Wishlist</span>
											<span className="icon icon-delete" />
										</a>
										<a
											href="#compare"
											data-bs-toggle="offcanvas"
											aria-controls="offcanvasLeft"
											className="box-icon bg_white compare btn-icon-action"
										>
											<span className="icon icon-compare " />
											<span className="tooltip"> Add to Compare</span>
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
									<div className="size-list">
										<span>S</span>
										<span>M</span>
										<span>L</span>
										<span>XL</span>
									</div>
								</div>
								<div className="card-product-info">
									<a className="title link" href="/product-detail/4">
										Oversized Printed T-shirt
									</a>
									<span className="price">$16.95</span>
									<ul className="list-color-product">
										<li className="list-color-item color-swatch  ">
											<span className="tooltip">White</span>
											<span className="swatch-value bg_white" />
											<img
												data-src="/images/products/white-2.jpg"
												alt="image-product"
												loading="lazy"
												width={720}
												height={1005}
												decoding="async"
												data-nimg={1}
												className="lazyload"
												src="/images/products/white-2.jpg"
												style={{ color: "transparent" }}
											/>
										</li>
										<li className="list-color-item color-swatch  ">
											<span className="tooltip">Pink</span>
											<span className="swatch-value bg_purple" />
											<img
												data-src="/images/products/pink-1.jpg"
												alt="image-product"
												loading="lazy"
												width={720}
												height={1005}
												decoding="async"
												data-nimg={1}
												className="lazyload"
												src="/images/products/pink-1.jpg"
												style={{ color: "transparent" }}
											/>
										</li>
										<li className="list-color-item color-swatch active ">
											<span className="tooltip">Black</span>
											<span className="swatch-value bg_dark" />
											<img
												data-src="/images/products/black-2.jpg"
												alt="image-product"
												loading="lazy"
												width={720}
												height={1005}
												decoding="async"
												data-nimg={1}
												className="lazyload"
												src="/images/products/black-2.jpg"
												style={{ color: "transparent" }}
											/>
										</li>
									</ul>
								</div>
							</div>
							<div className="card-product fl-item">
								<div className="card-product-wrapper">
									<a className="product-img" href="/product-detail/5">
										<img
											data-src="/images/products/brown-2.jpg"
											alt="image-product"
											loading="lazy"
											width={720}
											height={1005}
											decoding="async"
											data-nimg={1}
											className="lazyload img-product"
											src="/images/products/brown-2.jpg"
											style={{ color: "transparent" }}
										/>
										<img
											data-src="/images/products/brown-3.jpg"
											alt="image-product"
											loading="lazy"
											width={720}
											height={1005}
											decoding="async"
											data-nimg={1}
											className="lazyload img-hover"
											src="/images/products/brown-3.jpg"
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
											<span className="tooltip">Add to Wishlist</span>
											<span className="icon icon-delete" />
										</a>
										<a
											href="#compare"
											data-bs-toggle="offcanvas"
											aria-controls="offcanvasLeft"
											className="box-icon bg_white compare btn-icon-action"
										>
											<span className="icon icon-compare " />
											<span className="tooltip"> Add to Compare</span>
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
									<div className="size-list">
										<span>S</span>
										<span>M</span>
										<span>L</span>
										<span>XL</span>
									</div>
								</div>
								<div className="card-product-info">
									<a className="title link" href="/product-detail/5">
										V-neck Linen T-shirt
									</a>
									<span className="price">$14.95</span>
									<ul className="list-color-product">
										<li className="list-color-item color-swatch active ">
											<span className="tooltip">Brown</span>
											<span className="swatch-value bg_brown" />
											<img
												data-src="/images/products/brown-2.jpg"
												alt="image-product"
												loading="lazy"
												width={720}
												height={1005}
												decoding="async"
												data-nimg={1}
												className="lazyload"
												src="/images/products/brown-2.jpg"
												style={{ color: "transparent" }}
											/>
										</li>
										<li className="list-color-item color-swatch  ">
											<span className="tooltip">White</span>
											<span className="swatch-value bg_white" />
											<img
												data-src="/images/products/white-5.jpg"
												alt="image-product"
												loading="lazy"
												width={720}
												height={1005}
												decoding="async"
												data-nimg={1}
												className="lazyload"
												src="/images/products/white-5.jpg"
												style={{ color: "transparent" }}
											/>
										</li>
									</ul>
								</div>
							</div>
							<div className="card-product fl-item">
								<div className="card-product-wrapper">
									<a className="product-img" href="/product-detail/6">
										<img
											data-src="/images/products/light-green-1.jpg"
											alt="image-product"
											loading="lazy"
											width={720}
											height={1005}
											decoding="async"
											data-nimg={1}
											className="lazyload img-product"
											src="/images/products/light-green-1.jpg"
											style={{ color: "transparent" }}
										/>
										<img
											data-src="/images/products/light-green-2.jpg"
											alt="image-product"
											loading="lazy"
											width={720}
											height={1005}
											decoding="async"
											data-nimg={1}
											className="lazyload img-hover"
											src="/images/products/light-green-2.jpg"
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
											<span className="tooltip">Add to Wishlist</span>
											<span className="icon icon-delete" />
										</a>
										<a
											href="#compare"
											data-bs-toggle="offcanvas"
											aria-controls="offcanvasLeft"
											className="box-icon bg_white compare btn-icon-action"
										>
											<span className="icon icon-compare " />
											<span className="tooltip"> Add to Compare</span>
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
									<a className="title link" href="/product-detail/6">
										Loose Fit Sweatshirt
									</a>
									<span className="price">$10.00</span>
									<ul className="list-color-product">
										<li className="list-color-item color-swatch active ">
											<span className="tooltip">Light Green</span>
											<span className="swatch-value bg_light-green" />
											<img
												data-src="/images/products/light-green-1.jpg"
												alt="image-product"
												loading="lazy"
												width={720}
												height={1005}
												decoding="async"
												data-nimg={1}
												className="lazyload"
												src="/images/products/light-green-1.jpg"
												style={{ color: "transparent" }}
											/>
										</li>
										<li className="list-color-item color-swatch  ">
											<span className="tooltip">Black</span>
											<span className="swatch-value bg_dark" />
											<img
												data-src="/images/products/black-3.jpg"
												alt="image-product"
												loading="lazy"
												width={720}
												height={1005}
												decoding="async"
												data-nimg={1}
												className="lazyload"
												src="/images/products/black-3.jpg"
												style={{ color: "transparent" }}
											/>
										</li>
										<li className="list-color-item color-swatch  ">
											<span className="tooltip">Blue</span>
											<span className="swatch-value bg_blue-2" />
											<img
												data-src="/images/products/blue.jpg"
												alt="image-product"
												loading="lazy"
												width={720}
												height={1005}
												decoding="async"
												data-nimg={1}
												className="lazyload"
												src="/images/products/blue.jpg"
												style={{ color: "transparent" }}
											/>
										</li>
										<li className="list-color-item color-swatch  ">
											<span className="tooltip">Dark Blue</span>
											<span className="swatch-value bg_dark-blue" />
											<img
												data-src="/images/products/dark-blue.jpg"
												alt="image-product"
												loading="lazy"
												width={720}
												height={1005}
												decoding="async"
												data-nimg={1}
												className="lazyload"
												src="/images/products/dark-blue.jpg"
												style={{ color: "transparent" }}
											/>
										</li>
										<li className="list-color-item color-swatch  ">
											<span className="tooltip">White</span>
											<span className="swatch-value bg_white" />
											<img
												data-src="/images/products/white-6.jpg"
												alt="image-product"
												loading="lazy"
												width={720}
												height={1005}
												decoding="async"
												data-nimg={1}
												className="lazyload"
												src="/images/products/white-6.jpg"
												style={{ color: "transparent" }}
											/>
										</li>
										<li className="list-color-item color-swatch  ">
											<span className="tooltip">Light Grey</span>
											<span className="swatch-value bg_light-grey" />
											<img
												data-src="/images/products/light-grey.jpg"
												alt="image-product"
												loading="lazy"
												width={720}
												height={1005}
												decoding="async"
												data-nimg={1}
												className="lazyload"
												src="/images/products/light-grey.jpg"
												style={{ color: "transparent" }}
											/>
										</li>
									</ul>
								</div>
							</div>
							<div className="card-product fl-item">
								<div className="card-product-wrapper">
									<a className="product-img" href="/product-detail/7">
										<img
											data-src="/images/products/black-4.jpg"
											alt="image-product"
											loading="lazy"
											width={720}
											height={1005}
											decoding="async"
											data-nimg={1}
											className="lazyload img-product"
											src="/images/products/black-4.jpg"
											style={{ color: "transparent" }}
										/>
										<img
											data-src="/images/products/black-5.jpg"
											alt="image-product"
											loading="lazy"
											width={720}
											height={1005}
											decoding="async"
											data-nimg={1}
											className="lazyload img-hover"
											src="/images/products/black-5.jpg"
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
											<span className="tooltip">Add to Wishlist</span>
											<span className="icon icon-delete" />
										</a>
										<a
											href="#compare"
											data-bs-toggle="offcanvas"
											aria-controls="offcanvasLeft"
											className="box-icon bg_white compare btn-icon-action"
										>
											<span className="icon icon-compare " />
											<span className="tooltip"> Add to Compare</span>
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
									<div className="size-list">
										<span>S</span>
										<span>M</span>
										<span>L</span>
									</div>
								</div>
								<div className="card-product-info">
									<a className="title link" href="/product-detail/7">
										Regular Fit Oxford Shirt
									</a>
									<span className="price">$10.00</span>
									<ul className="list-color-product">
										<li className="list-color-item color-swatch active ">
											<span className="tooltip">Black</span>
											<span className="swatch-value bg_dark" />
											<img
												data-src="/images/products/black-4.jpg"
												alt="image-product"
												loading="lazy"
												width={720}
												height={1005}
												decoding="async"
												data-nimg={1}
												className="lazyload"
												src="/images/products/black-4.jpg"
												style={{ color: "transparent" }}
											/>
										</li>
										<li className="list-color-item color-swatch  ">
											<span className="tooltip">Dark Blue</span>
											<span className="swatch-value bg_dark-blue" />
											<img
												data-src="/images/products/dark-blue-2.jpg"
												alt="image-product"
												loading="lazy"
												width={720}
												height={1005}
												decoding="async"
												data-nimg={1}
												className="lazyload"
												src="/images/products/dark-blue-2.jpg"
												style={{ color: "transparent" }}
											/>
										</li>
										<li className="list-color-item color-swatch  ">
											<span className="tooltip">Beige</span>
											<span className="swatch-value bg_beige" />
											<img
												data-src="/images/products/beige.jpg"
												alt="image-product"
												loading="lazy"
												width={720}
												height={1005}
												decoding="async"
												data-nimg={1}
												className="lazyload"
												src="/images/products/beige.jpg"
												style={{ color: "transparent" }}
											/>
										</li>
										<li className="list-color-item color-swatch  ">
											<span className="tooltip">Light Blue</span>
											<span className="swatch-value bg_light-blue" />
											<img
												data-src="/images/products/light-blue.jpg"
												alt="image-product"
												loading="lazy"
												width={720}
												height={1005}
												decoding="async"
												data-nimg={1}
												className="lazyload"
												src="/images/products/light-blue.jpg"
												style={{ color: "transparent" }}
											/>
										</li>
										<li className="list-color-item color-swatch  ">
											<span className="tooltip">White</span>
											<span className="swatch-value bg_white" />
											<img
												data-src="/images/products/white-7.jpg"
												alt="image-product"
												loading="lazy"
												width={720}
												height={1005}
												decoding="async"
												data-nimg={1}
												className="lazyload"
												src="/images/products/white-7.jpg"
												style={{ color: "transparent" }}
											/>
										</li>
									</ul>
								</div>
							</div>
							<div className="card-product fl-item">
								<div className="card-product-wrapper">
									<a className="product-img" href="/product-detail/8">
										<img
											data-src="/images/products/white-8.jpg"
											alt="image-product"
											loading="lazy"
											width={720}
											height={1005}
											decoding="async"
											data-nimg={1}
											className="lazyload img-product"
											src="/images/products/white-8.jpg"
											style={{ color: "transparent" }}
										/>
										<img
											data-src="/images/products/black-6.jpg"
											alt="image-product"
											loading="lazy"
											width={720}
											height={1005}
											decoding="async"
											data-nimg={1}
											className="lazyload img-hover"
											src="/images/products/black-6.jpg"
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
											<span className="tooltip">Add to Wishlist</span>
											<span className="icon icon-delete" />
										</a>
										<a
											href="#compare"
											data-bs-toggle="offcanvas"
											aria-controls="offcanvasLeft"
											className="box-icon bg_white compare btn-icon-action"
										>
											<span className="icon icon-compare " />
											<span className="tooltip"> Add to Compare</span>
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
									<div className="size-list">
										<span>S</span>
										<span>M</span>
										<span>L</span>
										<span>XL</span>
									</div>
								</div>
								<div className="card-product-info">
									<a className="title link" href="/product-detail/8">
										Stylish T-shirt
									</a>
									<span className="price">$12.00</span>
								</div>
							</div>
							<div className="card-product fl-item">
								<div className="card-product-wrapper">
									<a className="product-img" href="/product-detail/9">
										<img
											data-src="/images/products/brown-4.jpg"
											alt="image-product"
											loading="lazy"
											width={720}
											height={1005}
											decoding="async"
											data-nimg={1}
											className="lazyload img-product"
											src="/images/products/brown-4.jpg"
											style={{ color: "transparent" }}
										/>
										<img
											data-src="/images/products/black-8.jpg"
											alt="image-product"
											loading="lazy"
											width={720}
											height={1005}
											decoding="async"
											data-nimg={1}
											className="lazyload img-hover"
											src="/images/products/black-8.jpg"
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
											<span className="tooltip">Add to Wishlist</span>
											<span className="icon icon-delete" />
										</a>
										<a
											href="#compare"
											data-bs-toggle="offcanvas"
											aria-controls="offcanvasLeft"
											className="box-icon bg_white compare btn-icon-action"
										>
											<span className="icon icon-compare " />
											<span className="tooltip"> Add to Compare</span>
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
									<div className="size-list">
										<span>M</span>
										<span>L</span>
										<span>XL</span>
									</div>
								</div>
								<div className="card-product-info">
									<a className="title link" href="/product-detail/9">
										Patterned scarf
									</a>
									<span className="price">$14.95</span>
									<ul className="list-color-product">
										<li className="list-color-item color-swatch active ">
											<span className="tooltip">Brown</span>
											<span className="swatch-value bg_brown" />
											<img
												data-src="/images/products/brown-4.jpg"
												alt="image-product"
												loading="lazy"
												width={720}
												height={1005}
												decoding="async"
												data-nimg={1}
												className="lazyload"
												src="/images/products/brown-4.jpg"
												style={{ color: "transparent" }}
											/>
										</li>
										<li className="list-color-item color-swatch  ">
											<span className="tooltip">Black</span>
											<span className="swatch-value bg_dark" />
											<img
												data-src="/images/products/black-8.jpg"
												alt="image-product"
												loading="lazy"
												width={720}
												height={1005}
												decoding="async"
												data-nimg={1}
												className="lazyload"
												src="/images/products/black-8.jpg"
												style={{ color: "transparent" }}
											/>
										</li>
									</ul>
								</div>
							</div>
							<div className="card-product fl-item">
								<div className="card-product-wrapper">
									<a className="product-img" href="/product-detail/10">
										<img
											data-src="/images/products/black-9.jpg"
											alt="image-product"
											loading="lazy"
											width={720}
											height={1005}
											decoding="async"
											data-nimg={1}
											className="lazyload img-product"
											src="/images/products/black-9.jpg"
											style={{ color: "transparent" }}
										/>
										<img
											data-src="/images/products/black-10.jpg"
											alt="image-product"
											loading="lazy"
											width={720}
											height={1005}
											decoding="async"
											data-nimg={1}
											className="lazyload img-hover"
											src="/images/products/black-10.jpg"
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
											<span className="tooltip">Add to Wishlist</span>
											<span className="icon icon-delete" />
										</a>
										<a
											href="#compare"
											data-bs-toggle="offcanvas"
											aria-controls="offcanvasLeft"
											className="box-icon bg_white compare btn-icon-action"
										>
											<span className="icon icon-compare " />
											<span className="tooltip"> Add to Compare</span>
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
									<div className="size-list">
										<span>S</span>
										<span>M</span>
										<span>L</span>
									</div>
								</div>
								<div className="card-product-info">
									<a className="title link" href="/product-detail/10">
										Slim Fit Fine-knit Turtleneck Sweater
									</a>
									<span className="price">$18.95</span>
									<ul className="list-color-product">
										<li className="list-color-item color-swatch active ">
											<span className="tooltip">Black</span>
											<span className="swatch-value bg_dark" />
											<img
												data-src="/images/products/black-9.jpg"
												alt="image-product"
												loading="lazy"
												width={720}
												height={1005}
												decoding="async"
												data-nimg={1}
												className="lazyload"
												src="/images/products/black-9.jpg"
												style={{ color: "transparent" }}
											/>
										</li>
										<li className="list-color-item color-swatch  ">
											<span className="tooltip">White</span>
											<span className="swatch-value bg_white" />
											<img
												data-src="/images/products/white-9.jpg"
												alt="image-product"
												loading="lazy"
												width={720}
												height={1005}
												decoding="async"
												data-nimg={1}
												className="lazyload"
												src="/images/products/white-9.jpg"
												style={{ color: "transparent" }}
											/>
										</li>
									</ul>
								</div>
							</div>
							<div className="card-product fl-item">
								<div className="card-product-wrapper">
									<a className="product-img" href="/product-detail/11">
										<img
											data-src="/images/products/grey-2.jpg"
											alt="image-product"
											loading="lazy"
											width={720}
											height={1005}
											decoding="async"
											data-nimg={1}
											className="lazyload img-product"
											src="/images/products/grey-2.jpg"
											style={{ color: "transparent" }}
										/>
										<img
											data-src="/images/products/grey.jpg"
											alt="image-product"
											loading="lazy"
											width={720}
											height={1005}
											decoding="async"
											data-nimg={1}
											className="lazyload img-hover"
											src="/images/products/grey.jpg"
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
											<span className="tooltip">Add to Wishlist</span>
											<span className="icon icon-delete" />
										</a>
										<a
											href="#compare"
											data-bs-toggle="offcanvas"
											aria-controls="offcanvasLeft"
											className="box-icon bg_white compare btn-icon-action"
										>
											<span className="icon icon-compare " />
											<span className="tooltip"> Add to Compare</span>
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
									<div className="size-list">
										<span>S</span>
										<span>M</span>
										<span>L</span>
									</div>
								</div>
								<div className="card-product-info">
									<a className="title link" href="/product-detail/11">
										Slim Fit Fine-knit Turtleneck Sweater
									</a>
									<span className="price">$18.95</span>
									<ul className="list-color-product">
										<li className="list-color-item color-swatch active ">
											<span className="tooltip">Grey</span>
											<span className="swatch-value bg_grey" />
											<img
												data-src="/images/products/grey-2.jpg"
												alt="image-product"
												loading="lazy"
												width={720}
												height={1005}
												decoding="async"
												data-nimg={1}
												className="lazyload"
												src="/images/products/grey-2.jpg"
												style={{ color: "transparent" }}
											/>
										</li>
										<li className="list-color-item color-swatch  ">
											<span className="tooltip">Pink</span>
											<span className="swatch-value bg_pink" />
											<img
												data-src="/images/products/pink-2.jpg"
												alt="image-product"
												loading="lazy"
												width={720}
												height={1005}
												decoding="async"
												data-nimg={1}
												className="lazyload"
												src="/images/products/pink-2.jpg"
												style={{ color: "transparent" }}
											/>
										</li>
										<li className="list-color-item color-swatch  ">
											<span className="tooltip">Light Pink</span>
											<span className="swatch-value bg_light-pink" />
											<img
												data-src="/images/products/light-pink.jpg"
												alt="image-product"
												loading="lazy"
												width={720}
												height={1005}
												decoding="async"
												data-nimg={1}
												className="lazyload"
												src="/images/products/light-pink.jpg"
												style={{ color: "transparent" }}
											/>
										</li>
									</ul>
								</div>
							</div>
							<div className="card-product fl-item">
								<div className="card-product-wrapper">
									<a className="product-img" href="/product-detail/12">
										<img
											data-src="/images/products/black-11.jpg"
											alt="image-product"
											loading="lazy"
											width={720}
											height={1005}
											decoding="async"
											data-nimg={1}
											className="lazyload img-product"
											src="/images/products/black-11.jpg"
											style={{ color: "transparent" }}
										/>
										<img
											data-src="/images/products/black-12.jpg"
											alt="image-product"
											loading="lazy"
											width={720}
											height={1005}
											decoding="async"
											data-nimg={1}
											className="lazyload img-hover"
											src="/images/products/black-12.jpg"
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
											<span className="tooltip">Add to Wishlist</span>
											<span className="icon icon-delete" />
										</a>
										<a
											href="#compare"
											data-bs-toggle="offcanvas"
											aria-controls="offcanvasLeft"
											className="box-icon bg_white compare btn-icon-action"
										>
											<span className="icon icon-compare " />
											<span className="tooltip"> Add to Compare</span>
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
									<div className="size-list">
										<span>S</span>
										<span>M</span>
										<span>L</span>
									</div>
								</div>
								<div className="card-product-info">
									<a className="title link" href="/product-detail/12">
										Slim Fit Fine-knit Turtleneck Sweater
									</a>
									<span className="price">$18.95</span>
								</div>
							</div>
						</div>{" "}
						<ul className="tf-pagination-wrap tf-pagination-list tf-pagination-btn">
							<li className="active">
								<a className="pagination-link">1</a>
							</li>{" "}
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

			<FilterOffcanvas/>
		</>
	);
}
