import React from "react";

export default function SearchBar() {
	return (
		<>
			<div className="tf-search-head">
				<form className="tf-mini-search-frm">
					<fieldset className="text">
						<input
							required
							placeholder="Search"
							className
							tabIndex={0}
							aria-required="true"
							type="text"
							defaultValue
							name="text"
						/>
					</fieldset>
					<button className type="submit">
						<i className="icon-search" />
					</button>
				</form>
				<div className="tf-col-quicklink">
					<span className="title">Quick link:</span>
					<a href="/shop-collection-list">Fashion</a>,
					<a href="/home-men">Men</a>,<a href="/shop-women">Women</a>,
					<a href="/shop-collection-sub">Accessories</a>
				</div>
			</div>
		</>
	);
}
