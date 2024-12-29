import Link from "next/link";
import React from "react";

export default function FilterOffcanvas() {
	return (
		<>
			<div
				className="offcanvas offcanvas-start canvas-filter "
				id="filterShop"
				aria-modal="true"
				role="dialog"
			>
				<div className="canvas-wrapper">
					<header className="canvas-header">
						<div className="filter-icon">
							<span className="icon icon-filter" />
							<span>Filter</span>
						</div>
						<span
							className="icon-close icon-close-popup"
							data-bs-dismiss="offcanvas"
							aria-label="Close"
						/>
					</header>
					<div className="canvas-body">
						<div className="widget-facet wd-categories">
							<div
								className="facet-title"
								data-bs-target="#categories"
								data-bs-toggle="collapse"
								aria-expanded="true"
								aria-controls="categories"
							>
								<span>Product categories</span>
								<span className="icon icon-arrow-up" />
							</div>
							<div id="categories" className="collapse show">
								<ul className="list-categoris current-scrollbar mb_36">
									<li className="cate-item">
										<Link href="/shop-default">
											<span>Fashion</span>
										</Link>
									</li>
									<li className="cate-item">
										<Link href="/shop-men">
											<span>Men</span>
										</Link>
									</li>
									<li className="cate-item">
										<Link href="/shop-women">
											<span>Women</span>
										</Link>
									</li>
									<li className="cate-item">
										<Link href="/shop-default">
											<span>Denim</span>
										</Link>
									</li>
									<li className="cate-item">
										<Link href="/shop-default">
											<span>Dress</span>
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<form
							action="#"
							id="facet-filter-form"
							className="facet-filter-form"
						>
							<div className="widget-facet">
								<div
									className="facet-title"
									data-bs-target="#availability"
									data-bs-toggle="collapse"
									aria-expanded="true"
									aria-controls="availability"
								>
									<span>Availability</span>
									<span className="icon icon-arrow-up" />
								</div>
								<div id="availability" className="collapse show">
									<ul className="tf-filter-group current-scrollbar mb_36">
										<li className="list-item d-flex gap-12 align-items-center">
											<input className="tf-check" readOnly type="radio" />
											<label className="label">
												<span>Available</span>&nbsp;<span>(9)</span>
											</label>
										</li>
										<li className="list-item d-flex gap-12 align-items-center">
											<input className="tf-check" readOnly type="radio" />
											<label className="label">
												<span>Out of Stock</span>&nbsp;<span>(3)</span>
											</label>
										</li>
									</ul>
								</div>
							</div>
							<div className="widget-facet wrap-price">
								<div
									className="facet-title"
									data-bs-target="#price"
									data-bs-toggle="collapse"
									aria-expanded="true"
									aria-controls="price"
								>
									<span>Price</span>
									<span className="icon icon-arrow-up" />
								</div>
								<div id="price" className="collapse show">
									<div className="widget-price filter-price">
										<div className="rc-slider rc-slider-horizontal" id="slider">
											<div className="rc-slider-rail" />
											<div
												className="rc-slider-track rc-slider-track-1"
												style={{ left: "29.4118%", width: "58.8235%" }}
											/>
											<div className="rc-slider-step" />
											<div
												className="rc-slider-handle rc-slider-handle-1"
												tabIndex={0}
												role="slider"
												aria-valuemin={5}
												aria-valuemax={22}
												aria-valuenow={10}
												aria-disabled="false"
												aria-orientation="horizontal"
												style={{
													left: "29.4118%",
													transform: "translateX(-50%)",
												}}
											/>
											<div
												className="rc-slider-handle rc-slider-handle-2"
												tabIndex={0}
												role="slider"
												aria-valuemin={5}
												aria-valuemax={22}
												aria-valuenow={20}
												aria-disabled="false"
												aria-orientation="horizontal"
												style={{
													left: "88.2353%",
													transform: "translateX(-50%)",
												}}
											/>
										</div>
										<div className="box-title-price">
											<span className="title-price">Price :</span>
											<div className="caption-price">
												<div>
													<span>$</span>
													<span className="min-price">10</span>
												</div>
												<span>-</span>
												<div>
													<span>$</span>
													<span className="max-price">20</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="widget-facet">
								<div
									className="facet-title"
									data-bs-target="#brand"
									data-bs-toggle="collapse"
									aria-expanded="true"
									aria-controls="brand"
								>
									<span>Brand</span>
									<span className="icon icon-arrow-up" />
								</div>
								<div id="brand" className="collapse show">
									<ul className="tf-filter-group current-scrollbar mb_36">
										<li className="list-item d-flex gap-12 align-items-center">
											<input className="tf-check" readOnly type="radio" />
											<label className="label">
												<span>Ecomus</span>&nbsp;<span>(9)</span>
											</label>
										</li>
										<li className="list-item d-flex gap-12 align-items-center">
											<input className="tf-check" readOnly type="radio" />
											<label className="label">
												<span>M&amp;H</span>&nbsp;<span>(3)</span>
											</label>
										</li>
									</ul>
								</div>
							</div>
							<div className="widget-facet">
								<div
									className="facet-title"
									data-bs-target="#color"
									data-bs-toggle="collapse"
									aria-expanded="true"
									aria-controls="color"
								>
									<span>Color</span>
									<span className="icon icon-arrow-up" />
								</div>
								<div id="color" className="collapse show">
									<ul className="tf-filter-group filter-color current-scrollbar mb_36">
										<li className="list-item d-flex gap-12 align-items-center">
											<input
												className="tf-check-color bg_orange-3"
												readOnly
												type="checkbox"
												name="color"
											/>
											<label className="label">
												<span>Orange</span>&nbsp;<span>(1)</span>
											</label>
										</li>
										<li className="list-item d-flex gap-12 align-items-center">
											<input
												className="tf-check-color bg_dark"
												readOnly
												type="checkbox"
												name="color"
											/>
											<label className="label">
												<span>Black</span>&nbsp;<span>(6)</span>
											</label>
										</li>
										<li className="list-item d-flex gap-12 align-items-center">
											<input
												className="tf-check-color bg_white"
												readOnly
												type="checkbox"
												name="color"
											/>
											<label className="label">
												<span>White</span>&nbsp;<span>(6)</span>
											</label>
										</li>
										<li className="list-item d-flex gap-12 align-items-center">
											<input
												className="tf-check-color bg_brown"
												readOnly
												type="checkbox"
												name="color"
											/>
											<label className="label">
												<span>Brown</span>&nbsp;<span>(3)</span>
											</label>
										</li>
										<li className="list-item d-flex gap-12 align-items-center">
											<input
												className="tf-check-color bg_purple"
												readOnly
												type="checkbox"
												name="color"
											/>
											<label className="label">
												<span>Light Purple</span>&nbsp;<span>(1)</span>
											</label>
										</li>
										<li className="list-item d-flex gap-12 align-items-center">
											<input
												className="tf-check-color bg_light-green"
												readOnly
												type="checkbox"
												name="color"
											/>
											<label className="label">
												<span>Light Green</span>&nbsp;<span>(2)</span>
											</label>
										</li>
										<li className="list-item d-flex gap-12 align-items-center">
											<input
												className="tf-check-color bg_purple"
												readOnly
												type="checkbox"
												name="color"
											/>
											<label className="label">
												<span>Pink</span>&nbsp;<span>(2)</span>
											</label>
										</li>
										<li className="list-item d-flex gap-12 align-items-center">
											<input
												className="tf-check-color bg_blue-2"
												readOnly
												type="checkbox"
												name="color"
											/>
											<label className="label">
												<span>Blue</span>&nbsp;<span>(1)</span>
											</label>
										</li>
										<li className="list-item d-flex gap-12 align-items-center">
											<input
												className="tf-check-color bg_dark-blue"
												readOnly
												type="checkbox"
												name="color"
											/>
											<label className="label">
												<span>Dark Blue</span>&nbsp;<span>(2)</span>
											</label>
										</li>
										<li className="list-item d-flex gap-12 align-items-center">
											<input
												className="tf-check-color bg_light-grey"
												readOnly
												type="checkbox"
												name="color"
											/>
											<label className="label">
												<span>Light Grey</span>&nbsp;<span>(1)</span>
											</label>
										</li>
										<li className="list-item d-flex gap-12 align-items-center">
											<input
												className="tf-check-color bg_beige"
												readOnly
												type="checkbox"
												name="color"
											/>
											<label className="label">
												<span>Beige</span>&nbsp;<span>(1)</span>
											</label>
										</li>
										<li className="list-item d-flex gap-12 align-items-center">
											<input
												className="tf-check-color bg_light-blue"
												readOnly
												type="checkbox"
												name="color"
											/>
											<label className="label">
												<span>Light Blue</span>&nbsp;<span>(1)</span>
											</label>
										</li>
										<li className="list-item d-flex gap-12 align-items-center">
											<input
												className="tf-check-color bg_grey"
												readOnly
												type="checkbox"
												name="color"
											/>
											<label className="label">
												<span>Grey</span>&nbsp;<span>(1)</span>
											</label>
										</li>
										<li className="list-item d-flex gap-12 align-items-center">
											<input
												className="tf-check-color bg_light-pink"
												readOnly
												type="checkbox"
												name="color"
											/>
											<label className="label">
												<span>Light Pink</span>&nbsp;<span>(1)</span>
											</label>
										</li>
									</ul>
								</div>
							</div>
							<div className="widget-facet">
								<div
									className="facet-title"
									data-bs-target="#size"
									data-bs-toggle="collapse"
									aria-expanded="true"
									aria-controls="size"
								>
									<span>Size</span>
									<span className="icon icon-arrow-up" />
								</div>
								<div id="size" className="collapse show">
									<ul className="tf-filter-group current-scrollbar">
										<li className="list-item d-flex gap-12 align-items-center">
											<input
												className="tf-check tf-check-size"
												readOnly
												type="radio"
											/>
											<label className="label">
												<span>S</span>&nbsp;<span>(9)</span>
											</label>
										</li>
										<li className="list-item d-flex gap-12 align-items-center">
											<input
												className="tf-check tf-check-size"
												readOnly
												type="radio"
											/>
											<label className="label">
												<span>M</span>&nbsp;<span>(11)</span>
											</label>
										</li>
										<li className="list-item d-flex gap-12 align-items-center">
											<input
												className="tf-check tf-check-size"
												readOnly
												type="radio"
											/>
											<label className="label">
												<span>L</span>&nbsp;<span>(11)</span>
											</label>
										</li>
										<li className="list-item d-flex gap-12 align-items-center">
											<input
												className="tf-check tf-check-size"
												readOnly
												type="radio"
											/>
											<label className="label">
												<span>XL</span>&nbsp;<span>(7)</span>
											</label>
										</li>
									</ul>
								</div>
							</div>
						</form>
						<div className="mt-5" />
						<span  className="tf-btn style-2 btn-fill rounded animate-hover-btn">
							Clear Filter
						</span>
					</div>
				</div>
			</div>
		</>
	);
}
