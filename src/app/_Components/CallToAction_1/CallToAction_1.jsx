import Link from "next/link";
import React from "react";
import Image from "next/image";
import call from "@images/call1.jpg";
export default function CallToAction_1() {
	return (
		<>
			<section className="flat-spacing-24">
				<div className="container">
					<div className="tf-grid-layout md-col-2 tf-img-with-text img-text-3">
						<div
							className="tf-image wow fadeInUp"
							data-wow-delay="0s"
							style={{ visibility: "visible", animationDelay: "0s" }}
						>
							<div className="grid-img-group">
								<div className="box-img item-1 hover-img tf-image-wrap">
									<div className="img-style">
										<Image
											data-src="/images/collections/dog-1.jpg"
											alt="img-slider"
											loading="lazy"
											width={272}
											height={325}
											decoding="async"
											data-nimg={1}
											className="lazyload"
											style={{ color: "transparent" }}
											src={call}
										/>
									</div>
								</div>
								<div className="box-img item-2 hover-img tf-image-wrap">
									<div className="img-style">
										<Image
											data-src="/images/collections/dog-2.jpg"
											alt="img-slider"
											loading="lazy"
											width={400}
											height={539}
											decoding="async"
											data-nimg={1}
											className="lazyload"
											style={{ color: "transparent" }}
											src={call}
										/>
									</div>
								</div>
								<div className="box-img item-3 hover-img tf-image-wrap">
									<div className="img-style">
										<Image
											data-src="/images/collections/dog-3.jpg"
											alt="img-slider"
											loading="lazy"
											width={217}
											height={219}
											decoding="async"
											data-nimg={1}
											className="lazyload"
											style={{ color: "transparent" }}
											src={call}
										/>
									</div>
								</div>
							</div>
						</div>
						<div
							className="tf-content-wrap wow fadeInUp"
							data-wow-delay="0s"
							style={{ visibility: "visible", animationDelay: "0s" }}
						>
							<h3 className="heading fade-item fade-item-1">
              Shop everything you need from the comfort of your home!
							</h3>
							<p className="desc fade-item fade-item-2">
              With our online supermarket, we offer you the best quality products at great prices with fast delivery to your doorstep
							</p>
							<Link
								className="tf-btn btn-line letter-spacing-1 fw-6"
								href="/shop-default"
							>
								SHOP NOW
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
