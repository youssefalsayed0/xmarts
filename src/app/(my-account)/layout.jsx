import React from "react";
import Banner from "../_Components/Banner/Banner";
import Link from "next/link";

export default function layout({ children }) {
	return (
		<>
			<Banner />
			<section className="flat-spacing-11">
				<div className="container">
					<div className="row">
						<div className="col-lg-3">
							<ul className="my-account-nav">
								<li>
									<Link className="my-account-nav-item " href="/orders">
										Dashboard
									</Link>
								</li>
								<li>
									<Link className="my-account-nav-item " href="/orders">
										Orders
									</Link>
								</li>
								<li>
									<Link
										className="my-account-nav-item "
										href="/addresses"
									>
										Addresses
									</Link>
								</li>
								<li>
									<Link
										className="my-account-nav-item "
										href="/account-details"
									>
										Account Details
									</Link>
								</li>
								<li>
									<a
										className="my-account-nav-item "
										href="/my-account-wishlist"
									>
										Wishlist
									</a>
								</li>
								<li>
									<a className="my-account-nav-item" href="/login">
										Logout
									</a>
								</li>
							</ul>
						</div>
						<div className="col-lg-9">
							{children}
						</div>
					</div>
				</div>
			</section>

		</>
	);
}
