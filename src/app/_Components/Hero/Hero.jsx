"use client"
import Image from "next/image";
import React, { useEffect } from "react";
import hero from "../../../assets/images/sneaker-1.jpg.png";
export default function Hero() {
 
	return (
		<section className="tf-slideshow slideshow-effect slider-effect-fade position-relative">
			<div
				className="swiper swiper-fade swiper-initialized swiper-horizontal swiper-watch-progress tf-sw-effect swiper-backface-hidden"
				dir="ltr"
			>
				<div
					className="swiper-wrapper"
					style={{ transitionDuration: "0ms", transitionDelay: "0ms" }}
				>
					<div
						className="swiper-slide swiper-slide-prev"
						style={{
							width: 1382,
							opacity: 1,
							transform: "translate3d(0px, 0px, 0px)",
							transitionDuration: "0ms",
						}}
					>
						<div className="slider-effect wrap-slider">
							<div className="content-left">
								<div className="container">
									<div className="row">
										<div className="col-md-6 col-12">
											<div className="box-content">
												<h1 className="heading fade-item fade-item-1">
													Summer
													<br />
													Escapades
													<br />
												</h1>
												<p className="desc fade-item fade-item-2">
													Embrace the sun-kissed season with our collection of
													breezy
												</p>
												<a
													className="fade-item fade-item-3 tf-btn btn-light-icon animate-hover-btn btn-xl radius-3"
													href="/shop-collection-list"
												>
													<span>Shop collection</span>
													<i className="icon icon-arrow-right" />
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="img-slider">
								<Image
								
									alt="fashion-slideshow"
									
									width={960}
									height={862}
									decoding="async"
									data-nimg={1}
									className="lazyload"
									style={{ color: "transparent" }}
									src={hero}
								/>
							</div>
						</div>
					</div>
					<div
						className="swiper-slide swiper-slide-visible swiper-slide-fully-visible swiper-slide-active"
						style={{
							width: 1382,
							opacity: 1,
							transform: "translate3d(-1382px, 0px, 0px)",
							transitionDuration: "0ms",
						}}
					>
						<div className="slider-effect wrap-slider">
							<div className="content-left">
								<div className="container">
									<div className="row">
										<div className="col-md-6 col-12">
											<div className="box-content">
												<h1 className="heading fade-item fade-item-2">
													Multi-faceted
													<br />
													Beauty
													<br />
												</h1>
												<p className="desc fade-item fade-item-3">
													Embrace the sun-kissed season with our collection of
													breezy
												</p>
												<a
													className="fade-item fade-item-4 tf-btn btn-light-icon animate-hover-btn btn-xl radius-3"
													href="/shop-collection-list"
												>
													<span>Shop collection</span>
													<i className="icon icon-arrow-right" />
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="img-slider">
								<Image
									data-src="/images/slider/fashion-06-slide2.jpg"
									alt="fashion-slideshow"
								
									width={960}
									height={862}
									decoding="async"
									data-nimg={1}
									className="lazyload"
									style={{ color: "transparent" }}
									src={hero}
								/>
							</div>
						</div>
					</div>
					<div
						className="swiper-slide swiper-slide-next"
						style={{
							width: 1382,
							opacity: 0,
							transform: "translate3d(-2764px, 0px, 0px)",
							transitionDuration: "0ms",
						}}
					>
						<div className="slider-effect wrap-slider">
							<div className="content-left">
								<div className="container">
									<div className="row">
										<div className="col-md-6 col-12">
											<div className="box-content">
												<h1 className="heading fade-item fade-item-3">
													Effortless
													<br />
													Elegance
													<br />
												</h1>
												<p className="desc fade-item fade-item-4">
													Embrace the sun-kissed season with our collection of
													breezy
												</p>
												<a
													className="fade-item fade-item-5 tf-btn btn-light-icon animate-hover-btn btn-xl radius-3"
													href="/shop-collection-list"
												>
													<span>Shop collection</span>
													<i className="icon icon-arrow-right" />
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="img-slider">
								<img
									data-src="/images/slider/fashion-06-slide3.jpg"
									alt="fashion-slideshow"
							
									width={960}
									height={862}
									decoding="async"
									data-nimg={1}
									className="lazyload"
									style={{ color: "transparent" }}
									src="/images/slider/fashion-06-slide3.jpg"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="wrap-pagination">
				<div className="container">
					<div className="sw-dots sph6 line-pagination sw-pagination-slider swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
						<span className="swiper-pagination-bullet" />
						<span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
						<span className="swiper-pagination-bullet" />
					</div>
				</div>
			</div>
		</section>
	);
}
