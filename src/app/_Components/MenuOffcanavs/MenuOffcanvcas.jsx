import Link from "next/link";

export default function MenuOffcanvcas() {
  return (
    <>
    
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
							{/* <div className="bottom-bar-language">
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
							</div> */}
						</div>
					</div>
				</div>

    
    </>
  )
}
