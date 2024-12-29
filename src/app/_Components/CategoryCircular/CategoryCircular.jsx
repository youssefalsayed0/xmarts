import React from "react";
import Link from "next/link";

export default function CategoryCircular() {
	return (
		<>
			<section className="flat-spacing-20">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="tf-categories-wrap">
								<div className="tf-categories-container">
									<div className="collection-item-circle hover-img position-relative">
										<Link
											className="collection-image img-style"
											href="/shop-collection-sub"
										>
											<img
												data-src="/images/collections/collection-circle-8.jpg"
												alt="collection-img"
												loading="lazy"
												width={160}
												height={160}



												src="/images/collections/collection-circle-8.jpg"
												style={{ color: "transparent" }}
											/>
										</Link>
										<div className="collection-content text-center">
											<Link
												className="link title fw-6"
												href="/shop-collection-sub"
											>
												New Arrivals
											</Link>
										</div>
									</div>
									<div className="collection-item-circle hover-img position-relative">
										<Link
											className="collection-image img-style"
											href="/shop-collection-sub"
										>
											<img
												data-src="/images/collections/collection-circle-9.jpg"
												alt="collection-img"
												loading="lazy"
												width={160}
												height={160}



												src="/images/collections/collection-circle-9.jpg"
												style={{ color: "transparent" }}
											/>
										</Link>
										<div className="collection-content text-center">
											<Link
												className="link title fw-6"
												href="/shop-collection-sub"
											>
												Best Sellers
											</Link>
										</div>
									</div>
									<div className="collection-item-circle hover-img position-relative">
										<Link
											className="collection-image img-style"
											href="/shop-collection-sub"
										>
											<img
												data-src="/images/collections/collection-circle-10.jpg"
												alt="collection-img"
												loading="lazy"
												width={160}
												height={162}



												src="/images/collections/collection-circle-10.jpg"
												style={{ color: "transparent" }}
											/>
										</Link>
										<div className="collection-content text-center">
											<Link
												className="link title fw-6"
												href="/shop-collection-sub"
											>
												Top Rated
											</Link>
										</div>
									</div>
									<div className="collection-item-circle hover-img position-relative">
										<Link
											className="collection-image img-style"
											href="/shop-collection-sub"
										>
											<img
												data-src="/images/collections/collection-circle-11.jpg"
												alt="collection-img"
												loading="lazy"
												width={160}
												height={162}



												src="/images/collections/collection-circle-11.jpg"
												style={{ color: "transparent" }}
											/>
										</Link>
										<div className="collection-content text-center">
											<Link
												className="link title fw-6"
												href="/shop-collection-sub"
											>
												Brands We Love
											</Link>
										</div>
									</div>
									<div className="collection-item-circle hover-img position-relative">
										<Link
											className="collection-image img-style"
											href="/shop-collection-sub"
										>
											<img
												data-src="/images/collections/collection-circle-12.jpg"
												alt="collection-img"
												loading="lazy"
												width={160}
												height={160}



												src="/images/collections/collection-circle-12.jpg"
												style={{ color: "transparent" }}
											/>
										</Link>
										<div className="collection-content text-center">
											<Link
												className="link title fw-6"
												href="/shop-collection-sub"
											>
												Trending
											</Link>
										</div>
									</div>
									<div className="collection-item-circle hover-img position-relative">
										<Link
											className="collection-image img-style"
											href="/shop-collection-sub"
										>
											<img
												data-src="/images/collections/collection-circle-13.jpg"
												alt="collection-img"
												loading="lazy"
												width={160}
												height={160}



												src="/images/collections/collection-circle-13.jpg"
												style={{ color: "transparent" }}
											/>
										</Link>
										<div
											className="has-saleoff-wrap "
											style={{ position: "absolute", top: 0 }}
										>
											<div className="sale-off fw-5">30% off</div>
										</div>
										<div className="collection-content text-center">
											<Link
												className="link title fw-6"
												href="/shop-collection-sub"
											>
												The Re-Imagined
											</Link>
										</div>
									</div>
								</div>
								<div className="tf-shopall-wrap">
									<div className="collection-item-circle tf-shopall">
										<Link
											className="collection-image img-style tf-shopall-icon"
											href="/shop-collection-sub"
										>
											<i className="icon icon-arrow1-top-left" />
										</Link>
										<div className="collection-content text-center">
											<Link
												className="link title fw-6"
												href="/shop-collection-sub"
											>
												Shop all
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
