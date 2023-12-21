import Link from "next/link";
import React from "react";
import { LINK } from "~/lib/constants/routes/link";

export default function Product() {
  return (
    <>
      <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
        <Link className="product-item" href={LINK.CART}>
          <img
            src="images/product-1.png"
            className="img-fluid product-thumbnail"
          />
          <h3 className="product-title">Nordic Chair</h3>
          <strong className="product-price">$50.00</strong>
          <span className="icon-cross">
            <img src="images/cross.svg" className="img-fluid" />
          </span>
        </Link>
      </div>
      {/* End Column 2 */}
      {/* Start Column 3 */}
      <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
        <Link className="product-item" href={LINK.CART}>
          <img
            src="images/product-2.png"
            className="img-fluid product-thumbnail"
          />
          <h3 className="product-title">Kruzo Aero Chair</h3>
          <strong className="product-price">$78.00</strong>
          <span className="icon-cross">
            <img src="images/cross.svg" className="img-fluid" />
          </span>
        </Link>
      </div>
      {/* End Column 3 */}
      {/* Start Column 4 */}
      <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
        <a className="product-item" href="cart.html">
          <img
            src="images/product-3.png"
            className="img-fluid product-thumbnail"
          />
          <h3 className="product-title">Ergonomic Chair</h3>
          <strong className="product-price">$43.00</strong>
          <span className="icon-cross">
            <img src="images/cross.svg" className="img-fluid" />
          </span>
        </a>
      </div>
    </>
  );
}
