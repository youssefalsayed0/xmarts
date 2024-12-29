"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import slider1 from "@images/category/slider1.jpeg";
import slider2 from "@images/category/slider2.jpeg";
import slider3 from "@images/category/slider3.jpeg";
import slider4 from "@images/category/slider4.jpeg";
import slider5 from "@images/category/slider5.jpeg";
import slider6 from "@images/category/slider6.jpeg";
import Image from "next/image";
import Link from "next/link";

export default function CategoriesSection() {
	return (
		<>
			<section className="flat-spacing-10 flat-testimonial catg-slider">
				<div className="container">
					<div className="wrap-carousel style-2">
						<Swiper
							modules={[Navigation, Pagination]}
							navigation={{
								prevE: ".nav-next-slider",
								nextEl: ".nav-prev-slider",
							}}
							pagination={{
								clickable: true,
								el: ".catg-dots ",
							}}
							breakpoints={{
								// Breakpoints for responsive design
								320: {
									slidesPerView: 2, // 1 slide for very small screens
								},
								768: {
									slidesPerView: 4, // 4 slides for tablets
								},
								1024: {
									slidesPerView: 6, // 6 slides for desktops
								},
							}}
							className="  swiper-horizontal tf-sw-testimonial swiper-backface-hidden"
							dir="ltr"
						>
							<div className="swiper-wrapper">
								<SwiperSlide>
									<div className="collection-item-circle has-bg hover-img">
										<Link
											className="collection-image img-style"
											href="/all-products"
										>
											<Image
												data-src={slider1}
												alt="collection-img"
												loading="lazy"
												src={slider1}
												style={{ color: "transparent" }}
											/>
										</Link>
										<div className="collection-content text-center">
											<Link
												className="link title fw-6"
												href="/all-products"
											>
												Vegetables & Fruits
											</Link>
										</div>
									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="collection-item-circle has-bg hover-img">
										<Link
											className="collection-image img-style"
											href="/all-products"
										>
											<Image
												data-src={slider2}
												alt="collection-img"
												loading="lazy"
												src={slider2}
												style={{ color: "transparent" }}
											/>
										</Link>
										<div className="collection-content text-center">
											<Link
												className="link title fw-6"
												href="/all-products"
											>
												Meat
											</Link>
										</div>
									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="collection-item-circle has-bg hover-img">
										<Link
											className="collection-image img-style"
											href="/all-products"
										>
											<Image
												data-src={slider3}
												alt="collection-img"
												loading="lazy"
												src={slider3}
												style={{ color: "transparent" }}
											/>
										</Link>
										<div className="collection-content text-center">
											<Link
												className="link title fw-6"
												href="/all-products"
											>
												Bakery
											</Link>
										</div>
									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="collection-item-circle has-bg hover-img">
										<Link
											className="collection-image img-style"
											href="/all-products"
										>
											<Image
												data-src={slider4}
												alt="collection-img"
												loading="lazy"
												src={slider4}
												style={{ color: "transparent" }}
											/>
										</Link>
										<div className="collection-content text-center">
											<Link
												className="link title fw-6"
												href="/all-products"
											>
												Cereals and Grains
											</Link>
										</div>
									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="collection-item-circle has-bg hover-img">
										<Link
											className="collection-image img-style"
											href="/all-products"
										>
											<Image
												data-src={slider5}
												alt="collection-img"
												loading="lazy"
												src={slider5}
												style={{ color: "transparent" }}
											/>
										</Link>
										<div className="collection-content text-center">
											<Link
												className="link title fw-6"
												href="/all-products"
											>
												Beverages
											</Link>
										</div>
									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="collection-item-circle has-bg hover-img">
										<Link
											className="collection-image img-style"
											href="/all-products"
										>
											<Image
												data-src={slider6}
												alt="collection-img"
												loading="lazy"
												src={slider6}
												style={{ color: "transparent" }}
											/>
										</Link>
										<div className="collection-content text-center">
											<Link
												className="link title fw-6"
												href="/all-products"
											>
												Cleaning Products
											</Link>
										</div>
									</div>
								</SwiperSlide>
								
								<SwiperSlide>
									<div className="collection-item-circle has-bg hover-img">
										<Link
											className="collection-image img-style"
											href="/all-products"
										>
											<Image
												data-src={slider1}
												alt="collection-img"
												loading="lazy"
												src={slider1}
												style={{ color: "transparent" }}
											/>
										</Link>
										<div className="collection-content text-center">
											<Link
												className="link title fw-6"
												href="/all-products"
											>
												Vegetables & Fruits
											</Link>
										</div>
									</div>
								</SwiperSlide>
							</div>
						</Swiper>

						<div className="nav-sw nav-next-slider nav-next-testimonial lg snbp186 swiper-button-disabled">
							<span className="icon icon-arrow-left" />
						</div>
						<div className="nav-sw nav-prev-slider nav-prev-testimonial lg snbn186">
							<span className="icon icon-arrow-right" />
						</div>

						<div className="catg-dots sw-dots style-2 sw-pagination-testimonial justify-content-center spd186 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>
					</div>
				</div>
			</section>
		</>
	);
}
