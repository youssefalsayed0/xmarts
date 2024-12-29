import React from "react";
import Link from "next/link";

export default function AccountOrders() {
	return (
		<>
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
									<Link
										className="tf-btn btn-fill animate-hover-btn rounded-0 justify-content-center"
										href="/my-account-orders-details"
									>
										<span>View</span>
									</Link>
								</td>
							</tr>
							<tr className="tf-order-item">
								<td>#345</td>
								<td>August 2, 2024</td>
								<td>On hold</td>
								<td>$300.0 for 1 items</td>
								<td>
									<Link
										className="tf-btn btn-fill animate-hover-btn rounded-0 justify-content-center"
										href="/my-account-orders-details"
									>
										<span>View</span>
									</Link>
								</td>
							</tr>
							<tr className="tf-order-item">
								<td>#567</td>
								<td>August 3, 2024</td>
								<td>On hold</td>
								<td>$400.0 for 1 items</td>
								<td>
									<Link
										className="tf-btn btn-fill animate-hover-btn rounded-0 justify-content-center"
										href="/my-account-orders-details"
									>
										<span>View</span>
									</Link>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}
