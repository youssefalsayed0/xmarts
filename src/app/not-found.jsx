import React from "react";
import notfound from "../assets/images/404.svg"; 
import Image from "next/image";
export default function notFound() {
	return (
		<>
			<section className="page-404-wrap">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="image">
								<Image src={notfound} alt="image" />
							</div>
							<div className="title">Oops...That link is broken.</div>
							<p>
								Sorry for the inconvenience. Go to our homepage to check out our
								latest collections.
							</p>
							<a
								className="tf-btn btn-sm radius-3 btn-fill btn-icon animate-hover-btn"
								href="/"
							>
								Go to Home
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}