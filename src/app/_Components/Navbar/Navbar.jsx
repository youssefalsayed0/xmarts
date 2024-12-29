import React from "react";
import Link from 'next/link';
import logo from "@images/Xmarts.png";
import Image from "next/image";
import MenuOffcanvcas from "../MenuOffcanavs/MenuOffcanvcas";

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
										<Link href="/" className="item-link   activeMenu ">
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
												<li >
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
												<li >
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
												<li >
													<Link
														className="menu-link-text link text_black-2 position-relative  "
														style={{ position: "relative" }}
														href="/view-cart"
													>
														View cart{/* */}
													</Link>
												</li>
												<li >
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
												<li >
													<Link
														className="menu-link-text link text_black-2 position-relative  "
														style={{ position: "relative" }}
														href="/invoice"
													>
														Invoice{/* */}
													</Link>
												</li>
												<li >
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
										href="/search"
										className="nav-icon-item"
									>
										<i className="icon icon-search" />
									</Link>
								</li>
								<li className="nav-account">
									<Link
										href="/login"
										className="nav-icon-item"
									>
										<i className="icon icon-account" />
									</Link>
								</li>
								<li className="nav-wishlist">
									<Link className="nav-icon-item" href="/wish-list">
										<i className="icon icon-heart" />
										<span className="count-box bg-yellow-9 text_black">3</span>
									</Link>
								</li>
								<li className="nav-cart">
									<Link
										href="/cart"
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

				

			</header>
		
		<MenuOffcanvcas/>
		</>
	);
}
