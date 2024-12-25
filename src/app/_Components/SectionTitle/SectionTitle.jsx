import React from "react";

export default function SectionTitle({ text }) {
	return (
		<>
			<div className="flat-title flex-row justify-content-between px-0">
				<span
					className="title wow fadeInUp"
					data-wow-delay="0s"
					style={{ visibility: "visible", animationDelay: "0s" }}
				>
{text}
			</span>
				<div className="box-sw-navigation">
					<div className="nav-sw square nav-next-slider nav-next-product snbp156 swiper-button-disabled">
						<span className="icon icon-arrow1-left" />
					</div>
					<div className="nav-sw square nav-prev-slider nav-prev-product snbn156">
						<span className="icon icon-arrow1-right" />
					</div>
				</div>
			</div>
		</>
	);
}
