import React from "react";
import Link from "next/link";

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
					<Link href="/shop-collection-list">Fashion</Link>,
					<Link href="/home-men">Men</Link>,<Link href="/shop-women">Women</Link>,
					<Link href="/shop-collection-sub">Accessories</Link>
				</div>
			</div>
		</>
	);
}
