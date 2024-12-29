import React from "react";
import Link from 'next/link';
import logo from "@images/Xmarts.png";
import Image from "next/image";

export default function Navbar() {
	return (
		<>
			<header
				id="header"
				className="header-default header-uppercase"
				style={{ top: 0 }}
			>
				<div className="px_15 lg-px_40">
					<div className="row wrapper-header align-items-center">
						<div className="col-md-4 col-3 tf-lg-hidden">
							<Link
								href="#mobileMenu"
								data-bs-toggle="offcanvas"
								aria-controls="offcanvasLeft"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width={24}
									height={16}
									viewBox="0 0 24 16"
									fill="none"
								>
									<path
										d="M2.00056 2.28571H16.8577C17.1608 2.28571 17.4515 2.16531 17.6658 1.95098C17.8802 1.73665 18.0006 1.44596 18.0006 1.14286C18.0006 0.839753 17.8802 0.549063 17.6658 0.334735C17.4515 0.120408 17.1608 0 16.8577 0H2.00056C1.69745 0 1.40676 0.120408 1.19244 0.334735C0.978109 0.549063 0.857702 0.839753 0.857702 1.14286C0.857702 1.44596 0.978109 1.73665 1.19244 1.95098C1.40676 2.16531 1.69745 2.28571 2.00056 2.28571ZM0.857702 8C0.857702 7.6969 0.978109 7.40621 1.19244 7.19188C1.40676 6.97755 1.69745 6.85714 2.00056 6.85714H22.572C22.8751 6.85714 23.1658 6.97755 23.3801 7.19188C23.5944 7.40621 23.7148 7.6969 23.7148 8C23.7148 8.30311 23.5944 8.59379 23.3801 8.80812C23.1658 9.02245 22.8751 9.14286 22.572 9.14286H2.00056C1.69745 9.14286 1.40676 9.02245 1.19244 8.80812C0.978109 8.59379 0.857702 8.30311 0.857702 8ZM0.857702 14.8571C0.857702 14.554 0.978109 14.2633 1.19244 14.049C1.40676 13.8347 1.69745 13.7143 2.00056 13.7143H12.2863C12.5894 13.7143 12.8801 13.8347 13.0944 14.049C13.3087 14.2633 13.4291 14.554 13.4291 14.8571C13.4291 15.1602 13.3087 15.4509 13.0944 15.6653C12.8801 15.8796 12.5894 16 12.2863 16H2.00056C1.69745 16 1.40676 15.8796 1.19244 15.6653C0.978109 15.4509 0.857702 15.1602 0.857702 14.8571Z"
										fill="currentColor"
									/>
								</svg>
							</Link>
						</div>
						<div className="col-xl-5 tf-md-hidden">
							<nav className="box-navigation text-center">
								<ul className="box-nav-ul d-flex align-items-center gap-40">
									<li className="menu-item">
										<Link href="#" className="item-link   activeMenu ">
											Home
										</Link>
									</li>
									<li className="menu-item">
										<Link href="#" className="item-link    ">
											Shop
										</Link>
										<div className="sub-menu mega-menu">
											<div className="container">
												<div className="row">
													<div className="col-lg-2">
														<div className="mega-menu-item">
															<div className="menu-heading">Shop layouts</div>
															<ul className="menu-list">
																<li>
																	<Link
																		className="menu-link-text link "
																		href="/shop-default"
																	>
																		Default
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link "
																		href="/shop-left-sidebar"
																	>
																		Left sidebar
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link "
																		href="/shop-right-sidebar"
																	>
																		Right sidebar
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link "
																		href="/shop-fullwidth"
																	>
																		Fullwidth
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link "
																		href="/shop-collection-sub"
																	>
																		Sub collection
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link "
																		href="/shop-collection-list"
																	>
																		Collections list
																	</Link>
																</li>
															</ul>
														</div>
													</div>
													<div className="col-lg-2">
														<div className="mega-menu-item">
															<div className="menu-heading">Features</div>
															<ul className="menu-list">
																<li>
																	<Link
																		className="menu-link-text link "
																		href="/shop-link"
																	>
																		Pagination links
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link "
																		href="/shop-loadmore"
																	>
																		Pagination loadmore
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link "
																		href="/shop-infinite-scrolling"
																	>
																		Pagination infinite scrolling
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link "
																		href="/shop-filter-sidebar"
																	>
																		Filter sidebar
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link "
																		href="/shop-filter-hidden"
																	>
																		Filter hidden
																	</Link>
																</li>
															</ul>
														</div>
													</div>
													<div className="col-lg-2">
														<div className="mega-menu-item">
															<div className="menu-heading">Product styles</div>
															<ul className="menu-list">
																<li>
																	<Link
																		className="menu-link-text link "
																		href="/product-style-list"
																	>
																		Product style list
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link "
																		href="/product-style-01"
																	>
																		Product style 01
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link "
																		href="/product-style-02"
																	>
																		Product style 02
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link "
																		href="/product-style-03"
																	>
																		Product style 03
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link "
																		href="/product-style-04"
																	>
																		Product style 04
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link "
																		href="/product-style-05"
																	>
																		Product style 05
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link "
																		href="/product-style-06"
																	>
																		Product style 06
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link "
																		href="/product-style-07"
																	>
																		Product style 07
																	</Link>
																</li>
															</ul>
														</div>
													</div>
													<div className="col-lg-3">
														<div className="collection-item hover-img">
															<div className="collection-inner">
																<Link
																	className="collection-image img-style"
																	href="/home-men"
																>
																	<img
																		data-src="/images/collections/collection-1.jpg"
																		alt="collection-demo-1"
																		loading="lazy"
																		width={1000}
																		height={1215}



																		style={{ color: "transparent" }}
																		src="/images/collections/collection-1.jpg"
																	/>
																</Link>
																<div className="collection-content">
																	<Link
																		className="tf-btn hover-icon btn-xl collection-title fs-16"
																		href="/home-men"
																	>
																		<span>Men</span>
																		<i className="icon icon-arrow1-top-left" />
																	</Link>
																</div>
															</div>
														</div>
													</div>
													<div className="col-lg-3">
														<div className="collection-item hover-img">
															<div className="collection-inner">
																<Link
																	className="collection-image img-style"
																	href="/shop-women"
																>
																	<img
																		data-src="/images/collections/collection-2.jpg"
																		alt="collection-demo-1"
																		loading="lazy"
																		width={500}
																		height={607}



																		style={{ color: "transparent" }}
																		src="/images/collections/collection-2.jpg"
																	/>
																</Link>
																<div className="collection-content">
																	<Link
																		className="tf-btn btn-xl collection-title fs-16 hover-icon"
																		href="/shop-women"
																	>
																		<span>Women</span>
																		<i className="icon icon-arrow1-top-left" />
																	</Link>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className="menu-item">
										<Link href="#" className="item-link    ">
											Products
										</Link>
										<div className="sub-menu mega-menu">
											<div className="container">
												<div className="row">
													<div className="col-lg-2">
														<div className="mega-menu-item">
															<div className="menu-heading">
																Product layouts
															</div>
															<ul className="menu-list">
																<li>
																	<Link
																		className="menu-link-text link position-relative  "
																		href="/product-detail/1"
																	>
																		Product default
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link position-relative  "
																		href="/product-grid-1/2"
																	>
																		Product grid 1
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link position-relative  "
																		href="/product-grid-2/3"
																	>
																		Product grid 2
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link position-relative  "
																		href="/product-stacked/4"
																	>
																		Product stacked
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link position-relative  "
																		href="/product-right-thumbnails/5"
																	>
																		Product right thumbnails
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link position-relative  "
																		href="/product-bottom-thumbnails/6"
																	>
																		Product bottom thumbnails
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link position-relative  "
																		href="/product-drawer-sidebar/7"
																	>
																		Product drawer sidebar
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link position-relative  "
																		href="/product-description-accordion/8"
																	>
																		Product description accordion
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link position-relative  "
																		href="/product-description-list/10"
																	>
																		Product description list
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link position-relative  "
																		href="/product-description-vertical/11"
																	>
																		Product description vertical
																	</Link>
																</li>
															</ul>
														</div>
													</div>
													<div className="col-lg-2">
														<div className="mega-menu-item">
															<div className="menu-heading">
																Product details
															</div>
															<ul className="menu-list">
																<li>
																	<Link
																		className="menu-link-text link position-relative  "
																		href="/product-inner-zoom/12"
																	>
																		Product inner zoom
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link position-relative  "
																		href="/product-zoom-magnifier/13"
																	>
																		Product zoom magnifier
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link position-relative  "
																		href="/product-no-zoom/14"
																	>
																		Product no zoom
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link position-relative  "
																		href="/product-photoswipe-popup/15"
																	>
																		Product photoswipe popup
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link position-relative  "
																		href="/product-zoom-popup/16"
																	>
																		Product external zoom and photoswipe popup
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link position-relative  "
																		href="/product-video/17"
																	>
																		Product video
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link position-relative  "
																		href="/product-3d/18"
																	>
																		Product 3D, AR models
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link position-relative  "
																		href="/product-options-customizer/19"
																	>
																		Product options &amp; customizer
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link position-relative  "
																		href="/product-advanced-types/20"
																	>
																		Advanced product types
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link position-relative  "
																		href="/product-giftcard/21"
																	>
																		Recipient information form for gift card
																		products
																	</Link>
																</li>
															</ul>
														</div>
													</div>
													<div className="col-lg-2">
														<div className="mega-menu-item">
															<div className="menu-heading">
																Product swatches
															</div>
															<ul className="menu-list">
																<li>
																	<Link
																		className="menu-link-text link position-relative  "
																		href="/product-color-swatch/22"
																	>
																		Product color swatch
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link position-relative  "
																		href="/product-rectangle/23"
																	>
																		Product rectangle
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link position-relative  "
																		href="/product-rectangle-color/24"
																	>
																		Product rectangle color
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link position-relative  "
																		href="/product-swatch-image/25"
																	>
																		Product swatch image
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link position-relative  "
																		href="/product-swatch-image-rounded/26"
																	>
																		Product swatch image rounded
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link position-relative  "
																		href="/product-swatch-dropdown/27"
																	>
																		Product swatch dropdown
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link position-relative  "
																		href="/product-swatch-dropdown-color/29"
																	>
																		Product swatch dropdown color
																	</Link>
																</li>
															</ul>
														</div>
													</div>
													<div className="col-lg-2">
														<div className="mega-menu-item">
															<div className="menu-heading">
																Product features
															</div>
															<ul className="menu-list">
																<li>
																	<Link
																		className="menu-link-text link position-relative  "
																		href="/product-frequently-bought-together/30"
																	>
																		Frequently bought together
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link position-relative  "
																		href="/product-frequently-bought-together-2/31"
																	>
																		Frequently bought together 2
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link position-relative  "
																		href="/product-upsell-features/32"
																	>
																		Product upsell features
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link position-relative  "
																		href="/product-pre-orders/33"
																	>
																		Product pre-orders
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link position-relative  "
																		href="/product-notification/34"
																	>
																		Back in stock notification
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link position-relative  "
																		href="/product-pickup/35"
																	>
																		Product pickup
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link position-relative  "
																		href="/product-images-grouped/36"
																	>
																		Variant images grouped
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link position-relative  "
																		href="/product-complimentary/37"
																	>
																		Complimentary products
																	</Link>
																</li>
																<li>
																	<Link
																		className="menu-link-text link position-relative  "
																		href="/product-quick-order-list/38"
																	>
																		Quick order list
																		<div className="demo-label">
																			<span className="demo-new">New</span>
																		</div>
																	</Link>
																</li>
															</ul>
														</div>
													</div>
													<div className="col-lg-4">
														<div className="menu-heading">Best seller</div>
														<div className="hover-sw-nav hover-sw-2">
															<div
																className="swiper swiper-initialized swiper-horizontal tf-product-header wrap-sw-over swiper-backface-hidden"
																dir="ltr"
															>
																<div className="swiper-wrapper">
																	<div
																		className="swiper-slide swiper-slide-active"
																		style={{
																			width: "177.5px",
																			marginRight: 30,
																		}}
																	>
																		<div className="card-product fl-item">
																			<div className="card-product-wrapper">
																				<Link
																					className="product-img"
																					href="/product-detail/1"
																				>
																					<img
																						data-src="/images/products/orange-1.jpg"
																						alt="image-product"
																						loading="lazy"
																						width={720}
																						height={1005}


																						className="lazyload img-product"
																						style={{ color: "transparent" }}
																						src="/images/products/orange-1.jpg"
																					/>
																					<img
																						data-src="/images/products/white-1.jpg"
																						alt="image-product"
																						loading="lazy"
																						width={720}
																						height={1005}


																						className="lazyload img-hover"
																						style={{ color: "transparent" }}
																						src="/images/products/white-1.jpg"
																					/>
																				</Link>
																				<div className="list-product-btn">
																					<Link
																						href="#quick_add"
																						data-bs-toggle="modal"
																						className="box-icon bg_white quick-add tf-btn-loading"
																					>
																						<span className="icon icon-bag" />
																						<span className="tooltip">
																							Quick Add
																						</span>
																					</Link>
																					<Link href="#" className="box-icon bg_white wishlist btn-icon-action">
																						<span className="icon icon-heart added" />
																						<span className="tooltip">
																							Already Wishlisted
																						</span>
																						<span className="icon icon-delete" />
																					</Link>
																					<Link
																						href="#compare"
																						data-bs-toggle="offcanvas"
																						aria-controls="offcanvasLeft"
																						className="box-icon bg_white compare btn-icon-action"
																					>
																						<span className="icon icon-compare added" />
																						<span className="tooltip">

																							{/* */}Already Compared
																						</span>
																						<span className="icon icon-check" />
																					</Link>
																					<Link
																						href="#quick_view"
																						data-bs-toggle="modal"
																						className="box-icon bg_white quickview tf-btn-loading"
																					>
																						<span className="icon icon-view" />
																						<span className="tooltip">
																							Quick View
																						</span>
																					</Link>
																				</div>
																				<div className="size-list">
																					<span>S</span>
																					<span>M</span>
																					<span>L</span>
																					<span>XL</span>
																				</div>
																			</div>
																			<div className="card-product-info">
																				<Link
																					className="title link"
																					href="/product-detail/1"
																				>
																					PLATE OF EGGS
																				</Link>
																				<span className="price">
																					${/* */}16.95
																				</span>
																				<ul className="list-color-product">
																					<li className="list-color-item color-swatch active ">
																						<span className="tooltip">
																							Orange
																						</span>
																						<span className="swatch-value bg_orange-3" />
																						<img
																							data-src="/images/products/orange-1.jpg"
																							alt="image-product"
																							loading="lazy"
																							width={720}
																							height={1005}



																							style={{ color: "transparent" }}
																							src="/images/products/orange-1.jpg"
																						/>
																					</li>
																					<li className="list-color-item color-swatch  ">
																						<span className="tooltip">
																							Black
																						</span>
																						<span className="swatch-value bg_dark" />
																						<img
																							data-src="/images/products/black-1.jpg"
																							alt="image-product"
																							loading="lazy"
																							width={720}
																							height={1005}



																							style={{ color: "transparent" }}
																							src="/images/products/black-1.jpg"
																						/>
																					</li>
																					<li className="list-color-item color-swatch  ">
																						<span className="tooltip">
																							White
																						</span>
																						<span className="swatch-value bg_white" />
																						<img
																							data-src="/images/products/white-1.jpg"
																							alt="image-product"
																							loading="lazy"
																							width={720}
																							height={1005}



																							style={{ color: "transparent" }}
																							src="/images/products/white-1.jpg"
																						/>
																					</li>
																				</ul>
																			</div>
																		</div>
																	</div>
																	<div
																		className="swiper-slide swiper-slide-next"
																		style={{
																			width: "177.5px",
																			marginRight: 30,
																		}}
																	>
																		<div className="card-product fl-item">
																			<div className="card-product-wrapper">
																				<Link
																					className="product-img"
																					href="/product-detail/2"
																				>
																					<img
																						data-src="/images/products/brown.jpg"
																						alt="image-product"
																						loading="lazy"
																						width={720}
																						height={1005}


																						className="lazyload img-product"
																						style={{ color: "transparent" }}
																						src="/images/products/brown.jpg"
																					/>
																					<img
																						data-src="/images/products/purple.jpg"
																						alt="image-product"
																						loading="lazy"
																						width={720}
																						height={1005}


																						className="lazyload img-hover"
																						style={{ color: "transparent" }}
																						src="/images/products/purple.jpg"
																					/>
																				</Link>
																				<div className="list-product-btn">
																					<Link
																						href="#quick_add"
																						data-bs-toggle="modal"
																						className="box-icon bg_white quick-add tf-btn-loading"
																					>
																						<span className="icon icon-bag" />
																						<span className="tooltip">
																							Quick Add
																						</span>
																					</Link>
																					<Link href="#" className="box-icon bg_white wishlist btn-icon-action">
																						<span className="icon icon-heart added" />
																						<span className="tooltip">
																							Already Wishlisted
																						</span>
																						<span className="icon icon-delete" />
																					</Link>
																					<Link
																						href="#compare"
																						data-bs-toggle="offcanvas"
																						aria-controls="offcanvasLeft"
																						className="box-icon bg_white compare btn-icon-action"
																					>
																						<span className="icon icon-compare added" />
																						<span className="tooltip">

																							{/* */}Already Compared
																						</span>
																						<span className="icon icon-check" />
																					</Link>
																					<Link
																						href="#quick_view"
																						data-bs-toggle="modal"
																						className="box-icon bg_white quickview tf-btn-loading"
																					>
																						<span className="icon icon-view" />
																						<span className="tooltip">
																							Quick View
																						</span>
																					</Link>
																				</div>
																				<div className="countdown-box">
																					<div className="js-countdown">
																						<div
																							aria-hidden="true"
																							className="countdown__timer"
																						>
																							<span className="countdown__item">
																								<span className="countdown__value countdown__value--0 js-countdown__value--0">
																									164
																								</span>
																								<span className="countdown__label">
																									d :
																								</span>
																							</span>
																							<span className="countdown__item">
																								<span className="countdown__value countdown__value--1 js-countdown__value--1">
																									8
																								</span>
																								<span className="countdown__label">
																									h :
																								</span>
																							</span>
																							<span className="countdown__item">
																								<span className="countdown__value countdown__value--2 js-countdown__value--2">
																									40
																								</span>
																								<span className="countdown__label">
																									m :
																								</span>
																							</span>
																							<span className="countdown__item">
																								<span className="countdown__value countdown__value--3 js-countdown__value--3">
																									16
																								</span>
																								<span className="countdown__label">
																									s
																								</span>
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
																				<Link
																					className="title link"
																					href="/product-detail/2"
																				>
																					Ribbed Modal T-shirt
																				</Link>
																				<span className="price">
																					${/* */}18.95
																				</span>
																				<ul className="list-color-product">
																					<li className="list-color-item color-swatch active ">
																						<span className="tooltip">
																							Brown
																						</span>
																						<span className="swatch-value bg_brown" />
																						<img
																							data-src="/images/products/brown.jpg"
																							alt="image-product"
																							loading="lazy"
																							width={720}
																							height={1005}



																							style={{ color: "transparent" }}
																							src="/images/products/brown.jpg"
																						/>
																					</li>
																					<li className="list-color-item color-swatch  ">
																						<span className="tooltip">
																							Light Purple
																						</span>
																						<span className="swatch-value bg_purple" />
																						<img
																							data-src="/images/products/purple.jpg"
																							alt="image-product"
																							loading="lazy"
																							width={720}
																							height={1005}



																							style={{ color: "transparent" }}
																							src="/images/products/purple.jpg"
																						/>
																					</li>
																					<li className="list-color-item color-swatch  ">
																						<span className="tooltip">
																							Light Green
																						</span>
																						<span className="swatch-value bg_light-green" />
																						<img
																							data-src="/images/products/green.jpg"
																							alt="image-product"
																							loading="lazy"
																							width={720}
																							height={1005}



																							style={{ color: "transparent" }}
																							src="/images/products/green.jpg"
																						/>
																					</li>
																				</ul>
																			</div>
																		</div>
																	</div>
																	<div
																		className="swiper-slide"
																		style={{
																			width: "177.5px",
																			marginRight: 30,
																		}}
																	>
																		<div className="card-product fl-item">
																			<div className="card-product-wrapper">
																				<Link
																					className="product-img"
																					href="/product-detail/3"
																				>
																					<img
																						data-src="/images/products/white-3.jpg"
																						alt="image-product"
																						loading="lazy"
																						width={720}
																						height={1005}


																						className="lazyload img-product"
																						style={{ color: "transparent" }}
																						src="/images/products/white-3.jpg"
																					/>
																					<img
																						data-src="/images/products/white-4.jpg"
																						alt="image-product"
																						loading="lazy"
																						width={720}
																						height={1005}


																						className="lazyload img-hover"
																						style={{ color: "transparent" }}
																						src="/images/products/white-4.jpg"
																					/>
																				</Link>
																				<div className="list-product-btn">
																					<Link
																						href="#quick_add"
																						data-bs-toggle="modal"
																						className="box-icon bg_white quick-add tf-btn-loading"
																					>
																						<span className="icon icon-bag" />
																						<span className="tooltip">
																							Quick Add
																						</span>
																					</Link>
																					<Link href="#" className="box-icon bg_white wishlist btn-icon-action">
																						<span className="icon icon-heart added" />
																						<span className="tooltip">
																							Already Wishlisted
																						</span>
																						<span className="icon icon-delete" />
																					</Link>
																					<Link
																						href="#compare"
																						data-bs-toggle="offcanvas"
																						aria-controls="offcanvasLeft"
																						className="box-icon bg_white compare btn-icon-action"
																					>
																						<span className="icon icon-compare added" />
																						<span className="tooltip">

																							{/* */}Already Compared
																						</span>
																						<span className="icon icon-check" />
																					</Link>
																					<Link
																						href="#quick_view"
																						data-bs-toggle="modal"
																						className="box-icon bg_white quickview tf-btn-loading"
																					>
																						<span className="icon icon-view" />
																						<span className="tooltip">
																							Quick View
																						</span>
																					</Link>
																				</div>
																				<div className="size-list">
																					<span>S</span>
																					<span>M</span>
																					<span>L</span>
																					<span>XL</span>
																				</div>
																			</div>
																			<div className="card-product-info">
																				<Link
																					className="title link"
																					href="/product-detail/3"
																				>
																					Oversized Printed T-shirt
																				</Link>
																				<span className="price">
																					${/* */}10.00
																				</span>
																			</div>
																		</div>
																	</div>
																	<div
																		className="swiper-slide"
																		style={{
																			width: "177.5px",
																			marginRight: 30,
																		}}
																	>
																		<div className="card-product fl-item">
																			<div className="card-product-wrapper">
																				<Link
																					className="product-img"
																					href="/product-detail/4"
																				>
																					<img
																						data-src="/images/products/white-2.jpg"
																						alt="image-product"
																						loading="lazy"
																						width={720}
																						height={1005}


																						className="lazyload img-product"
																						style={{ color: "transparent" }}
																						src="/images/products/white-2.jpg"
																					/>
																					<img
																						data-src="/images/products/pink-1.jpg"
																						alt="image-product"
																						loading="lazy"
																						width={720}
																						height={1005}


																						className="lazyload img-hover"
																						style={{ color: "transparent" }}
																						src="/images/products/pink-1.jpg"
																					/>
																				</Link>
																				<div className="list-product-btn">
																					<Link
																						href="#quick_add"
																						data-bs-toggle="modal"
																						className="box-icon bg_white quick-add tf-btn-loading"
																					>
																						<span className="icon icon-bag" />
																						<span className="tooltip">
																							Quick Add
																						</span>
																					</Link>
																					<Link href="#" className="box-icon bg_white wishlist btn-icon-action">
																						<span className="icon icon-heart " />
																						<span className="tooltip">
																							Add to Wishlist
																						</span>
																						<span className="icon icon-delete" />
																					</Link>
																					<Link
																						href="#compare"
																						data-bs-toggle="offcanvas"
																						aria-controls="offcanvasLeft"
																						className="box-icon bg_white compare btn-icon-action"
																					>
																						<span className="icon icon-compare " />
																						<span className="tooltip">

																							{/* */}Add to Compare
																						</span>
																						<span className="icon icon-check" />
																					</Link>
																					<Link
																						href="#quick_view"
																						data-bs-toggle="modal"
																						className="box-icon bg_white quickview tf-btn-loading"
																					>
																						<span className="icon icon-view" />
																						<span className="tooltip">
																							Quick View
																						</span>
																					</Link>
																				</div>
																				<div className="size-list">
																					<span>S</span>
																					<span>M</span>
																					<span>L</span>
																					<span>XL</span>
																				</div>
																			</div>
																			<div className="card-product-info">
																				<Link
																					className="title link"
																					href="/product-detail/4"
																				>
																					Oversized Printed T-shirt
																				</Link>
																				<span className="price">
																					${/* */}16.95
																				</span>
																				<ul className="list-color-product">
																					<li className="list-color-item color-swatch active ">
																						<span className="tooltip">
																							White
																						</span>
																						<span className="swatch-value bg_white" />
																						<img
																							data-src="/images/products/white-2.jpg"
																							alt="image-product"
																							loading="lazy"
																							width={720}
																							height={1005}



																							style={{ color: "transparent" }}
																							src="/images/products/white-2.jpg"
																						/>
																					</li>
																					<li className="list-color-item color-swatch  ">
																						<span className="tooltip">
																							Pink
																						</span>
																						<span className="swatch-value bg_purple" />
																						<img
																							data-src="/images/products/pink-1.jpg"
																							alt="image-product"
																							loading="lazy"
																							width={720}
																							height={1005}



																							style={{ color: "transparent" }}
																							src="/images/products/pink-1.jpg"
																						/>
																					</li>
																					<li className="list-color-item color-swatch  ">
																						<span className="tooltip">
																							Black
																						</span>
																						<span className="swatch-value bg_dark" />
																						<img
																							data-src="/images/products/black-2.jpg"
																							alt="image-product"
																							loading="lazy"
																							width={720}
																							height={1005}



																							style={{ color: "transparent" }}
																							src="/images/products/black-2.jpg"
																						/>
																					</li>
																				</ul>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div className="nav-sw nav-next-slider nav-next-product-header box-icon w_46 round snmpn1 swiper-button-disabled">
																<span className="icon icon-arrow-left" />
															</div>
															<div className="nav-sw nav-prev-slider nav-prev-product-header box-icon w_46 round snmnn1">
																<span className="icon icon-arrow-right" />
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className="menu-item position-relative">
										<Link href="#" className="item-link    ">
											Pages
											<i className="icon icon-arrow-down" />
										</Link>
										<div className="sub-menu submenu-default">
											<ul className="menu-list">
												<li className>
													<Link
														className="menu-link-text link text_black-2  "
														style={{ position: "relative" }}
														href="/about-us"
													>
														About us{/* */}
													</Link>
												</li>
												<li className="menu-item-2 ">
													<Link
														href="#"
														className="menu-link-text link text_black-2 "
													>
														Brands
													</Link>
													<div className="sub-menu submenu-default">
														<ul className="menu-list">
															<li>
																<Link
																	className="menu-link-text link text_black-2 position-relative "
																	href="/brands"
																>
																	Brands
																	<div className="demo-label">
																		<span className="demo-new">New</span>
																	</div>
																</Link>
															</li>
															<li>
																<Link
																	className="menu-link-text link text_black-2 "
																	href="/brands-v2"
																>
																	Brand V2
																</Link>
															</li>
														</ul>
													</div>
												</li>
												<li className="menu-item-2 ">
													<Link
														href="#"
														className="menu-link-text link text_black-2 "
													>
														Contact
													</Link>
													<div className="sub-menu submenu-default">
														<ul className="menu-list">
															<li>
																<Link
																	className="menu-link-text link text_black-2 "
																	href="/contact-1"
																>
																	Contact 1
																</Link>
															</li>
															<li>
																<Link
																	className="menu-link-text link text_black-2 "
																	href="/contact-2"
																>
																	Contact 2
																</Link>
															</li>
														</ul>
													</div>
												</li>
												<li className="menu-item-2 ">
													<Link
														href="#"
														className="menu-link-text link text_black-2 "
													>
														FAQ
													</Link>
													<div className="sub-menu submenu-default">
														<ul className="menu-list">
															<li>
																<Link
																	className="menu-link-text link text_black-2 "
																	href="/faq-1"
																>
																	FAQ 01
																</Link>
															</li>
															<li>
																<Link
																	className="menu-link-text link text_black-2 "
																	href="/faq-2"
																>
																	FAQ 02
																</Link>
															</li>
														</ul>
													</div>
												</li>
												<li className="menu-item-2 ">
													<Link
														href="#"
														className="menu-link-text link text_black-2 "
													>
														Store
													</Link>
													<div className="sub-menu submenu-default">
														<ul className="menu-list">
															<li>
																<Link
																	className="menu-link-text link text_black-2 "
																	href="/our-store"
																>
																	Our store
																</Link>
															</li>
															<li>
																<Link
																	className="menu-link-text link text_black-2 "
																	href="/store-locations"
																>
																	Store locator
																</Link>
															</li>
														</ul>
													</div>
												</li>
												<li className>
													<Link
														className="menu-link-text link text_black-2 position-relative  "
														style={{ position: "relative" }}
														href="/timeline"
													>
														Timeline{/* */}
														<div className="demo-label">
															<span className="demo-new">New</span>
														</div>
													</Link>
												</li>
												<li className>
													<Link
														className="menu-link-text link text_black-2 position-relative  "
														style={{ position: "relative" }}
														href="/view-cart"
													>
														View cart{/* */}
													</Link>
												</li>
												<li className>
													<Link
														className="menu-link-text link text_black-2 position-relative  "
														style={{ position: "relative" }}
														href="/checkout"
													>
														Check out{/* */}
													</Link>
												</li>
												<li className="menu-item-2 ">
													<Link
														href="#"
														className="menu-link-text link text_black-2 "
													>
														Payment
													</Link>
													<div className="sub-menu submenu-default">
														<ul className="menu-list">
															<li>
																<Link
																	className="menu-link-text link text_black-2 "
																	href="/payment-confirmation"
																>
																	Payment Confirmation
																</Link>
															</li>
															<li>
																<Link
																	className="menu-link-text link text_black-2 "
																	href="/payment-failure"
																>
																	Payment Failure
																</Link>
															</li>
														</ul>
													</div>
												</li>
												<li className="menu-item-2 ">
													<Link
														href="#"
														className="menu-link-text link text_black-2 "
													>
														My account
													</Link>
													<div className="sub-menu submenu-default">
														<ul className="menu-list">
															<li>
																<Link
																	className="menu-link-text link text_black-2 "
																	href="/my-account"
																>
																	My account
																</Link>
															</li>
															<li>
																<Link
																	className="menu-link-text link text_black-2 "
																	href="/my-account-orders"
																>
																	My order
																</Link>
															</li>
															<li>
																<Link
																	className="menu-link-text link text_black-2 "
																	href="/my-account-orders-details"
																>
																	My order details
																</Link>
															</li>
															<li>
																<Link
																	className="menu-link-text link text_black-2 "
																	href="/my-account-address"
																>
																	My address
																</Link>
															</li>
															<li>
																<Link
																	className="menu-link-text link text_black-2 "
																	href="/my-account-edit"
																>
																	My account details
																</Link>
															</li>
															<li>
																<Link
																	className="menu-link-text link text_black-2 "
																	href="/my-account-wishlist"
																>
																	My wishlist
																</Link>
															</li>
														</ul>
													</div>
												</li>
												<li className>
													<Link
														className="menu-link-text link text_black-2 position-relative  "
														style={{ position: "relative" }}
														href="/invoice"
													>
														Invoice{/* */}
													</Link>
												</li>
												<li className>
													<Link
														className="menu-link-text link text_black-2 position-relative  "
														style={{ position: "relative" }}
														href="/page-not-found"
													>
														404{/* */}
													</Link>
												</li>
											</ul>
										</div>
									</li>
									<li className="menu-item position-relative">
										<Link href="#" className="item-link    ">
											Blog
										</Link>
										<div className="sub-menu links-default">
											<ul className="menu-list">
												<li>
													<Link
														className="menu-link-text link text_black-2  "
														href="/blog-grid"
													>
														Grid layout
													</Link>
												</li>
												<li>
													<Link
														className="menu-link-text link text_black-2  "
														href="/blog-sidebar-left"
													>
														Left sidebar
													</Link>
												</li>
												<li>
													<Link
														className="menu-link-text link text_black-2  "
														href="/blog-sidebar-right"
													>
														Right sidebar
													</Link>
												</li>
												<li>
													<Link
														className="menu-link-text link text_black-2  "
														href="/blog-list"
													>
														Blog list
													</Link>
												</li>
												<li>
													<Link
														className="menu-link-text link text_black-2  "
														href="/blog-detail/1"
													>
														Single Post
													</Link>
												</li>
											</ul>
										</div>
									</li>
									<li className="menu-item">
										<Link href="#" className="item-link letter-spacing-3">
											Buy now
										</Link>
									</li>
								</ul>
							</nav>
						</div>
						<div className="col-xl-2 col-md-4 col-6 text-center">
							<Link className="logo-header" href="/">
								<Image
									alt="logo"
									loading="lazy"
									width={136}
									height={21}
									className="logo"
									style={{ color: "transparent" }}
									src={logo}
								/>
							</Link>
						</div>
						<div className="col-xl-5 col-md-4 col-3">
							<ul className="nav-icon d-flex justify-content-end align-items-center gap-20">
								<li className="nav-search">
									<Link
										href="#canvasSearch"
										data-bs-toggle="offcanvas"
										aria-controls="offcanvasLeft"
										className="nav-icon-item"
									>
										<i className="icon icon-search" />
									</Link>
								</li>
								<li className="nav-account">
									<Link
										href="#login"
										data-bs-toggle="modal"
										className="nav-icon-item"
									>
										<i className="icon icon-account" />
									</Link>
								</li>
								<li className="nav-wishlist">
									<Link className="nav-icon-item" href="/wishlist">
										<i className="icon icon-heart" />
										<span className="count-box bg-yellow-9 text_black">3</span>
									</Link>
								</li>
								<li className="nav-cart">
									<Link
										href="#shoppingCart"
										data-bs-toggle="modal"
										className="nav-icon-item"
									>
										<i className="icon icon-bag" />
										<span className="count-box bg-yellow-9 text_black">0</span>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div
					className="offcanvas offcanvas-start canvas-mb "
					id="mobileMenu"
					aria-modal="true"
					role="dialog"
				>
					<span
						className="icon-close icon-close-popup"
						data-bs-dismiss="offcanvas"
						aria-label="Close"
					/>
					<div className="mb-canvas-content">
						<div className="mb-body">
							<ul className="nav-ul-mb" id="wrapper-menu-navigation">
								<li className="nav-mb-item">
									<Link

										href="#dropdown-menu-one"
										className="collapsed mb-menu-link current activeMenu"
										data-bs-toggle="collapse"
										aria-expanded="true"
										aria-controls="dropdown-menu-one"
									>
										<span>Home</span>
										<span className="btn-open-sub" />
									</Link>
									<div id="dropdown-menu-one" className="collapse">
										<ul className="sub-nav-menu">
											<li>
												<Link className="sub-nav-link " href="/">
													Home Fashion 01
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/home-02">
													Home Fashion 02
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/home-03">
													Home Fashion 03
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/home-04">
													Home Fashion 04
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/home-05">
													Home Fashion 05
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/home-06">
													Home Fashion 06
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/home-07">
													Home Fashion 07
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/home-08">
													Home Fashion 08
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/home-giftcard">
													Home Gift Card
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/home-headphone">
													Home Headphone
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/home-multi-brand">
													Home Multi Brand
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/home-skincare">
													Home Skincare
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/home-furniture">
													Home Furniture
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/home-furniture-02">
													Home Furniture 2
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/home-skateboard">
													Home Skateboard
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/home-stroller">
													Home Stroller
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/home-decor">
													Home Decor
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/home-electronic">
													Home Electronic
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/home-setup-gear">
													Home Setup Gear
												</Link>
											</li>
											<li>
												<Link
													className="sub-nav-link "
													href="/home-dog-accessories"
												>
													Home Dog Accessories
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/home-kitchen-wear">
													Home Kitchen Wear
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/home-phonecase">
													Home Phonecase
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/home-paddle-boards">
													Home Paddle Boards
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/home-glasses">
													Home Glasses
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/home-pod-store">
													Home POD Store
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/home-activewear">
													Home Activewear
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/home-handbag">
													Home Handbag
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/home-tee">
													Home Tee
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/home-sock">
													Home Sock
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/home-jewerly">
													Home Jewelry
												</Link>
											</li>
											<li>
												<Link
													className="sub-nav-link activeMenu"
													href="/home-sneaker"
												>
													Home Sneaker
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/home-accessories">
													Home Accessories
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/home-grocery">
													Home Grocery
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/home-baby">
													Home Baby
												</Link>
											</li>
										</ul>
									</div>
								</li>
								<li className="nav-mb-item">
									<Link
										href="#dropdown-menu-two"
										className="collapsed mb-menu-link current "
										data-bs-toggle="collapse"
										aria-expanded="true"
										aria-controls="dropdown-menu-two"
									>
										<span>Shop</span>
										<span className="btn-open-sub" />
									</Link>
									<div id="dropdown-menu-two" className="collapse">
										<ul className="sub-nav-menu">
											<li>
												<Link
													href="#sub-shop-one"
													className="sub-nav-link collapsed  "
													data-bs-toggle="collapse"
													aria-expanded="true"
													aria-controls="sub-shop-one"
												>
													<span>Shop layouts</span>
													<span className="btn-open-sub" />
												</Link>
												<div id="sub-shop-one" className="collapse">
													<ul className="sub-nav-menu sub-menu-level-2">
														<li>
															<Link
																className="sub-nav-link  "
																href="/shop-default"
															>
																Default
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/shop-left-sidebar"
															>
																Left sidebar
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/shop-right-sidebar"
															>
																Right sidebar
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/shop-fullwidth"
															>
																Fullwidth
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/shop-collection-sub"
															>
																Sub collection
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/shop-collection-list"
															>
																Collections list
															</Link>
														</li>
													</ul>
												</div>
											</li>
											<li>
												<Link
													href="#sub-shop-two"
													className="sub-nav-link collapsed  "
													data-bs-toggle="collapse"
													aria-expanded="true"
													aria-controls="sub-shop-two"
												>
													<span>Features</span>
													<span className="btn-open-sub" />
												</Link>
												<div id="sub-shop-two" className="collapse">
													<ul className="sub-nav-menu sub-menu-level-2">
														<li>
															<Link className="sub-nav-link  " href="/shop-link">
																Pagination links
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/shop-loadmore"
															>
																Pagination loadmore
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/shop-infinite-scrolling"
															>
																Pagination infinite scrolling
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/shop-filter-sidebar"
															>
																Filter sidebar
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/shop-filter-hidden"
															>
																Filter hidden
															</Link>
														</li>
													</ul>
												</div>
											</li>
											<li>
												<Link
													href="#sub-shop-three"
													className="sub-nav-link collapsed  "
													data-bs-toggle="collapse"
													aria-expanded="true"
													aria-controls="sub-shop-three"
												>
													<span>Product styles</span>
													<span className="btn-open-sub" />
												</Link>
												<div id="sub-shop-three" className="collapse">
													<ul className="sub-nav-menu sub-menu-level-2">
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-style-list"
															>
																Product style list
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-style-01"
															>
																Product style 01
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-style-02"
															>
																Product style 02
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-style-03"
															>
																Product style 03
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-style-04"
															>
																Product style 04
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-style-05"
															>
																Product style 05
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-style-06"
															>
																Product style 06
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-style-07"
															>
																Product style 07
															</Link>
														</li>
													</ul>
												</div>
											</li>
										</ul>
									</div>
								</li>
								<li className="nav-mb-item">
									<Link
										href="#dropdown-menu-three"
										className="collapsed mb-menu-link current "
										data-bs-toggle="collapse"
										aria-expanded="true"
										aria-controls="dropdown-menu-three"
									>
										<span>Products</span>
										<span className="btn-open-sub" />
									</Link>
									<div id="dropdown-menu-three" className="collapse">
										<ul className="sub-nav-menu">
											<li>
												<Link
													href="#sub-product-one"
													className="sub-nav-link collapsed  "
													data-bs-toggle="collapse"
													aria-expanded="true"
													aria-controls="sub-product-one"
												>
													<span>Product layouts</span>
													<span className="btn-open-sub" />
												</Link>
												<div id="sub-product-one" className="collapse">
													<ul className="sub-nav-menu sub-menu-level-2">
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-detail/1"
															>
																Product default
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-grid-1/2"
															>
																Product grid 1
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-grid-2/3"
															>
																Product grid 2
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-stacked/4"
															>
																Product stacked
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-right-thumbnails/5"
															>
																Product right thumbnails
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-bottom-thumbnails/6"
															>
																Product bottom thumbnails
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-drawer-sidebar/7"
															>
																Product drawer sidebar
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-description-accordion/8"
															>
																Product description accordion
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-description-list/9"
															>
																Product description list
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-description-vertical/10"
															>
																Product description vertical
															</Link>
														</li>
													</ul>
												</div>
											</li>
											<li>
												<Link
													href="#sub-product-two"
													className="sub-nav-link collapsed  "
													data-bs-toggle="collapse"
													aria-expanded="true"
													aria-controls="sub-product-two"
												>
													<span>Product details</span>
													<span className="btn-open-sub" />
												</Link>
												<div id="sub-product-two" className="collapse">
													<ul className="sub-nav-menu sub-menu-level-2">
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-inner-zoom/11"
															>
																Product inner zoom
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-zoom-magnifier/12"
															>
																Product zoom magnifier
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-no-zoom"
															>
																Product no zoom
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-photoswipe-popup/13"
															>
																Product photoswipe popup
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-zoom-popup/15"
															>
																Product external zoom and photoswipe popup
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-video/16"
															>
																Product video
															</Link>
														</li>
														<li>
															<Link className="sub-nav-link  " href="/product-3d">
																Product 3D, AR models
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-options-customizer/17"
															>
																Product options &amp; customizer
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-advanced-types/18"
															>
																Advanced product types
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-giftcard/19"
															>
																Recipient information form for gift card
																products
															</Link>
														</li>
													</ul>
												</div>
											</li>
											<li>
												<Link
													href="#sub-product-three"
													className="sub-nav-link collapsed  "
													data-bs-toggle="collapse"
													aria-expanded="true"
													aria-controls="sub-product-three"
												>
													<span>Product swatchs</span>
													<span className="btn-open-sub" />
												</Link>
												<div id="sub-product-three" className="collapse">
													<ul className="sub-nav-menu sub-menu-level-2">
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-color-swatch/20"
															>
																Product color swatch
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-rectangle"
															>
																Product rectangle
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-rectangle-color/21"
															>
																Product rectangle color
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-swatch-image/22"
															>
																Product swatch image
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-swatch-image-rounded"
															>
																Product swatch image rounded
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-swatch-dropdown/23"
															>
																Product swatch dropdown
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-swatch-dropdown-color/24"
															>
																Product swatch dropdown color
															</Link>
														</li>
													</ul>
												</div>
											</li>
											<li>
												<Link
													href="#sub-product-four"
													className="sub-nav-link collapsed  "
													data-bs-toggle="collapse"
													aria-expanded="true"
													aria-controls="sub-product-four"
												>
													<span>Product features</span>
													<span className="btn-open-sub" />
												</Link>
												<div id="sub-product-four" className="collapse">
													<ul className="sub-nav-menu sub-menu-level-2">
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-frequently-bought-together/25"
															>
																Frequently bought together
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-frequently-bought-together-2/26"
															>
																Frequently bought together 2
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-upsell-features/27"
															>
																Product upsell features
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-pre-orders/28"
															>
																Product pre-orders
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-notification/28"
															>
																Back in stock notification
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-pickup/29"
															>
																Product pickup
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-images-grouped/30"
															>
																Variant images grouped
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-complimentary/31"
															>
																Complimentary products
															</Link>
														</li>
														<li>
															<Link
																className="sub-nav-link  "
																href="/product-quick-order-list/32"
															>
																Quick order list
																<div className="demo-label">
																	<span className="demo-new">New</span>
																</div>
															</Link>
														</li>
													</ul>
												</div>
											</li>
										</ul>
									</div>
								</li>
								<li className="nav-mb-item">
									<Link
										href="#dropdown-menu-four"
										className="collapsed mb-menu-link current "
										data-bs-toggle="collapse"
										aria-expanded="true"
										aria-controls="dropdown-menu-four"
									>
										<span>Pages</span>
										<span className="btn-open-sub" />
									</Link>
									<div id="dropdown-menu-four" className="collapse">
										<ul className="sub-nav-menu">
											<li>
												<Link className="sub-nav-link " href="/about-us">
													About us
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/brands">
													Brands
													<div className="demo-label">
														<span className="demo-new">New</span>
													</div>
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/brands-v2">
													Brands V2
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/contact-1">
													Contact 1
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/contact-2">
													Contact 2
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/faq-1">
													FAQ 01
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/faq-2">
													FAQ 02
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/our-store">
													Our store
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/store-locations">
													Store locator
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/timeline">
													Timeline
													<div className="demo-label">
														<span className="demo-new">New</span>
													</div>
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/view-cart">
													View cart
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/my-account">
													My account
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/wishlist">
													Wishlist
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/terms">
													Terms and conditions
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/page-not-found">
													404 page
												</Link>
											</li>
										</ul>
									</div>
								</li>
								<li className="nav-mb-item">
									<Link
										href="#dropdown-menu-five"
										className="collapsed mb-menu-link current "
										data-bs-toggle="collapse"
										aria-expanded="true"
										aria-controls="dropdown-menu-five"
									>
										<span>Blogs</span>
										<span className="btn-open-sub" />
									</Link>
									<div id="dropdown-menu-five" className="collapse">
										<ul className="sub-nav-menu">
											<li>
												<Link className="sub-nav-link " href="/blog-grid">
													Grid layout
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/blog-sidebar-left">
													Left sidebar
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/blog-sidebar-right">
													Right sidebar
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/blog-list">
													Blog list
												</Link>
											</li>
											<li>
												<Link className="sub-nav-link " href="/blog-detail/1">
													Single Post
												</Link>
											</li>
										</ul>
									</div>
								</li>
								<li className="nav-mb-item">
									<Link
										href="#"
										className="mb-menu-link"
									>
										Buy now
									</Link>
								</li>
							</ul>
							<div className="mb-other-content">
								<div className="d-flex group-icon">
									<Link className="site-nav-icon" href="/wishlist">
										<i className="icon icon-heart" />
										Wishlist
									</Link>
									<Link className="site-nav-icon" href="/home-search">
										<i className="icon icon-search" />
										Search
									</Link>
								</div>
								<div className="mb-notice">
									<Link className="text-need" href="/contact-1">
										Need help ?
									</Link>
								</div>
								<ul className="mb-info">
									<li>
										Address: 1234 Fashion Street, Suite 567, <br />
										New York, NY 10001
									</li>
									<li>
										Email: <b>info@fashionshop.com</b>
									</li>
									<li>
										Phone: <b>(212) 555-1234</b>
									</li>
								</ul>
							</div>
						</div>
						<div className="mb-bottom">
							<Link className="site-nav-icon" href="/login">
								<i className="icon icon-account" />
								Login
							</Link>
							<div className="bottom-bar-language">
								<div className="tf-currencies">
									<div className="dropdown bootstrap-select image-select center style-default type-currencies  dropup">
										<button
											type="button"
											tabIndex={-1}
											className="btn dropdown-toggle btn-light   "
											title="USD $ | United States"
										>
											<div className="filter-option">
												<div className="filter-option-inner">
													<div className="filter-option-inner-inner">
														<img
															alt="image"
															loading="lazy"
															width={640}
															height={480}


															style={{ color: "transparent" }}
															src="/images/country/us.svg"
														/>
														USD $ | United States
													</div>
												</div>
											</div>
										</button>
										<div
											className="dropdown-menu  "
											style={{
												maxHeight: "899.688px",
												overflow: "hidden",
												minHeight: 142,
												position: "absolute",
												inset: "auto auto 0px 0px",
												margin: 0,
												transform: "translate(0px, -20px)",
											}}
											data-popper-placement="top-start"
										>
											<div
												className="inner show"
												style={{
													maxHeight: "869.688px",
													overflowY: "auto",
													minHeight: 112,
												}}
											>
												<ul
													className="dropdown-menu inner show"
													role="presentation"
													style={{ marginTop: 0, marginBottom: 0 }}
												>
													<li>
														<span className="dropdown-item "  >

															<span className="text">
																<img
																	alt="image"
																	loading="lazy"
																	width={640}
																	height={480}


																	style={{ color: "transparent" }}
																	src="/images/country/fr.svg"
																/>
																EUR € | France
															</span>
														</span>
													</li>
													<li>
														<span className="dropdown-item ">
															<span className="text">
																<img
																	alt="image"
																	loading="lazy"
																	width={640}
																	height={480}


																	style={{ color: "transparent" }}
																	src="/images/country/de.svg"
																/>
																EUR € | Germany
															</span>
														</span>
													</li>
													<li>
														<span className="dropdown-item active selected">
															<span className="text">
																<img
																	alt="image"
																	loading="lazy"
																	width={640}
																	height={480}


																	style={{ color: "transparent" }}
																	src="/images/country/us.svg"
																/>
																USD $ | United States
															</span>
														</span>
													</li>
													<li>
														<span className="dropdown-item ">
															<span className="text">
																<img
																	alt="image"
																	loading="lazy"
																	width={640}
																	height={480}


																	style={{ color: "transparent" }}
																	src="/images/country/vn.svg"
																/>
																VND ₫ | Vietnam
															</span>
														</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div className="tf-languages">
									<div className="dropdown bootstrap-select image-select center style-default type-languages  dropup ">
										<select
											className="image-select center style-default type-languages"
											tabIndex="null"
										>
											<option value="en">English</option>
											<option value="ar">العربية</option>
											<option value="zh">简体中文</option>
											<option value="ur">اردو</option>
										</select>
										<button
											type="button"
											tabIndex={-1}
											className="btn dropdown-toggle btn-light   "
										>
											<div className="filter-option">
												<div className="filter-option-inner">
													<div className="filter-option-inner-inner">
														English
													</div>
												</div>
											</div>
										</button>
										<div
											className="dropdown-menu  "
											style={{
												maxHeight: "899.688px",
												overflow: "hidden",
												minHeight: 142,
												position: "absolute",
												inset: "auto auto 0px 0px",
												margin: 0,
												transform: "translate(0px, -20px)",
											}}
											data-popper-placement="top-start"
										>
											<div
												className="inner show"
												style={{
													maxHeight: "869.688px",
													overflowY: "auto",
													minHeight: 112,
												}}
											>
												<ul
													className="dropdown-menu inner show"
													role="presentation"
													style={{ marginTop: 0, marginBottom: 0 }}
												>
													<li className="selected active">
														<span className="dropdown-item active selected">
															<span className="text">English</span>
														</span>
													</li>
													<li className="selected ">
														<span className="dropdown-item ">
															<span className="text">العربية</span>
														</span>
													</li>
													<li className="selected ">
														<span className="dropdown-item ">
															<span className="text">简体中文</span>
														</span>
													</li>
													<li className="selected ">
														<span className="dropdown-item ">
															<span className="text">اردو</span>
														</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>



			</header>
		</>
	);
}
