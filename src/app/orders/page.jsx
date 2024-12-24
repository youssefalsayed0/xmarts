import React from "react";

export default function page() {
	return (
		<>
			<section className="flat-spacing-11">
				<div className="container">
					<div className="row">
						<div className="col-lg-3">
							<ul className="my-account-nav">
								<li>
									<a className="my-account-nav-item " href="/my-account">
										Dashboard
									</a>
								</li>
								<li>
									<a
										className="my-account-nav-item active"
										href="/my-account-orders"
									>
										Orders
									</a>
								</li>
								<li>
									<a
										className="my-account-nav-item "
										href="/my-account-address"
									>
										Addresses
									</a>
								</li>
								<li>
									<a className="my-account-nav-item " href="/my-account-edit">
										Account Details
									</a>
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
							<div className="my-account-content account-order">
								<div className="wrap-account-order">
									<table>
										<thead>
											<tr>
												<th className="fw-6">Order</th>
												<th className="fw-6">Date</th>
												<th className="fw-6">Status</th>
												<th className="fw-6">Total</th>
												<th className="fw-6">Actions</th>
											</tr>
										</thead>
										<tbody>
											<tr className="tf-order-item">
												<td>#123</td>
												<td>August 1, 2024</td>
												<td>On hold</td>
												<td>$200.0 for 1 items</td>
												<td>
													<a
														className="tf-btn btn-fill animate-hover-btn rounded-0 justify-content-center"
														href="/my-account-orders-details"
													>
														<span>View</span>
													</a>
												</td>
											</tr>
											<tr className="tf-order-item">
												<td>#345</td>
												<td>August 2, 2024</td>
												<td>On hold</td>
												<td>$300.0 for 1 items</td>
												<td>
													<a
														className="tf-btn btn-fill animate-hover-btn rounded-0 justify-content-center"
														href="/my-account-orders-details"
													>
														<span>View</span>
													</a>
												</td>
											</tr>
											<tr className="tf-order-item">
												<td>#567</td>
												<td>August 3, 2024</td>
												<td>On hold</td>
												<td>$400.0 for 1 items</td>
												<td>
													<a
														className="tf-btn btn-fill animate-hover-btn rounded-0 justify-content-center"
														href="/my-account-orders-details"
													>
														<span>View</span>
													</a>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
