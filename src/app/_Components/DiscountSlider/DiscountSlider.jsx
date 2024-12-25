import React from "react";

export default function DiscountSlider() {
	return (
		<>
			<section className="bg-yellow-8 flat-spacing-18">
				<div className="flat-title">
					<span
						className="title wow fadeInUp"
						data-wow-delay="0s"
						style={{ visibility: "visible", animationDelay: "0s" }}
					>
						See what our other sock lovers think
					</span>
				</div>
				<div className="container">
					<div className="wrap-carousel">
						<div
							className="swiper swiper-initialized swiper-horizontal swiper-backface-hidden"
							dir="ltr"
						>
							<div
								className="swiper-wrapper"
								style={{
									transitionDuration: "0ms",
									transform: "translate3d(-605.5px, 0px, 0px)",
									transitionDelay: "0ms",
								}}
							>
								<div
									className="swiper-slide swiper-slide-prev"
									style={{ width: "575.5px", marginRight: 30 }}
								>
									<div className="testimonial-item style-row">
										<div className="image">
											<img
												data-src="/images/item/test-sock.jpg"
												alt
												loading="lazy"
												width={488}
												height={620}
												decoding="async"
												data-nimg={1}
												className="lazyload"
												src="/images/item/test-sock.jpg"
												style={{ color: "transparent" }}
											/>
										</div>
										<div className="content">
											<div className="rating color-black">
												<i className="icon-start" />
												<i className="icon-start" />
												<i className="icon-start" />
												<i className="icon-start" />
												<i className="icon-start" />
											</div>
											<div className="text">
												“I always find something stylish and affordable on this
												web fashion site”
											</div>
											<div className="author pb_8 line-black">
												<div className="name">Robert Smith</div>
												<div className="metas">Customer from USA</div>
											</div>
											<div className="product">
												<div className="img-thumb radius-5 o-hidden">
													<img
														data-src="/images/item/dot-test-sock.jpg"
														alt
														loading="lazy"
														width={70}
														height={70}
														decoding="async"
														data-nimg={1}
														className="lazyload"
														src="/images/item/dot-test-sock.jpg"
														style={{ color: "transparent" }}
													/>
												</div>
												<div className="content-wrap">
													<div className="product-title">
														<a href="#">Crossover Leggings</a>
													</div>
													<div className="price">$38.00</div>
												</div>
												<a href="#">
													<i className="icon-arrow1-top-left" />
												</a>
											</div>
										</div>
									</div>
								</div>
								<div
									className="swiper-slide swiper-slide-active"
									style={{ width: "575.5px", marginRight: 30 }}
								>
									<div className="testimonial-item style-row">
										<div className="image">
											<img
												data-src="/images/item/test-sock2.jpg"
												alt
												loading="lazy"
												width={488}
												height={620}
												decoding="async"
												data-nimg={1}
												className="lazyload"
												src="/images/item/test-sock2.jpg"
												style={{ color: "transparent" }}
											/>
										</div>
										<div className="content">
											<div className="rating color-black">
												<i className="icon-start" />
												<i className="icon-start" />
												<i className="icon-start" />
												<i className="icon-start" />
												<i className="icon-start" />
											</div>
											<div className="text">
												“I always find something stylish and affordable on this
												web fashion site”
											</div>
											<div className="author pb_8 line-black">
												<div className="name">Robert Smith</div>
												<div className="metas">Customer from USA</div>
											</div>
											<div className="product">
												<div className="img-thumb radius-5 o-hidden">
													<img
														data-src="/images/products/sock15.jpg"
														alt
														loading="lazy"
														width={360}
														height={360}
														decoding="async"
														data-nimg={1}
														className="lazyload"
														src="/images/products/sock15.jpg"
														style={{ color: "transparent" }}
													/>
												</div>
												<div className="content-wrap">
													<div className="product-title">
														<a href="#">Crossover Leggings</a>
													</div>
													<div className="price">$38.00</div>
												</div>
												<a href="#">
													<i className="icon-arrow1-top-left" />
												</a>
											</div>
										</div>
									</div>
								</div>
								<div
									className="swiper-slide swiper-slide-next"
									style={{ width: "575.5px", marginRight: 30 }}
								>
									<div className="testimonial-item style-row">
										<div className="image">
											<img
												data-src="/images/item/test-sock.jpg"
												alt
												loading="lazy"
												width={488}
												height={620}
												decoding="async"
												data-nimg={1}
												className="lazyload"
												src="/images/item/test-sock.jpg"
												style={{ color: "transparent" }}
											/>
										</div>
										<div className="content">
											<div className="rating color-black">
												<i className="icon-start" />
												<i className="icon-start" />
												<i className="icon-start" />
												<i className="icon-start" />
												<i className="icon-start" />
											</div>
											<div className="text">
												“I always find something stylish and affordable on this
												web fashion site”
											</div>
											<div className="author pb_8 line-black">
												<div className="name">Robert Smith</div>
												<div className="metas">Customer from USA</div>
											</div>
											<div className="product">
												<div className="img-thumb radius-5 o-hidden">
													<img
														data-src="/images/products/sock14.jpg"
														alt
														loading="lazy"
														width={360}
														height={360}
														decoding="async"
														data-nimg={1}
														className="lazyload"
														src="/images/products/sock14.jpg"
														style={{ color: "transparent" }}
													/>
												</div>
												<div className="content-wrap">
													<div className="product-title">
														<a href="#">Crossover Leggings</a>
													</div>
													<div className="price">$38.00</div>
												</div>
												<a href="#">
													<i className="icon-arrow1-top-left" />
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="nav-sw nav-next-slider nav-next-testimonial lg snbp277">
							<span className="icon icon-arrow-left" />
						</div>
						<div className="nav-sw nav-prev-slider nav-prev-testimonial lg snbn277 swiper-button-disabled">
							<span className="icon icon-arrow-right" />
						</div>
						<div className="sw-dots style-2 sw-pagination-testimonial justify-content-center spd277 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
							<span className="swiper-pagination-bullet" />
							<span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
