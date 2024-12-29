import Link from "next/link";
import React from "react";

export default function ToolBar() {
	return (
		<>
			<div className="tf-toolbar-bottom type-1150">
				<div className="toolbar-item active">
					<Link
						href="#toolbarShopmb"
						data-bs-toggle="offcanvas"
						aria-controls="offcanvasLeft"
					>
						<div className="toolbar-icon">
							<i className="icon-shop" />
						</div>
						<div className="toolbar-label">Shop</div>
					</Link>
				</div>
				<div className="toolbar-item">
					<Link
						href="#canvasSearch"
						data-bs-toggle="offcanvas"
						aria-controls="offcanvasLeft"
					>
						<div className="toolbar-icon">
							<i className="icon-search" />
						</div>
						<div className="toolbar-label">Search</div>
					</Link>
				</div>
				<div className="toolbar-item">
					<Link href="#login" data-bs-toggle="modal">
						<div className="toolbar-icon">
							<i className="icon-account" />
						</div>
						<div className="toolbar-label">Account</div>
					</Link>
				</div>
				<div className="toolbar-item">
					<Link href="/wishlist">
						<div className="toolbar-icon">
							<i className="icon-heart" />
							<div className="toolbar-count">3</div>
						</div>
						<div className="toolbar-label">Wishlist</div>
					</Link>
				</div>
				<div className="toolbar-item">
					<Link href="#shoppingCart" data-bs-toggle="modal">
						<div className="toolbar-icon">
							<i className="icon-bag" />
							<div className="toolbar-count">1</div>
						</div>
						<div className="toolbar-label">Cart</div>
					</Link>
				</div>
			</div>
		</>
	);
}
