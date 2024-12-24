import React from "react";
export default function Features() {
    
	return (
		<>
			<section
				className="flat-spacing-7 flat-iconbox wow fadeInUp"
				data-wow-delay="0s"
				style={{ visibility: "visible", animationDelay: "0s" }}
			>
				<div className="container">
					<div className="wrap-carousel wrap-mobile">
						<div
							className="swiper swiper-initialized swiper-horizontal tf-sw-mobile swiper-backface-hidden"
							dir="ltr"
							data-preview={1}
							data-space={15}
						>
							<div className="swiper-wrapper">
								<div
									className="swiper-slide swiper-slide-active"
									style={{ width: 298, marginRight: 30 }}
								>
									<div className="tf-icon-box style-border-line text-center">
										<div className="icon">
											<i className="icon-shipping" />
										</div>
										<div className="content">
											<div className="title">Free Shipping</div>
											<p>Free shipping over order $120</p>
										</div>
									</div>
								</div>
								<div
									className="swiper-slide swiper-slide-next"
									style={{ width: 298, marginRight: 30 }}
								>
									<div className="tf-icon-box style-border-line text-center">
										<div className="icon">
											<i className="icon-payment fs-22" />
										</div>
										<div className="content">
											<div className="title">Flexible Payment</div>
											<p>Pay with Multiple Credit Cards</p>
										</div>
									</div>
								</div>
								<div
									className="swiper-slide"
									style={{ width: 298, marginRight: 30 }}
								>
									<div className="tf-icon-box style-border-line text-center">
										<div className="icon">
											<i className="icon-return fs-20" />
										</div>
										<div className="content">
											<div className="title">14 Day Returns</div>
											<p>Within 30 days for an exchange</p>
										</div>
									</div>
								</div>
								<div
									className="swiper-slide"
									style={{ width: 298, marginRight: 30 }}
								>
									<div className="tf-icon-box style-border-line text-center">
										<div className="icon">
											<i className="icon-suport" />
										</div>
										<div className="content">
											<div className="title">Premium Support</div>
											<p>Outstanding premium support</p>
										</div>
									</div>
								</div>
								<div
									className="swiper-slide"
									style={{ width: 298, marginRight: 30 }}
								>
									<div className="tf-icon-box style-border-line text-center">
										<div className="icon">
											<i className="icon-shipping" />
										</div>
										<div className="content">
											<div className="title">Free Shipping</div>
											<p>Free shipping over order $120</p>
										</div>
									</div>
								</div>
								<div
									className="swiper-slide"
									style={{ width: 298, marginRight: 30 }}
								>
									<div className="tf-icon-box style-border-line text-center">
										<div className="icon">
											<i className="icon-payment fs-22" />
										</div>
										<div className="content">
											<div className="title">Flexible Payment</div>
											<p>Pay with Multiple Credit Cards</p>
										</div>
									</div>
								</div>
								<div
									className="swiper-slide"
									style={{ width: 298, marginRight: 30 }}
								>
									<div className="tf-icon-box style-border-line text-center">
										<div className="icon">
											<i className="icon-return fs-20" />
										</div>
										<div className="content">
											<div className="title">14 Day Returns</div>
											<p>Within 30 days for an exchange</p>
										</div>
									</div>
								</div>
								<div
									className="swiper-slide"
									style={{ width: 298, marginRight: 30 }}
								>
									<div className="tf-icon-box style-border-line text-center">
										<div className="icon">
											<i className="icon-suport" />
										</div>
										<div className="content">
											<div className="title">Premium Support</div>
											<p>Outstanding premium support</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="sw-dots style-2 sw-pagination-mb justify-content-center spd103 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
							<span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
							<span className="swiper-pagination-bullet" />
							<span className="swiper-pagination-bullet" />
							<span className="swiper-pagination-bullet" />
							<span className="swiper-pagination-bullet" />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
