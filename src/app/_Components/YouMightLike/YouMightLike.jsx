import React from "react";
import Link from "next/link";

export default function YouMightLike() {
	return (
		<>
			<section className="flat-spacing-29">
				<div className="container">
					<div
						className="swiper swiper-initialized swiper-horizontal swiper-backface-hidden"
						dir="ltr"
					>
						<div className="swiper-wrapper">
							<div
								className="swiper-slide swiper-slide-active"
								style={{ width: "698.5px", marginRight: 30 }}
							>
								<div className="collection-item-v4 style-4 hover-img">
									<div className="collection-inner">
										<Link
											className="collection-image img-style"
											href="/shop-collection-sub"
										>
											<img
												data-src="/images/collections/cls-sock.jpg"
												alt="collection-img"
												loading="lazy"
												width={800}
												height={792}



												src="/images/collections/cls-sock.jpg"
												style={{ color: "transparent" }}
											/>
										</Link>
										<div
											className="collection-content wow fadeInUp"
											data-wow-delay="0s"
											style={{ visibility: "visible", animationDelay: "0s" }}
										>
											<p className="subheading text_white">UP TO 30% OFF</p>
											<h5 className="heading text_white">Beachwear on Sale</h5>
											<Link
												className="tf-btn btn-color-2 style-3 text-uppercase rounded-0 fw-6 animate-hover-btn letter-2"
												href="/shop-collection-sub"
											>
												<span>Shop now</span>
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div
								className="swiper-slide swiper-slide-next"
								style={{ width: "698.5px", marginRight: 30 }}
							>
								<div className="collection-item-v4 style-4 hover-img">
									<div className="collection-inner">
										<Link
											className="collection-image img-style"
											href="/shop-collection-sub"
										>
											<img
												data-src="/images/collections/cls-sock2.jpg"
												alt="collection-img"
												loading="lazy"
												width={800}
												height={792}



												src="/images/collections/cls-sock2.jpg"
												style={{ color: "transparent" }}
											/>
										</Link>
										<div
											className="collection-content wow fadeInUp"
											data-wow-delay="0s"
											style={{ visibility: "visible", animationDelay: "0s" }}
										>
											<p className="subheading text_white">UP TO 30% OFF</p>
											<h5 className="heading text_white">Athleisure Wear</h5>
											<Link
												className="tf-btn btn-color-3 text-uppercase style-3 rounded-0 fw-6 animate-hover-btn letter-2"
												href="/shop-collection-sub"
											>
												<span>Shop now</span>
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div
								className="swiper-slide"
								style={{ width: "698.5px", marginRight: 30 }}
							>
								<div className="collection-item-v4 style-4 hover-img">
									<div className="collection-inner">
										<Link
											className="collection-image img-style"
											href="/shop-collection-sub"
										>
											<img
												data-src="/images/collections/cls-sock.jpg"
												alt="collection-img"
												loading="lazy"
												width={800}
												height={792}



												src="/images/collections/cls-sock.jpg"
												style={{ color: "transparent" }}
											/>
										</Link>
										<div
											className="collection-content wow fadeInUp"
											data-wow-delay="0s"
											style={{ visibility: "visible", animationDelay: "0s" }}
										>
											<p className="subheading text_white">UP TO 30% OFF</p>
											<h5 className="heading text_white">Beachwear on Sale</h5>
											<Link
												className="tf-btn btn-color-2 style-3 text-uppercase rounded-0 fw-6 animate-hover-btn letter-2"
												href="/shop-collection-sub"
											>
												<span>Shop now</span>
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div
								className="swiper-slide"
								style={{ width: "698.5px", marginRight: 30 }}
							>
								<div className="collection-item-v4 style-4 hover-img">
									<div className="collection-inner">
										<Link
											className="collection-image img-style"
											href="/shop-collection-sub"
										>
											<img
												data-src="/images/collections/cls-sock2.jpg"
												alt="collection-img"
												loading="lazy"
												width={800}
												height={792}



												src="/images/collections/cls-sock2.jpg"
												style={{ color: "transparent" }}
											/>
										</Link>
										<div
											className="collection-content wow fadeInUp"
											data-wow-delay="0s"
											style={{ visibility: "visible", animationDelay: "0s" }}
										>
											<p className="subheading text_white">UP TO 30% OFF</p>
											<h5 className="heading text_white">Athleisure Wear</h5>
											<Link
												className="tf-btn btn-color-3 text-uppercase style-3 rounded-0 fw-6 animate-hover-btn letter-2"
												href="/shop-collection-sub"
											>
												<span>Shop now</span>
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
