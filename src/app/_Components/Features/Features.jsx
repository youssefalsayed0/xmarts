import React from "react";
export default function Features() {
	return (
		<>
			<section className="flat-spacing-9 flat-iconbox-v2">
				<div className="container">
					<div
						className="wrap-carousel wrap-mobile wow fadeInUp"
						data-wow-delay="0s"
						style={{ visibility: "visible", animationDelay: "0s" }}
					>
						<div
							className="swiper swiper-initialized swiper-horizontal tf-sw-mobile swiper-backface-hidden"
							dir="ltr"
						>
							<div
								className="swiper-wrapper"
								style={{
									transitionDuration: "0ms",
									transitionDelay: "0ms",
									transform: "translate3d(0px, 0px, 0px)",
								}}
							>
								<div
									className="swiper-slide swiper-slide-active"
									style={{ width: "469.333px", marginRight: 15 }}
								>
									<div className="tf-icon-box text-center">
										<div className="icon">
											<i className="icon-shipping-1" />
										</div>
										<div className="content">
											<div className="title">Free Shipping</div>
											<p>Free shipping over order $120</p>
										</div>
									</div>
								</div>
								<div
									className="swiper-slide swiper-slide-next"
									style={{ width: "469.333px", marginRight: 15 }}
								>
									<div className="tf-icon-box text-center">
										<div className="icon">
											<i className="icon-payment-1" />
										</div>
										<div className="content">
											<div className="title">Flexible Payment</div>
											<p>Pay with Multiple Credit Cards</p>
										</div>
									</div>
								</div>
								<div
									className="swiper-slide"
									style={{ width: "469.333px", marginRight: 15 }}
								>
									<div className="tf-icon-box text-center">
										<div className="icon">
											<i className="icon-return-1" />
										</div>
										<div className="content">
											<div className="title">14 Day Returns</div>
											<p>Within 30 days for an exchange</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="sw-dots style-2 sw-pagination-mb justify-content-center spd124 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-lock">
							<span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
