import React from "react";
import Product from "../product/product";

export default function ShopPage() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Shop</h1>
              </div>
            </div>
            <div className="col-lg-7"></div>
          </div>
        </div>
      </div>
      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            <Product />
          </div>
        </div>
      </div>
    </>
  );
}
