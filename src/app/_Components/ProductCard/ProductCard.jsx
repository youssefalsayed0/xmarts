import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import product1 from "@images/products/product1.jpg";
import product2 from "@images/products/product2.jpg";
import product3 from "@images/products/product3.jpg";
import product4 from "@images/products/product4.jpg";
import Image from 'next/image';
import Link from 'next/link';
export default function ProductCard({ text }) {
    return (
        <>

            <section className="flat-spacing-2">
                <div className="container">
                    <SectionTitle text={text} />

                    <div className="wrapper-control-shop">
                        {/* <div
                            style={{
                                width: "fit-content",
                                margin: "0px auto 24px",
                                fontSize: 17,
                            }}
                        >
                            12 product(s) found
                        </div> */}
                        <div className="grid-layout wrapper-shop" data-grid="grid-4">
                            <div className="card-product fl-item">
                                <div className="card-product-wrapper">
                                    <Link className="product-img" href="/product-detail/1">
                                        <Image
                                            data-src="/images/products/orange-1.jpg"
                                            alt="image-product"
                                            loading="lazy"
                                            width={720}
                                            height={1005}
                                            placeholder="blur"
                                            className="lazyload img-product"
                                            src={product1}
                                            style={{ color: "transparent" }}
                                        />
                                        <Image
                                            data-src="/images/products/orange-1.jpg"
                                            alt="image-product"
                                            loading="lazy"
                                            width={720}
                                            height={1005}
                                            placeholder="blur"
                                            className="lazyload img-hover"
                                            src={product1}
                                            style={{ color: "transparent" }}
                                        />
                                    </Link>
                                    <div className="list-product-btn">
                                        <Link
                                            href="#quick_add"
                                            data-bs-toggle="modal"
                                            className="box-icon bg_white quick-add tf-btn-loading"
                                        >
                                            <span className="icon icon-bag" />
                                            <span className="tooltip">Quick Add</span>
                                        </Link>
                                        <Link href="#" className="box-icon bg_white wishlist btn-icon-action">
                                            <span className="icon icon-heart " />
                                            <span className="tooltip"> Add To Wishlisted</span>
                                            <span className="icon icon-delete" />
                                        </Link>
                                        <Link
                                            href="#compare"
                                            data-bs-toggle="offcanvas"
                                            aria-controls="offcanvasLeft"
                                            className="box-icon bg_white compare btn-icon-action"
                                        >
                                            <span className="icon icon-share  " />
                                            <span className="tooltip"> Share </span>
                                            <span className="icon icon-check" />
                                        </Link>
                                        <Link
                                            href="#quick_view"
                                            data-bs-toggle="modal"
                                            className="box-icon bg_white quickview tf-btn-loading"
                                        >
                                            <span className="icon icon-view" />
                                            <span className="tooltip">Quick View</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="card-product-info">
                                    <Link className="title link" href="/product-detail/1">
                                        PLATE OF EGGS
                                    </Link>
                                    <span className="price">$16.95</span>
                                </div>
                            </div>
                            <div className="card-product fl-item">
                                <div className="card-product-wrapper">
                                    <Link className="product-img" href="/product-detail/1">
                                        <Image
                                            data-src="/images/products/orange-1.jpg"
                                            alt="image-product"
                                            loading="lazy"
                                            width={720}
                                            height={1005}
                                            placeholder="blur"
                                            className="lazyload img-product"
                                            src={product2}
                                            style={{ color: "transparent" }}
                                        />
                                        <Image
                                            data-src="/images/products/orange-1.jpg"
                                            alt="image-product"
                                            loading="lazy"
                                            width={720}
                                            height={1005}
                                            placeholder="blur"
                                            className="lazyload img-hover"
                                            src={product2}
                                            style={{ color: "transparent" }}
                                        />
                                    </Link>
                                    <div className="list-product-btn">
                                        <Link
                                            href="#quick_add"
                                            data-bs-toggle="modal"
                                            className="box-icon bg_white quick-add tf-btn-loading"
                                        >
                                            <span className="icon icon-bag" />
                                            <span className="tooltip">Quick Add</span>
                                        </Link>
                                        <Link href="#" className="box-icon bg_white wishlist btn-icon-action">
                                            <span className="icon icon-heart " />
                                            <span className="tooltip"> Add To Wishlisted</span>
                                            <span className="icon icon-delete" />
                                        </Link>
                                        <Link
                                            href="#compare"
                                            data-bs-toggle="offcanvas"
                                            aria-controls="offcanvasLeft"
                                            className="box-icon bg_white compare btn-icon-action"
                                        >
                                            <span className="icon icon-share  " />
                                            <span className="tooltip"> Share </span>
                                            <span className="icon icon-check" />
                                        </Link>
                                        <Link
                                            href="#quick_view"
                                            data-bs-toggle="modal"
                                            className="box-icon bg_white quickview tf-btn-loading"
                                        >
                                            <span className="icon icon-view" />
                                            <span className="tooltip">Quick View</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="card-product-info">
                                    <Link className="title link" href="/product-detail/1">
                                        PLATE OF EGGS
                                    </Link>
                                    <span className="price">$16.95</span>
                                </div>
                            </div>
                            <div className="card-product fl-item">
                                <div className="card-product-wrapper">
                                    <Link className="product-img" href="/product-detail/1">
                                        <Image
                                            data-src="/images/products/orange-1.jpg"
                                            alt="image-product"
                                            loading="lazy"
                                            width={720}
                                            height={1005}
                                            placeholder="blur"
                                            className="lazyload img-product"
                                            src={product3}
                                            style={{ color: "transparent" }}
                                        />
                                        <Image
                                            data-src="/images/products/orange-1.jpg"
                                            alt="image-product"
                                            loading="lazy"
                                            width={720}
                                            height={1005}
                                            placeholder="blur"
                                            className="lazyload img-hover"
                                            src={product3}
                                            style={{ color: "transparent" }}
                                        />
                                    </Link>
                                    <div className="list-product-btn">
                                        <Link
                                            href="#quick_add"
                                            data-bs-toggle="modal"
                                            className="box-icon bg_white quick-add tf-btn-loading"
                                        >
                                            <span className="icon icon-bag" />
                                            <span className="tooltip">Quick Add</span>
                                        </Link>
                                        <Link href="#" className="box-icon bg_white wishlist btn-icon-action">
                                            <span className="icon icon-heart " />
                                            <span className="tooltip"> Add To Wishlisted</span>
                                            <span className="icon icon-delete" />
                                        </Link>
                                        <Link
                                            href="#compare"
                                            data-bs-toggle="offcanvas"
                                            aria-controls="offcanvasLeft"
                                            className="box-icon bg_white compare btn-icon-action"
                                        >
                                            <span className="icon icon-share  " />
                                            <span className="tooltip"> Share </span>
                                            <span className="icon icon-check" />
                                        </Link>
                                        <Link
                                            href="#quick_view"
                                            data-bs-toggle="modal"
                                            className="box-icon bg_white quickview tf-btn-loading"
                                        >
                                            <span className="icon icon-view" />
                                            <span className="tooltip">Quick View</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="card-product-info">
                                    <Link className="title link" href="/product-detail/1">
                                        PLATE OF EGGS
                                    </Link>
                                    <span className="price">$16.95</span>
                                </div>
                            </div>
                            <div className="card-product fl-item">
                                <div className="card-product-wrapper">
                                    <Link className="product-img" href="/product-detail/1">
                                        <Image
                                            data-src="/images/products/orange-1.jpg"
                                            alt="image-product"
                                            loading="lazy"
                                            width={720}
                                            height={1005}
                                            placeholder="blur"
                                            className="lazyload img-product"
                                            src={product4}
                                            style={{ color: "transparent" }}
                                        />
                                        <Image
                                            data-src="/images/products/orange-1.jpg"
                                            alt="image-product"
                                            loading="lazy"
                                            width={720}
                                            height={1005}
                                            placeholder="blur"
                                            className="lazyload img-hover"
                                            src={product4}
                                            style={{ color: "transparent" }}
                                        />
                                    </Link>
                                    <div className="list-product-btn">
                                        <Link
                                            href="#quick_add"
                                            data-bs-toggle="modal"
                                            className="box-icon bg_white quick-add tf-btn-loading"
                                        >
                                            <span className="icon icon-bag" />
                                            <span className="tooltip">Quick Add</span>
                                        </Link>
                                        <Link className="box-icon bg_white wishlist btn-icon-action">
                                            <span className="icon icon-heart " />
                                            <span className="tooltip"> Add To Wishlisted</span>
                                            <span className="icon icon-delete" />
                                        </Link>
                                        <Link
                                            href="#compare"
                                            data-bs-toggle="offcanvas"
                                            aria-controls="offcanvasLeft"
                                            className="box-icon bg_white compare btn-icon-action"
                                        >
                                            <span className="icon icon-share  " />
                                            <span className="tooltip"> Share </span>
                                            <span className="icon icon-check" />
                                        </Link>
                                        <Link
                                            href="#quick_view"
                                            data-bs-toggle="modal"
                                            className="box-icon bg_white quickview tf-btn-loading"
                                        >
                                            <span className="icon icon-view" />
                                            <span className="tooltip">Quick View</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="card-product-info">
                                    <Link className="title link" href="/product-detail/1">
                                        PLATE OF EGGS
                                    </Link>
                                    <span className="price">$16.95</span>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>



        </>
    )
}
