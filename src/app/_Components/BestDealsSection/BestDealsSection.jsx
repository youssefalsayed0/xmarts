import React from "react";

export default function BestDealsSection() {
	return (
		<section className="flat-spacing-8 ">
			<div className="container">
				<div className="tf-banner-collection">
					<img
						data-src="/images/collections/banner-collection-3.jpg"
						alt="img-banner"
						loading="lazy"
						width={1400}
						height={532}
						decoding="async"
						data-nimg={1}
						className="lazyload"
						style={{ color: "transparent" }}
						src="/images/collections/banner-collection-3.jpg"
					/>
					<div className="box-content">
						<div
							className="container wow fadeInUp"
							data-wow-delay="0s"
							style={{ visibility: "visible", animationDelay: "0s" }}
						>
							<div className="sub fw-7 text_white">
								SALE UP TO 30% OFF TODAY
							</div>
							<h2 className="heading fw-6 text_white">Best Deals Discounts</h2>
							<p className="text_white">Fast wireless charging on-the-go.</p>
							<a
								className="rounded-full tf-btn btn-primary-main style-3 fw-6 btn-light-icon animate-hover-btn"
								href="/shop-default"
							>
								<span>Shop Collection</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
